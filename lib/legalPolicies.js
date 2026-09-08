import { CONTACT_EMAIL, LEGAL_EFFECTIVE_DATE, LEGAL_MAILING_LINE } from './site';

export const LEGAL_DISCLAIMER =
  'These pages are Secure Fit LLC public website and service policies. They are not a medical evaluation, an OSHA certification of the business, a HIPAA Notice of Privacy Practices, or legal advice about your workplace program.';

export const LEGAL_POLICIES = [
  {
    slug: 'service',
    number: '01',
    title: 'Service and Respiratory Fit-Testing Policy',
    shortTitle: 'Service and fit testing',
    summary:
      'What a fit test covers, medical clearance, preparation, testing methods, results, and e-card delivery.',
    contactLabel: 'Contact',
    sections: [
      {
        title: '1. What our service covers',
        paragraphs: [
          'Secure Fit LLC provides respiratory fit-testing services by appointment and through approved group or on-site arrangements. Your booking confirmation identifies the provider, test type, location, price, and included services. A link to another location does not itself make that location part of your booking or identify the same legal provider.',
          'A fit test evaluates the fit of a particular respirator make, model, style, and size on a particular person under the test conditions. Our service includes instructions needed for the test, the selected protocol, and documentation of the actual outcome. Only methods and respirator configurations expressly confirmed for your appointment are included. Quantitative testing, medical evaluations, workplace hazard assessments, training programs, safety consulting, and sales of respirators are not included unless separately agreed in writing.',
        ],
      },
      {
        title: '2. Medical evaluation comes before testing',
        paragraphs: [
          'A fit test is not a medical evaluation, diagnosis, treatment, or general fitness-for-duty examination. For required workplace respirator use, a physician or other appropriately licensed health care professional must complete the required medical evaluation before fit testing or required use. Before we proceed, we require the applicable written clearance or a verifiable confirmation from the responsible employer/program administrator that identifies the participant, authorized respirator use, and any relevant restrictions. A checkbox stating “I feel healthy” is not a substitute.',
          'Provide only the clearance information reasonably needed to determine whether testing may proceed. Do not send full medical questionnaires, diagnoses, medication lists, or unrelated records to our general inbox. Medical questions and clinical restrictions must be addressed with the evaluating professional. We will postpone testing where clearance is missing, unclear, inconsistent with the planned test, or requires further review.',
        ],
      },
      {
        title: '3. Selecting the correct respirator',
        paragraphs: [
          'Your employer or respiratory-protection program administrator is responsible for identifying the appropriate respirator for workplace hazards and intended use. Tell us the required make, model, style, and size before your appointment. Bring the respirator specified in your confirmation and any equipment normally worn with it that could affect the fit.',
          'Confirm in advance whether masks, alternative models, sizes, cartridges, or adapters will be supplied by you, the employer, or Secure Fit. Do not assume every model is stocked. We will not substitute an unapproved configuration or claim that a passing result for one model covers all masks. Where an acceptable fit cannot be obtained, another suitable model or size, another method, or another appointment may be needed.',
        ],
      },
      {
        title: '4. Preparing for the appointment',
        paragraphs: [
          'Arrive at the confirmed time with the requested clearance confirmation, identification sufficient to match the booking, and the required respirator and protective equipment. We do not routinely need a photocopy of your identification or your Social Security number.',
          'For saccharin or Bitrex qualitative testing, do not eat, drink anything other than plain water, smoke, or chew gum for at least 15 minutes before the test. Follow any additional method-specific preparation instructions in your confirmation. Tell the technician before testing about a known sensitivity to the proposed agent or another concern that could interfere with safe participation.',
          'Hair, clothing, or equipment must not interfere with the sealing surface or valves. We cannot conduct a valid tight-fitting respirator test with interfering facial hair. Contact us in advance about disability, religious, communication, or other accommodation needs. We will discuss accessible testing arrangements and coordinate with the responsible program; we do not require you to waive accommodation rights or independently determine an employment accommodation.',
        ],
      },
      {
        title: '5. Testing methods and participation',
        paragraphs: [
          'We explain the procedure and use the applicable accepted protocol without shortening required steps to fit a schedule. Qualitative testing relies on the participant’s response to a test agent; quantitative testing uses instrument measurements. Where a qualitative method requires sensitivity screening, inability to detect the screening agent is not a passing test. For negative-pressure air-purifying respirators, qualitative testing is limited to applications requiring a fit factor of 100 or less. We decline or refer requests outside the method’s permitted scope.',
          'Follow instructions, give truthful responses, and immediately report detection of the agent, discomfort, or a problem with the respirator. You may ask questions, request a pause, or stop participating at any time. Payment does not purchase a passing result. We will not backdate, falsify, or certify a test that was not properly completed.',
        ],
      },
      {
        title: '6. Safety, illness, and stopping a test',
        paragraphs: [
          'Contact us before attending with an illness or condition that could affect safe testing or expose others. Do not conceal symptoms to avoid rescheduling. If you develop breathing difficulty or another concerning symptom during testing, tell the technician immediately. Testing will stop and further evaluation may be required. Our website, inbox, and scheduling system are not emergency services; call 911 for an emergency.',
          'We may pause, postpone, or decline a test because of missing prerequisites, incompatible equipment, unsafe conditions, inability to complete the protocol, interference with the seal, equipment problems, or abusive or threatening conduct. A safety postponement is not automatically a failure. Our cancellation policy explains how payments are handled; an invalid or unperformed test will never be documented as a pass.',
        ],
      },
      {
        title: '7. Results, repeat testing, and limitations',
        paragraphs: [
          'Records identify the actual outcome, such as pass, fail, incomplete, or not assessable with the selected method. An unsuccessful result may require adjustment, another respirator, another test method, or review by the employer or evaluating professional. Any additional paid attempt must be explained and agreed to in advance. Administrative correction of an error does not change a genuine test outcome.',
          'Passing does not guarantee freedom from exposure, infection, injury, or illness. It does not replace the employer’s hazard assessment, written respiratory-protection program, medical evaluations, equipment selection, training, maintenance, supervision, or other duties. A user seal check is still needed each time a tight-fitting respirator is donned; it does not replace a fit test.',
          'For required workplace use, routine testing is at least annual, and earlier testing may be needed after a change in respirator or a physical change affecting fit. A displayed next-test date is not a guarantee that the respirator will remain suitable until then. Three-year record availability is a storage policy, not a three-year testing interval.',
        ],
      },
      {
        title: '8. E-cards and complaints',
        paragraphs: [
          'After a completed test and review, we provide the record through the delivery method agreed with you. Our target is two business days, not a guaranteed same-day service. We will explain a material delay that we know about. Identity questions, incomplete information, or quality review may delay issuance. The E-Card and Records Policy governs copies, corrections, retention, and sharing.',
          `Raise a concern at ${CONTACT_EMAIL} with your booking reference and a brief description. We review complaints without requiring a favorable review or preventing you from contacting your employer, a regulator, or another available complaint channel.`,
        ],
      },
    ],
  },
  {
    slug: 'booking',
    number: '02',
    title: 'Booking, Payment, Cancellation and Refund Policy',
    shortTitle: 'Booking and refunds',
    summary:
      'The $75 individual price, 24-hour cancellation, $25 late/no-show limit, refunds, and group-booking rules.',
    contactLabel: 'Contact',
    sections: [
      {
        title: '1. Booking and price',
        paragraphs: [
          'An appointment is confirmed only when you receive a confirmation identifying the service, provider, location, date, and time. Appointment times use the time zone shown in the confirmation. Map illustrations and service-area descriptions are not confirmed testing addresses.',
          'The standard individual price is $75 for one participant and one completed fit test with one selected respirator configuration. Preliminary fitting instructions and the required sensitivity screening for the selected qualitative method are included. Extra respirators, a second complete paid test, additional locations, travel, consulting, or other services are included only when stated in writing. Required charges and the total payable must be disclosed before purchase; no mandatory fee will be added after you agree. Any legally required tax is separately identified before payment.',
          'We identify the person or organization responsible for payment before testing. A group organizer’s signature does not authorize us to charge a participant’s card. Where an employer must bear a cost by law, this policy does not transfer that obligation to the worker. Confirm reimbursement or direct billing arrangements with your employer in advance.',
        ],
      },
      {
        title: '2. Payment authorization',
        paragraphs: [
          'Use only a payment method you are authorized to use. Payment is due at the stage identified in the booking confirmation. We provide a receipt identifying the paid service. Do not email card numbers, bank credentials, or payment security codes. Card-on-file charges require a separately disclosed authorization; agreeing to these terms alone does not authorize an undisclosed future charge. No recurring subscription is created by a fit-test booking.',
        ],
      },
      {
        title: '3. Individual cancellations and rescheduling',
        paragraphs: [
          'Cancel or reschedule at least 24 hours before the scheduled start for a full refund of prepaid, unused service fees or a transfer to another available appointment. Use the cancellation method in your confirmation or email us; the timestamp of your request controls, not when staff happen to open it.',
          'For a cancellation within 24 hours or a no-show, we may charge or retain no more than $25 only if that fee was clearly disclosed and affirmatively accepted before booking. Any remaining prepaid unused balance is refundable. If the fee was not disclosed and agreed to, we will not impose it. We do not charge both the full unperformed test fee and a cancellation penalty for the same missed appointment.',
          'Arriving more than 10 minutes late may require rescheduling if the full protocol cannot be safely completed. Staff will not shorten testing. Any late-arrival fee is subject to the same advance-disclosure rule and $25 maximum.',
        ],
      },
      {
        title: '4. Illness, emergency, and missing prerequisites',
        paragraphs: [
          'Contact us as soon as reasonably possible about acute illness, an emergency, or an accommodation need. We offer one no-fee rescheduling accommodation for an individual booking in these circumstances, subject to an available appointment. We do not require detailed medical records to request that accommodation and will consider other reasonable requests individually.',
          'If screening shows that a selected agent cannot be used, or testing is stopped before a completed test because of a safety concern, we offer an available appropriate alternative, a reschedule, or a refund for the unperformed test. We do not charge the full completed-test fee for an incomplete or invalid test under this policy. For a preventable missing prerequisite, a previously accepted reservation fee may apply, but it will not exceed the cancellation limits above. A requested accommodation will not itself attract a penalty.',
        ],
      },
      {
        title: '5. Completed tests and additional attempts',
        paragraphs: [
          'A properly completed test is a paid professional service regardless of whether the result is pass or fail. Failure alone is not grounds for a refund. You are paying for performance of the agreed test and accurate documentation, not a guaranteed pass or employment clearance.',
          'Additional paid attempts require your advance agreement to the price. When our error, equipment failure, or departure from the required protocol makes a test invalid, we offer a no-charge repeat or a refund for the affected service. We correct our own documentation errors without an administrative correction fee. Nothing here limits rights concerning services not provided as promised.',
        ],
      },
      {
        title: '6. Cancellations or changes by Secure Fit',
        paragraphs: [
          'If we cancel, cannot provide the booked service, or propose a material time or location change you do not accept, you may choose a reasonable replacement appointment or a refund of all prepaid amounts for the unprovided service, including associated mandatory booking fees charged by us. Credit is not the only option. We communicate known disruptions promptly and do not guarantee availability at an alternative location.',
        ],
      },
      {
        title: '7. Group bookings and deposits',
        paragraphs: [
          'School, workplace, and on-site event deposits, minimum attendance, cancellation windows, travel costs, and rescheduling terms must appear in a separately accepted written quote. The individual $25 fee does not automatically govern an event. We do not impose an undisclosed minimum or retain a deposit under an unwritten rule. Any enforceable group cancellation charge must be reasonable for the agreed arrangement and consistent with applicable law.',
        ],
      },
      {
        title: '8. Refund process and disputes',
        paragraphs: [
          'Request a refund using your name, booking reference, and a short explanation. We aim to initiate an approved refund within five business days to the original payment method unless another lawful method is agreed. The bank or payment provider controls when the credit appears. We do not deduct undisclosed processing charges or require a waiver, silence, or removal of an honest review as a condition of receiving a refund already owed.',
          'Please report billing errors promptly. Nothing in this policy prevents you from exercising card-dispute, statutory, or other nonwaivable rights, or makes contacting us a prerequisite to those rights. Changes to this policy apply to later bookings, not retroactively to an existing confirmed purchase.',
        ],
      },
    ],
  },
  {
    slug: 'terms',
    number: '03',
    title: 'Terms of Service and Website Use',
    shortTitle: 'Terms of service',
    summary:
      'Website use, adult bookings, record authenticity, third-party scheduling, New York law, and protected rights.',
    contactLabel: 'Contact',
    mailing: true,
    sections: [
      {
        title: '1. Scope and agreement',
        paragraphs: [
          'These terms govern use of the website and services supplied by Secure Fit LLC where presented for acceptance. The Service Policy, Booking and Refund Policy, and E-Card and Records Policy form part of a service booking when provided before your agreement. The Privacy Policy explains information practices and is not a blanket authorization for optional processing.',
          'For a paid booking, the contract is formed through your affirmative acceptance and our booking confirmation. Merely visiting a page is not treated as agreement to an undisclosed charge. A signed organization agreement can set different commercial terms for that organization’s services, but cannot remove an individual’s nonwaivable rights or override a required privacy authorization.',
        ],
      },
      {
        title: '2. Eligibility and representative bookings',
        paragraphs: [
          'Self-service bookings and accounts are intended for adults aged 18 or older. An adult booking for another person must have authority to arrange the appointment and provide the submitted information. The actual participant must still complete the applicable consent and clearance steps. A minor may be served only through a separately approved arrangement with appropriate authority, safeguards, and consent. Do not create an account in a child’s name through ordinary adult registration.',
          'Provide accurate contact and booking information. An organization representative may commit the organization only within that representative’s authority. Do not submit another person’s private information merely to test a form or portal.',
        ],
      },
      {
        title: '3. Permitted use',
        paragraphs: [
          'You may use the website to learn about services, make authorized bookings, contact us, and access or share records you are entitled to receive. You may keep copies of your own fit-test records and share them for legitimate purposes. You may not falsify documents, impersonate another person, bypass access controls, test stolen credentials, automate record enumeration, introduce malicious code, interfere with operations, or access someone else’s records without authority.',
          'These terms do not prohibit honest reviews, lawful complaints, protected reporting, or communications with regulators. A good-faith security report is welcome, but these terms do not grant permission to exploit a vulnerability, access other people’s data, or conduct testing against third-party systems.',
        ],
      },
      {
        title: '4. Service limitations and information accuracy',
        paragraphs: [
          'Service descriptions are general information. Your confirmation and the Service Policy identify the purchased scope. The website is not a source of personalized medical advice, a substitute for a medical evaluation, or an emergency service. A fit-test record is not an OSHA-issued credential or a guarantee of workplace safety, medical suitability, or future acceptance by a third party.',
          'We aim to keep website information accurate. We will explain a material pricing or availability error before asking you to proceed on changed terms. If you do not accept, you may cancel the affected unperformed service and receive the applicable refund. We will not use an error clause to add hidden charges to an already completed purchase.',
        ],
      },
      {
        title: '5. Intellectual property and your information',
        paragraphs: [
          'Website text, brand materials, and original designs owned by Secure Fit are protected subject to applicable law. You may not present our logo as an endorsement or copy our materials for a misleading competing service. This restriction does not limit lawful quotation, accessibility tools, or other permitted uses.',
          'You retain rights in information you submit. You permit us to handle it only as reasonably needed to provide the requested service, administer the relationship, and carry out the uses described in the Privacy Policy or otherwise lawfully authorized. This is not an unrestricted license to sell your records, publish your identity, or use your information in advertising or general-purpose AI training.',
        ],
      },
      {
        title: '6. External services and technical availability',
        paragraphs: [
          'Scheduling or other functions may direct you to an identified third-party service, such as Calendly. That provider’s applicable terms and notice govern its own services. Our use of a vendor does not excuse our responsibilities for information or services within our control. Do not assume a linked provider, clinical evaluator, or another Secure Fit-branded location is operated by the same entity; check your booking confirmation.',
          'The website may be temporarily unavailable. Contact us for an alternative way to manage an appointment or obtain an authorized record. We do not guarantee uninterrupted portal access or app features that are not offered. Temporary downtime does not eliminate your rights regarding prepaid services or retained records.',
        ],
      },
      {
        title: '7. Responsibility and rights that remain protected',
        paragraphs: [
          'Each party remains responsible for its own acts and omissions under applicable law. We do not promise that a passed test prevents illness, injury, workplace exposure, or regulatory findings. We are not responsible for an independent third party’s decisions solely because it receives a genuine test record.',
          'Nothing in these terms excludes responsibility for fraud, willful misconduct, gross negligence, or any liability that cannot lawfully be excluded. No general personal-injury waiver, medical-malpractice waiver, mandatory arbitration clause, class-action waiver, shortened statutory filing deadline, or $75 liability cap is imposed by these website terms. Any separately negotiated business allocation of risk requires its own review and does not override an individual’s legal protections.',
        ],
      },
      {
        title: '8. Suspension, disputes, and changes',
        paragraphs: [
          `We may restrict access reasonably needed to protect users, records, or system integrity, or address misuse. We will preserve lawful access to records and applicable refund rights through another verified channel where possible. We will not withhold a legally required record merely to obtain a favorable review or unrelated concession. You may raise a concern at ${CONTACT_EMAIL}. Informal resolution is optional and does not stop legal time limits or prevent a small-claims case, regulatory complaint, or other lawful remedy.`,
          'New York law governs to the extent permitted, without removing mandatory protections of another applicable jurisdiction. Disputes may be brought in a court with lawful jurisdiction and proper venue. Changes will carry a new effective date. Material changes affecting a future transaction will be presented before acceptance. If a provision cannot lawfully be enforced, the remaining provisions continue to the extent legally permitted. Failure to enforce a provision on one occasion is not a permanent waiver.',
        ],
      },
    ],
  },
  {
    slug: 'privacy',
    number: '04',
    title: 'Privacy Policy',
    shortTitle: 'Privacy',
    summary:
      'What information we collect, how we use it, vendors, retention, your choices, minors, and security.',
    contactLabel: 'Privacy contact',
    mailing: true,
    sections: [
      {
        title: '1. Scope',
        paragraphs: [
          'This notice explains how we handle personal information in website inquiries, appointment administration, fit-testing services, records, and customer support. It covers only services operated by Secure Fit LLC. A linked location operated by another entity is responsible for its own practices. A separate notice or agreement will explain any additional practice for a specifically identified clinical or organization service.',
          'The policies below describe the practices adopted by us as of the effective date. They do not mean that every feature in a demonstration, app concept, or sample screen is available. We will give notice of a materially different data practice before introducing it and obtain consent where required.',
        ],
      },
      {
        title: '2. Information we collect',
        paragraphs: [
          'Contact and booking information: your name, email, telephone number where provided, appointment choices, organization affiliation, and communications. We collect the minimum identity information reasonably needed to match you with the correct appointment and record.',
          'Fit-test and service information: test date, method, location, technician, respirator make/model/style/size, screening and test outcome, applicable fit factor where quantitative testing is provided, record number, consent history, and information needed to explain an incomplete test or correction. We may record confirmation of required medical clearance and relevant use restrictions; we do not seek an unrestricted medical history for ordinary fit testing.',
          'Billing information: purchaser identity, amount, invoice details, payment status, and the limited transaction information returned by the selected payment provider. Do not submit full payment-card details through ordinary email or a general contact form.',
          'Website and security information: connection and device information such as IP address, browser type, requested page, time, and error or security logs generated by our systems or hosting providers. The Cookie Policy explains browser storage and optional technologies. We do not need precise device location to book a test; you can select an area manually.',
          'Do not submit Social Security numbers, full medical questionnaires, diagnoses, insurance files, biometric identifiers, or identification scans unless a specifically authorized process explains why they are needed and how to send them. A date of birth will not be displayed on a routine e-card under this policy.',
        ],
      },
      {
        title: '3. Sources and purposes',
        paragraphs: [
          'Information comes from you, a person authorized to arrange your appointment, an identified employer or school organizer, testing personnel, and service providers involved in the requested transaction. We use it to schedule and perform services; verify identity, consent, and prerequisites; create and provide accurate records; process payments and refunds; respond to requests; maintain security and quality; and meet applicable legal obligations.',
          'We do not sell personal information. We do not use identifiable fit-test information for targeted advertising, disclose it to advertising platforms for audience matching, or train general-purpose AI models on it. We do not use testing results to make automated employment, insurance, or clinical decisions. Optional marketing uses a separate enrollment choice.',
        ],
      },
      {
        title: '4. Service providers and authorized disclosures',
        paragraphs: [
          'We disclose information only as reasonably needed to vendors performing functions such as scheduling, hosting, email delivery, records storage, payment processing, support, and security. We require appropriate contractual restrictions and safeguards for vendors handling information on our behalf. Calendly handles bookings made through its scheduling interface; its notice explains its own processing. Payment providers may handle payment information under their own applicable notice.',
          'An employer or school does not automatically receive unrestricted access to all your records merely by paying for one test. For organization-arranged testing, we identify the recipient and reporting purpose and share the necessary testing information on a valid legal basis. Optional participant-directed sharing requires a separate instruction or authorization. Routine reporting does not include unrelated diagnoses, medical questionnaires, or other unnecessary health information.',
          'We may disclose information when legally required, to respond to valid legal process, or as legally permitted to address fraud, threats, or security incidents. We assess the request’s authority and scope rather than treating every request as valid. In a reorganization or transfer of the business, information may be transferred with appropriate restrictions, notice, and consent where required; this does not authorize a new incompatible marketing use.',
        ],
      },
      {
        title: '5. Email, record delivery, and outside recipients',
        paragraphs: [
          'You may choose delivery to a verified email address. Ordinary email and attachments may not provide end-to-end protection; shared accounts, misdirected messages, and forwarding can expose information. We explain available alternatives and do not require you to accept an insecure method as a condition of receiving a record. Do not send sensitive clinical material to our general inbox.',
          'Once you independently share a downloaded record or direct a copy to an employer, school, or other recipient, that recipient’s handling is subject to its own duties. We remain responsible for disclosures we make and do not use this statement to excuse sending a record to the wrong person.',
        ],
      },
      {
        title: '6. Retention and disposal',
        paragraphs: [
          'Routine fit-test records are scheduled for retention for three years after testing, unless a longer or different period is required by law, a properly applicable agreement, an unresolved issue, or a legal hold. Copies may be unavailable after lawful disposal. The three-year schedule is not a promise that every category of information is deleted at the same time.',
          'Medical-evaluation records, if ever lawfully maintained as part of a separate service, may have different and substantially longer retention requirements. Billing, consent, complaint, and security records are retained only for documented operational, contractual, or legal needs. We restrict retained information and dispose of it when no longer needed. Backup copies cycle out according to the approved backup schedule and are not used to defeat a valid deletion request.',
        ],
      },
      {
        title: '7. Access, correction, deletion, and choices',
        paragraphs: [
          'Contact our privacy address to request an authorized copy, correction, information about a disclosure, deletion where available, or withdrawal of optional consent. We use proportionate identity verification and do not routinely require a full identification document by email. An authorized representative must establish authority.',
          'We aim to acknowledge a request within five business days and provide a substantive response within 30 calendar days, unless a different legally required period applies. If an extension is permitted and needed, we explain it. Where we cannot grant a request, we explain the reason and any available review route. A legally required retention period or the need to preserve an accurate historical test may limit deletion or alteration; an error can instead be corrected with an audit trail.',
          'Declining optional marketing or optional sharing does not prevent purchase of a fit test. Refusing information necessary for safe testing or identity verification may prevent completion of that particular service. We will not retaliate against you for a good-faith privacy request.',
        ],
      },
      {
        title: '8. Security and incidents',
        paragraphs: [
          'We use safeguards appropriate to the sensitivity of the information and our operations, including controlled access, workforce procedures, and vendor oversight. No system or transmission method can be promised to be completely secure. We do not claim a particular certification, encryption design, or independent audit unless separately identified and substantiated.',
          'Report a suspected disclosure or security problem through our privacy contact without including another person’s record. We investigate suspected incidents and provide notices when required by applicable law. Agreeing to this Privacy Policy is not agreement to receive every legally required breach notice only by email.',
        ],
      },
      {
        title: '9. Minors and school services',
        paragraphs: [
          'Our self-service website and bookings are intended for adults. Do not send a minor’s information through adult registration. Services for minors require a separately approved process with appropriate authority, notices, and consent. School affiliations may involve staff or adult trainees and do not, by themselves, establish that a child may self-register.',
          'If we learn that information about a minor was collected outside the approved process, we assess the facts and restrict, delete, or otherwise handle it as applicable law requires. A parent, guardian, eligible student, or school privacy official can contact us about a suspected issue. Applicable child-data and education-record rules are assessed before a minor or protected-student-data program begins.',
        ],
      },
      {
        title: '10. Geographic and legal scope',
        paragraphs: [
          'The service is designed for the United States, principally New York. Information may be processed by Secure Fit LLC and by identified vendors, including Calendly for scheduling. We have not published a complete processing-location list. Do not assume information is stored only in New York or only in the United States.',
          'Applicable rights and responsibilities depend on the service and legal relationship. Handling health-related information does not by itself determine HIPAA coverage. Where a separate HIPAA-regulated or school-data arrangement applies, we follow that arrangement and provide any additional required notice. This document does not replace a HIPAA Notice of Privacy Practices, business associate agreement, or required school-data agreement.',
        ],
      },
      {
        title: '11. Updates and contact',
        paragraphs: [
          `We identify revisions by effective date and give additional notice of material changes as appropriate. We do not retroactively authorize a materially incompatible use of previously collected information simply by changing this page. Contact ${CONTACT_EMAIL} or write using the mailing details above with questions or complaints.`,
        ],
      },
    ],
  },
  {
    slug: 'cookies',
    number: '05',
    title: 'Cookie and Online Technologies Policy',
    shortTitle: 'Cookies',
    summary:
      'Necessary site functions, no optional ads or analytics cookies at launch, and Calendly’s own technologies.',
    contactLabel: 'Contact',
    sections: [
      {
        title: '1. What these technologies do',
        paragraphs: [
          'Cookies are small pieces of browser-stored information. Similar technologies include local storage, pixels, and software that records connection events. Our hosting systems may also keep server logs, which are different from browser cookies. This policy should be read with the Privacy Policy.',
        ],
      },
      {
        title: '2. Necessary functions',
        paragraphs: [
          'We use only the browser technologies needed for functions such as security, maintaining a requested session, and remembering a privacy choice. Disabling a necessary technology may affect that function. Browser settings can usually remove or block stored information, but do not delete records already lawfully held in our service systems.',
        ],
      },
      {
        title: '3. Optional technologies',
        paragraphs: [
          'Our adopted default is that optional analytics, advertising pixels, and session-replay tools are disabled. We do not place advertising or session-replay technology on booking intake, consent, e-card, record lookup, or other pages containing sensitive testing information. We do not pass that information to advertising audiences or external AI training systems.',
          'Before introducing an optional technology, we update this notice and the inventory and provide an appropriate choice or consent mechanism. Declining optional technology does not prevent booking through a necessary or assisted channel. Where a privacy-preference signal has legal effect, we honor it for the applicable processing; it does not prevent strictly necessary security functions.',
        ],
      },
      {
        title: '4. External scheduling, maps, and links',
        paragraphs: [
          'Choosing an external booking link may open Calendly or another specifically identified service, which may use its own cookies and logs. That service’s notice explains its practices. Embedded third-party content can transmit connection information when loaded, not only when a form is submitted. Nonessential embeds should not load before the applicable choice has been respected. A plain external link can be provided instead.',
        ],
      },
      {
        title: '5. Verified technology inventory',
        paragraphs: [
          'First-party optional cookies: none at publication. This website does not currently use advertising pixels, session-replay tools, or optional analytics cookies.',
          'Hosting and security logs: our hosting systems may keep connection and error logs, which can include IP address, browser type, requested page, time, and similar technical data needed to operate and secure the site.',
          'External scheduling: Calendly may set its own cookies and keep its own logs when you use a scheduling link. Calendly’s notice explains that processing. We do not invent additional cookies or pixels that are not in use.',
        ],
      },
      {
        title: '6. Questions and changes',
        paragraphs: [
          `Contact ${CONTACT_EMAIL} about a technology or privacy choice. We update the effective date when this policy changes. A notice or banner alone does not implement a choice; the selected setting must actually control the corresponding technology.`,
        ],
      },
    ],
  },
  {
    slug: 'records',
    number: '06',
    title: 'E-Card, Records, Retention and Verification Policy',
    shortTitle: 'E-cards and records',
    summary:
      'What an e-card documents, copies, corrections, three-year storage, and organization access.',
    contactLabel: 'Records contact',
    sections: [
      {
        title: '1. What the record represents',
        paragraphs: [
          'A fit-test record documents the person tested, test date and method, respirator make/model/style/size, and actual result. A quantitative record also includes the relevant measured result when that method is provided. An e-card is an electronic presentation of the record, not a government license, a medical clearance, or a guarantee of continuing protection.',
          'Only the recorded configuration is covered. A “next routine fit test due” date helps scheduling; earlier testing may still be needed. A sample card is not a valid test record and must not be submitted as one.',
        ],
      },
      {
        title: '2. Issue and delivery',
        paragraphs: [
          'We issue a record after the test and required review are completed. Our target is two business days. We will not issue a pass for a failed, incomplete, or invalid test, and a request to expedite does not remove review or identity checks. We use the contact and delivery choices confirmed with the participant or authorized organization.',
          'Email delivery is available to a verified address. Ask about an available alternative before sending confidential information. We do not imply that an ordinary attachment is an encrypted wallet or that a QR code automatically secures the underlying record.',
        ],
      },
      {
        title: '3. Copies and identity checks',
        paragraphs: [
          'To request a copy, contact us with your name, approximate test date, and booking or record reference if known. We may use an existing verified contact method or another proportionate verification step before releasing information. Knowing a name and test date is not, by itself, enough to obtain someone else’s record.',
          'We do not ask for a Social Security number to retrieve a routine e-card. Do not email a full medical questionnaire or identification scan in response to an unsolicited message. Standard electronic resends and correction of our own clerical errors are provided without an administrative fee. Any separately requested custom report must be quoted in advance, subject to applicable access rights.',
        ],
      },
      {
        title: '4. Accuracy, correction, and superseded records',
        paragraphs: [
          'Review your record and report an incorrect name, date, respirator detail, or other issue. We investigate against the underlying testing documentation. A clerical correction does not permit us to invent a test, substitute an untested respirator, backdate a service, or change a genuine outcome.',
          'Where a corrected record is issued, we preserve an appropriate change history and identify the superseded copy. If a quality issue undermines a prior record, we notify the participant and authorized recipient as appropriate, explain the issue, and arrange the relevant correction or repeat service. We will not conceal the issue by silently replacing a failed or invalid result with a pass.',
        ],
      },
      {
        title: '5. Organization access and verification',
        paragraphs: [
          'We release organization reports only to verified, authorized recipients for the agreed purpose or on another valid legal basis. Payment or possession of a company email address does not establish entitlement to all participant information. Routine reports exclude unnecessary clinical details and unrelated records.',
          'Anyone receiving a record must use it lawfully and consider the applicable respirator, date, result, and changed circumstances. Record authenticity does not establish that a workplace’s full respiratory-protection program is compliant. No party may alter our logo or record to imply government approval or broader testing.',
        ],
      },
      {
        title: '6. Record availability and retention',
        paragraphs: [
          'Routine fit-test records are scheduled for retention for three years after the test, subject to applicable legal, contractual, and preservation obligations. This is a service storage schedule, not a promise of three years of respirator suitability. Employers remain responsible for their own required retention and employee access obligations. OSHA’s fit-test record rule generally requires retention until the next fit test; other obligations may require more.',
          'The three-year schedule does not govern medical-evaluation records, employment medical records, or every billing or consent record. Their applicable retention requirements must be evaluated separately. Where information must be retained after an account is closed, access is restricted to the purposes supporting retention. After lawful disposal, we may be unable to produce another copy, so keep your own copy when appropriate.',
        ],
      },
      {
        title: '7. Future QR codes or portals',
        paragraphs: [
          'A self-service portal or QR verification feature applies only when expressly launched and described. Until then, use the verified records contact or the existing e-card resend tool. Any future feature must provide appropriate access control; it may not expose a record publicly just because a QR code or predictable identifier is known.',
        ],
      },
    ],
  },
  {
    slug: 'onsite',
    number: '07',
    title: 'Schools, Workplaces and On-Site Testing Policy',
    shortTitle: 'Schools and workplaces',
    summary:
      'Written quotes for group events, organizer duties, rosters, reports, schools, and HIPAA arrangements.',
    contactLabel: 'Group-booking contact',
    sections: [
      {
        title: '1. Written event scope',
        paragraphs: [
          'An on-site, school, or workplace event requires an accepted written quote or service agreement identifying both legal entities, the site, date, testing hours, participant estimate, methods, respirator supply, responsible contacts, price, any minimum charge, deposit, cancellation terms, and reporting arrangements. A request for a quote does not reserve a date or authorize charges.',
          'A proposed group price, minimum, travel charge, or cancellation fee is not enforceable under this policy merely because staff mention it after acceptance. Material changes require agreement. Actual location and access arrangements must be confirmed; a service-area map is not a site reservation.',
        ],
      },
      {
        title: '2. Organizer responsibilities',
        paragraphs: [
          'The organizer coordinates the participant schedule, identifies the responsible respiratory-protection program administrator, and confirms the applicable medical-evaluation arrangements before testing. It arranges appropriate respirator options and related equipment, an accessible and suitable testing area, and a way for participants to receive instructions and ask private questions.',
          'The organizer remains responsible for its own workplace duties, including hazard assessment, program management, respirator selection, training, and any legally required payment for worker protections. Our provision of fit testing does not transfer those duties. Sending a roster does not medically clear its members or guarantee that every participant can safely complete a test.',
        ],
      },
      {
        title: '3. Site and safety requirements',
        paragraphs: [
          'The site must support the protocol, equipment, privacy, sanitation, and reasonable accessibility requirements specified in the quote. The organizer must disclose known hazards and building restrictions affecting our work and provide an on-site contact and emergency procedures. Do not locate testing in an area with a known uncontrolled exposure hazard.',
          'We may pause or postpone work where conditions do not permit safe, valid testing. We explain the issue and reasonable next steps. We will not compress protocol steps or promise a throughput that undermines test quality. The parties address any resulting charge under the accepted event agreement, not an undisclosed penalty.',
        ],
      },
      {
        title: '4. Roster and participant information',
        paragraphs: [
          'Provide only the information required for booking, identity matching, clearance verification, and the agreed report. Use the approved transfer method, not an unrestricted shared link or a mass email containing clinical histories. The organizer must have authority to disclose the information and provide required notices or obtain required consents.',
          'Each participant receives the relevant service information and an opportunity to consent or ask questions. An organizer cannot consent to unrelated marketing, photography, or broad disclosure on behalf of every participant. Refusal of optional marketing or publicity does not affect access to testing.',
        ],
      },
      {
        title: '5. Reports and use of results',
        paragraphs: [
          'The written agreement identifies authorized recipients and the data they need, such as participant identity, test date, respirator configuration, outcome, and next routine testing date. We do not include diagnoses or completed medical questionnaires in ordinary roster reports. Individual copies and organization reports are released through an appropriate verified process.',
          'The organization must limit access to personnel with a legitimate purpose, protect the records it receives, and avoid onward disclosure inconsistent with applicable law. Its dashboard or report is not an occupational-health decision engine. It must evaluate incomplete, unsuccessful, and changed-fit situations through its responsible program and appropriate professionals.',
        ],
      },
      {
        title: '6. Schools, students, and minors',
        paragraphs: [
          'A school event may serve employees or adult trainees. It does not automatically establish a program for minors. Testing of a minor requires a separately approved consent and service process and confirmation that the requested respirator and procedure are appropriate.',
          'Where protected education records or data subject to New York Education Law § 2-d are involved, the parties must settle the necessary data-use, privacy, security, subcontracting, return/deletion, and incident terms before transfer. We do not claim “school official” status merely because we serve a school. Any reliance on a FERPA exception must satisfy that exception’s actual conditions.',
        ],
      },
      {
        title: '7. Clinical and HIPAA arrangements',
        paragraphs: [
          'An employer, school, or health care client must identify any proposed disclosure of HIPAA-regulated information before it occurs. The parties determine the actual legal roles and execute any required agreements. Labeling every fit-test record “HIPAA” or signing a generic confidentiality clause does not, on its own, establish compliance. A separately contracted clinician remains responsible for services within that clinician’s scope.',
        ],
      },
      {
        title: '8. Delays, cancellations, and completion',
        paragraphs: [
          'The event agreement specifies attendance adjustments and reasonable cancellation terms. If we cannot provide the agreed service, the organizer is offered rescheduling or a refund of prepaid amounts for unprovided services, subject to a lawful, specifically negotiated allocation of documented costs. A safety-critical interruption is documented; no record is issued for a test that was not completed.',
          'A completion report identifies services actually performed and any unresolved issues. Both parties cooperate on substantiated corrections, privacy requests, and safety incidents without treating cooperation as a waiver of their lawful rights.',
        ],
      },
    ],
  },
  {
    slug: 'communications',
    number: '08',
    title: 'Email, Text Message and Notification Policy',
    shortTitle: 'Email and texts',
    summary:
      'Service messages, optional marketing, text-message rules, and the fact that email is not 911.',
    contactLabel: 'Contact',
    sections: [
      {
        title: '1. Service communications',
        paragraphs: [
          'We use the contact details you provide for requested bookings, preparation instructions, receipts, service changes, records, and support. Confirm that the email address and telephone number belong to you or an authorized recipient. We minimize sensitive details in message subjects, text messages, and lock-screen notifications.',
          'A service email may still be needed after you unsubscribe from marketing. We do not add promotional content in a way that disguises a marketing message as a required service notice. Tell us when an address or number changes or a recipient should no longer receive information.',
        ],
      },
      {
        title: '2. Optional marketing',
        paragraphs: [
          'Marketing enrollment is separate from booking, fit-testing consent, and record sharing. We do not make a purchase or a passing result conditional on receiving promotions. You can unsubscribe using the message’s mechanism or by contacting us. We honor email opt-outs promptly and no later than 10 business days, and do not charge a fee for opting out. Marketing emails identify the sender and include the business’s valid postal address.',
          'A withdrawal of marketing permission does not require deletion of records that must be retained for another lawful purpose. We keep the minimum suppression information necessary to respect the withdrawal.',
        ],
      },
      {
        title: '3. Text messages and automated communications',
        paragraphs: [
          'Text messaging applies only when actually offered and after the applicable separate consent has been obtained. Providing a phone number for a booking is not, by itself, enrollment in promotional robotexts or automated marketing calls. The enrollment identifies Secure Fit LLC, the number, the type of messages, and whether automated technology is used.',
          'Message frequency depends on the selected program. Message and data rates may apply. Reply STOP to stop texts, HELP for assistance, or communicate a reasonable revocation request to our contact address. We act promptly on revocation, do not require special words when the request is clear, and may send one nonpromotional confirmation. Consent is not a condition of purchase. An assisted non-text booking route remains available.',
          'We do not send clinical histories or full test records in ordinary promotional or reminder texts. Carriers and messaging providers can affect delivery. Do not rely on a reminder as the sole way to track your appointment or required retesting.',
        ],
      },
      {
        title: '4. Records and legal notices',
        paragraphs: [
          'Record delivery uses the participant’s separately confirmed preference. Permission to receive ordinary appointment messages does not automatically authorize every legally required notice by email, disclosure to an employer, or publication of a record. We obtain additional consent where required and provide legally required alternatives.',
        ],
      },
      {
        title: '5. Contact and emergencies',
        paragraphs: [
          `Questions or delivery concerns may be sent to ${CONTACT_EMAIL}. Our inbox and messaging services are not monitored as emergency channels. Call 911 for an emergency.`,
        ],
      },
    ],
  },
  {
    slug: 'accessibility',
    number: '09',
    title: 'Accessibility and Nondiscrimination Statement',
    shortTitle: 'Accessibility',
    summary:
      'How to request assistance, WCAG improvement target, and testing accommodations without invalidating a test.',
    contactLabel: 'Accessibility contact',
    sections: [
      {
        title: '1. Our commitment',
        paragraphs: [
          'Secure Fit LLC seeks to provide respectful access to its information, booking process, records, and services. We do not unlawfully discriminate. We work to address accessibility barriers and provide reasonable modifications and effective communication as required for the applicable service.',
          'Our website improvement target is the Web Content Accessibility Guidelines at Level AA, using WCAG 2.2 as a design reference where appropriate. This is an improvement target, not a claim that every page, document, or third-party feature has been independently certified or already conforms.',
        ],
      },
      {
        title: '2. Request assistance',
        paragraphs: [
          `Email ${CONTACT_EMAIL} with the page or service involved, the barrier you encountered, and your preferred way to receive a response. You do not need to include a diagnosis or full medical records in an initial request. We aim to acknowledge requests within two business days and work with you on a suitable alternative, such as assisted booking or an accessible record format. Time-sensitive appointment needs should be clearly identified.`,
          'Where an external scheduler creates a barrier, contact us for another available booking method. We do not require use of an inaccessible digital tool as the only route to a service we can reasonably arrange another way.',
        ],
      },
      {
        title: '3. Testing accommodations and limits',
        paragraphs: [
          'Contact us in advance about mobility, hearing, vision, language, communication, religious, or other needs affecting an appointment. We consider appropriate modifications individually and coordinate with the employer or responsible program when necessary.',
          'We cannot waive a required safety prerequisite, alter a test protocol so the outcome is invalid, or record a pass when the test has not been validly completed. Where a tight-fitting respirator or testing method cannot be used, the employer and appropriate professional may need to evaluate an alternative protection arrangement. Requesting an accommodation does not authorize unrelated disclosure of your health or personal information.',
        ],
      },
      {
        title: '4. Feedback',
        paragraphs: [
          'We welcome reports of barriers and use them to prioritize improvements. This statement does not restrict your right to request a legally required accommodation or use an available complaint or enforcement process.',
        ],
      },
    ],
  },
  {
    slug: 'reviews',
    number: '10',
    title: 'Reviews, Photography and Publicity Policy',
    shortTitle: 'Reviews and publicity',
    summary:
      'Honest reviews, no fake testimonials, and no marketing photos without a separate release.',
    contactLabel: 'Contact',
    sections: [
      {
        title: '1. Honest feedback',
        paragraphs: [
          'Customers may share honest opinions about our services. We do not require a positive rating, prohibit lawful negative feedback, or condition an owed refund or record on deleting a review. We do not write or buy fabricated testimonials, invent customer experiences, or present illustrative design quotations as genuine reviews.',
          'Where we publish a testimonial, it must reflect a real authorized experience. We do not materially change its meaning. Material relationships or incentives are disclosed when required; an incentive must not depend on positive sentiment. Displayed ratings and counts must be supported by their stated source and not confuse samples with actual results.',
        ],
      },
      {
        title: '2. Privacy in reviews',
        paragraphs: [
          'Do not include another person’s private information, medical history, record, or photograph without authority. Public replies from us will not confirm confidential testing details simply because someone posts a review. We may moderate spam, unlawful content, threats, or privacy violations without removing lawful criticism merely because it is unfavorable.',
        ],
      },
      {
        title: '3. Photography and publicity',
        paragraphs: [
          'Permission to book or participate in testing is not permission to use your name, photograph, voice, employer identity, or record in marketing. Any promotional use needs a separate release specifying the material, purpose, and permitted channels. A school or employer does not automatically give us publicity rights over every participant.',
          'Declining publicity has no effect on service eligibility, price, or test result. A business logo or customer relationship is not displayed as an endorsement without appropriate permission. A photograph or testimonial involving a minor requires a separately reviewed authorization process.',
        ],
      },
      {
        title: '4. Concerns and withdrawal requests',
        paragraphs: [
          'Contact us about a privacy issue, inaccurate attributed quotation, or withdrawal of optional future publicity permission. We assess the applicable release and law, stop new use where appropriate, and make reasonable efforts to remove controlled online material when required or agreed. We cannot promise retrieval of every independently reshared copy, but that does not excuse duties applying to material we control.',
        ],
      },
    ],
  },
];

export const getPolicyBySlug = (slug) => LEGAL_POLICIES.find((policy) => policy.slug === slug);

export const getNeighborPolicies = (slug) => {
  const index = LEGAL_POLICIES.findIndex((policy) => policy.slug === slug);
  if (index < 0) {
    return { previous: null, next: null };
  }
  return {
    previous: index > 0 ? LEGAL_POLICIES[index - 1] : null,
    next: index < LEGAL_POLICIES.length - 1 ? LEGAL_POLICIES[index + 1] : null,
  };
};

export const getPolicyPageProps = (slug) => {
  const policy = getPolicyBySlug(slug);
  if (!policy) {
    return { notFound: true };
  }
  const { previous, next } = getNeighborPolicies(slug);
  return {
    props: {
      policy,
      previous: previous ? { slug: previous.slug, shortTitle: previous.shortTitle } : null,
      next: next ? { slug: next.slug, shortTitle: next.shortTitle } : null,
    },
  };
};

export { CONTACT_EMAIL, LEGAL_EFFECTIVE_DATE, LEGAL_MAILING_LINE };
