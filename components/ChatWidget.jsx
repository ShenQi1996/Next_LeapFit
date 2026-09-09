import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import helloAnimation from '../pages/images/hello.json';
import styles from './ChatWidget.module.scss';

const Lottie = dynamic(() => import('lottie-react').then((mod) => mod.Lottie), {
  ssr: false,
});

const WELCOME_MESSAGE = {
  role: 'assistant',
  content:
    "Hey, welcome in! I can help with fit tests, pricing, masks, booking, verifying an e-card, or a lost card. What can I do for you?",
};

const MAX_DAILY_QUESTIONS = 30;
const QUESTION_COUNT_KEY = 'secureFitChatDaily';
const LIMIT_MESSAGE =
  "You've asked 30 questions today. Email us at SecureFit2024@gmail.com or grab a time on the calendar — we'll take it from there.";

const LINK_PATTERN =
  /(https?:\/\/[^\s<>"'`]+|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;

const ALLOWED_LINK_HOSTS = new Set([
  'calendly.com',
  'www.calendly.com',
  'next-leap-fit.vercel.app',
  'next-leap-fit-bk-2026.vercel.app',
  '2026-fit-testing-results-e-card.vercel.app',
]);

const ALLOWED_EMAILS = new Set(['securefit2024@gmail.com', 'securefit.bk@gmail.com']);

const utcDay = () => new Date().toISOString().slice(0, 10);

const trimTrailingPunctuation = (value) => value.replace(/[),.;!?]+$/g, '');

const isAllowedHttpUrl = (value) => {
  try {
    const parsed = new URL(value);
    const protocolOk = parsed.protocol === 'http:' || parsed.protocol === 'https:';
    return protocolOk && ALLOWED_LINK_HOSTS.has(parsed.hostname.toLowerCase());
  } catch {
    return false;
  }
};

const isAllowedEmail = (value) => ALLOWED_EMAILS.has(value.toLowerCase());

const expandMarkdownLinks = (text) =>
  text.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, (_match, _label, url) => url);

const renderLinkedText = (text, linkClassName) => {
  const source = expandMarkdownLinks(text);
  LINK_PATTERN.lastIndex = 0;
  const parts = source.split(LINK_PATTERN);

  return parts.map((part, index) => {
    if (!part) {
      return null;
    }

    const cleaned = trimTrailingPunctuation(part);
    const trailing = part.slice(cleaned.length);

    if (isAllowedHttpUrl(cleaned)) {
      return (
        <React.Fragment key={`${cleaned}-${index}`}>
          <a
            className={linkClassName}
            href={cleaned}
            target="_blank"
            rel="noopener noreferrer"
          >
            {cleaned}
          </a>
          {trailing}
        </React.Fragment>
      );
    }

    if (isAllowedEmail(cleaned)) {
      return (
        <React.Fragment key={`${cleaned}-${index}`}>
          <a className={linkClassName} href={`mailto:${cleaned}`}>
            {cleaned}
          </a>
          {trailing}
        </React.Fragment>
      );
    }

    return <React.Fragment key={`text-${index}`}>{part}</React.Fragment>;
  });
};

const readQuestionCount = () => {
  if (typeof window === 'undefined') {
    return 0;
  }

  try {
    const stored = JSON.parse(window.localStorage.getItem(QUESTION_COUNT_KEY) || 'null');
    const today = utcDay();
    if (!stored || stored.day !== today) {
      return 0;
    }
    const count = Number(stored.count);
    return Number.isFinite(count) && count > 0 ? count : 0;
  } catch {
    return 0;
  }
};

const writeQuestionCount = (count) => {
  window.localStorage.setItem(
    QUESTION_COUNT_KEY,
    JSON.stringify({ day: utcDay(), count })
  );
};

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [questionCount, setQuestionCount] = useState(0);
  const listRef = useRef(null);
  const limitReached = questionCount >= MAX_DAILY_QUESTIONS;

  useEffect(() => {
    setQuestionCount(readQuestionCount());
  }, []);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, open, loading]);

  const sendMessage = async (event) => {
    event.preventDefault();
    const question = input.trim();
    if (!question || loading || limitReached) {
      return;
    }

    const nextMessages = [...messages, { role: 'user', content: question }];
    setMessages(nextMessages);
    setInput('');
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages.filter((message) => message !== WELCOME_MESSAGE),
        }),
      });
      const data = await response.json();

      if (response.status === 429 || !response.ok || !data.reply) {
        if (response.status === 429) {
          writeQuestionCount(MAX_DAILY_QUESTIONS);
          setQuestionCount(MAX_DAILY_QUESTIONS);
        }
        throw new Error(data.error || 'Something went wrong.');
      }

      const nextCount = questionCount + 1;
      writeQuestionCount(nextCount);
      setQuestionCount(nextCount);
      setMessages([...nextMessages, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      setError(err.message || 'Could not send your question.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.chatRoot}>
      {open && (
        <section className={styles.panel} aria-label="Chat with Secure Fit">
          <header className={styles.header}>
            <div>
              <p className={styles.title}>Hey, we're Secure Fit</p>
              <p className={styles.subtitle}>Ask anything — fit tests, prices, booking, you name it.</p>
            </div>
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </header>

          <div className={styles.messages} ref={listRef}>
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={message.role === 'user' ? styles.userBubble : styles.botBubble}
              >
                {renderLinkedText(
                  message.content,
                  message.role === 'user' ? styles.userLink : styles.botLink
                )}
              </div>
            ))}
            {loading && <div className={styles.botBubble}>One sec...</div>}
          </div>

          {error && <p className={styles.error}>{error}</p>}
          {limitReached && (
            <p className={styles.limitNote}>{renderLinkedText(LIMIT_MESSAGE, styles.botLink)}</p>
          )}

          <form className={styles.form} onSubmit={sendMessage}>
            <input
              className={styles.input}
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={limitReached ? 'Question limit reached' : 'Say hi or ask a question...'}
              maxLength={1000}
              aria-label="Chat question"
              disabled={limitReached || loading}
            />
            <button
              className={styles.sendButton}
              type="submit"
              disabled={limitReached || loading || !input.trim()}
            >
              Send
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        className={styles.toggle}
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? 'Close chat' : 'Say hi to Secure Fit'}
      >
        <Lottie
          src={helloAnimation}
          loop={!open}
          autoplay={!open}
          className={styles.toggleAnimation}
        />
        {open && <span className={styles.toggleClose}>×</span>}
      </button>
    </div>
  );
};

export default ChatWidget;
