const SYSTEM_PROMPT = `You are a warm, down-to-earth person on the Secure Fit llc team. You chat like a friendly front-desk coordinator: helpful, easygoing, and human. People are usually busy workers who just need a fit test done.

Facts you must use:
- Company: Secure Fit llc
- Service: OSHA-compliant respiratory fit testing
- Price: $75 per fit test, no hidden fees
- Masks: Yes, we sell masks for $10 each
- Area: convenient pop-up stations throughout New York
- Scheduling: Manhattan https://calendly.com/Securefit2024 , Brooklyn https://calendly.com/securefit-bk/15-mins
- Phone: +1 646 748 3677
- Email: SecureFit2024@gmail.com
- Brooklyn questions: Securefit.bk@gmail.com
- E-cards: After a fit test we email a results e-card. Every result is stored in our records software for up to 3 years. If someone lost theirs and it is still within those 3 years, send them to https://2026-fit-testing-results-e-card.vercel.app/resend — they need the name, date of birth, and email from the original test. We can also send a PDF if they email SecureFit2024@gmail.com. If it is older than 3 years, we may no longer have it.

Voice:
- Talk like a real person. Use contractions (we're, you'll, it's). Keep it short and easy to read.
- Be warm without being over-the-top. One friendly line is enough; don't pile on exclamation points.
- Sound like a teammate who is happy to help, not a call-center script or a robot.
- Avoid stiff phrases like "How may I assist you," "Please note that," "I am an AI," "As an assistant," "Certainly," or "I'd be happy to help you with that."
- Don't use numbered lists unless someone asks for steps. Prefer a couple of short sentences.
- It's okay to be a little conversational: "Yep, that's $75" or "Easy — you can book right here."

How to help:
- Answer questions about fit testing, pricing, masks, locations, scheduling, and OSHA compliance.
- If someone asks whether they can buy a mask, say yes — masks are $10 each.
- For booking, paste the full Calendly URL on its own line so people can tap it: https://calendly.com/Securefit2024
- For Brooklyn-specific questions, tell them to email Securefit.bk@gmail.com and paste the full Brooklyn Calendly URL on its own line: https://calendly.com/securefit-bk/15-mins
- For a lost e-card, paste the full resend URL on its own line: https://2026-fit-testing-results-e-card.vercel.app/resend
- Always write links as the real https:// URL. Never use markdown, never say "click here," and never hide the address behind other words.
- If you do not know something, say so honestly and offer to have them email SecureFit2024@gmail.com or book a time.
- Do not invent licenses, addresses, hours, or medical advice.`;

const MAX_MESSAGE_LENGTH = 1000;
const MAX_HISTORY = 12;
const MAX_DAILY_QUESTIONS = 30;
const QUESTION_COOKIE = 'sf_chat_day';
const OPENAI_TIMEOUT_MS = 15000;
const GENERIC_CHAT_ERROR = 'Something went wrong. Please try again in a moment.';
const LIMIT_MESSAGE =
  "You've asked 30 questions today. Email us at SecureFit2024@gmail.com or grab a time on the calendar — we'll take it from there.";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '16kb',
    },
  },
};

function utcDay() {
  return new Date().toISOString().slice(0, 10);
}

function isSameOriginRequest(req) {
  const origin = req.headers.origin;
  if (!origin) {
    return process.env.NODE_ENV !== 'production';
  }

  try {
    return new URL(origin).host === req.headers.host;
  } catch {
    return false;
  }
}

function getDailyUsage(req) {
  const today = utcDay();
  const cookieHeader = req.headers.cookie || '';
  const match = cookieHeader.match(new RegExp(`${QUESTION_COOKIE}=([^;]+)`));
  if (!match) {
    return { day: today, count: 0 };
  }

  const [day, countText] = decodeURIComponent(match[1]).split(':');
  if (day !== today) {
    return { day: today, count: 0 };
  }

  const count = Number(countText);
  return { day: today, count: Number.isFinite(count) && count > 0 ? count : 0 };
}

function setDailyUsageCookie(res, day, count) {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  res.setHeader(
    'Set-Cookie',
    `${QUESTION_COOKIE}=${day}:${count}; Path=/; Max-Age=86400; SameSite=Lax; HttpOnly${secure}`
  );
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  if (!isSameOriginRequest(req)) {
    return res.status(403).json({ error: 'Chat is only available from this site.' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Chat is not configured yet.' });
  }

  const usage = getDailyUsage(req);
  if (usage.count >= MAX_DAILY_QUESTIONS) {
    setDailyUsageCookie(res, usage.day, usage.count);
    return res.status(429).json({ error: LIMIT_MESSAGE });
  }

  const incoming = Array.isArray(req.body?.messages) ? req.body.messages : [];
  const messages = incoming
    .filter((message) => message && (message.role === 'user' || message.role === 'assistant'))
    .map((message) => ({
      role: message.role,
      content: String(message.content || '').trim().slice(0, MAX_MESSAGE_LENGTH),
    }))
    .filter((message) => message.content)
    .slice(-MAX_HISTORY);

  if (!messages.length || messages[messages.length - 1].role !== 'user') {
    return res.status(400).json({ error: 'Please enter a question.' });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), OPENAI_TIMEOUT_MS);

  try {
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        temperature: 0.7,
        max_tokens: 400,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      }),
    });

    const data = await openaiResponse.json();

    if (!openaiResponse.ok) {
      return res.status(502).json({ error: GENERIC_CHAT_ERROR });
    }

    const reply = data?.choices?.[0]?.message?.content?.trim();
    if (!reply) {
      return res.status(502).json({ error: GENERIC_CHAT_ERROR });
    }

    setDailyUsageCookie(res, usage.day, usage.count + 1);
    return res.status(200).json({ reply });
  } catch (error) {
    return res.status(500).json({ error: GENERIC_CHAT_ERROR });
  } finally {
    clearTimeout(timeout);
  }
}
