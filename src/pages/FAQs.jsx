import { useState } from 'react'
import CTAButton from '../components/CTAButton'

const faqSections = [
  {
    title: 'About Samchel AI',
    qa: [
      {
        q: 'What is Samchel AI?',
        a: 'Samchel AI is a Toronto-based Artificial Intelligence and Automation Agency that helps small and medium-sized businesses streamline operations, improve customer experience, and grow using smart, affordable AI solutions.',
      },
      {
        q: 'Who is Samchel AI designed to serve?',
        a: 'We primarily work with small and medium-sized businesses (SMBs) in industries such as health & wellness, accounting, law, consulting, real estate, and trades/field services.',
      },
      {
        q: 'What makes Samchel AI different from other automation or marketing agencies?',
        a: 'We focus on accessible AI — combining no-code/low-code automation with custom-built AI solutions. Our goal is to deliver measurable business value, not just technology. Every solution is tailored to each client’s workflow and designed to scale with their growth.',
      },
    ],
  },
  {
    title: 'Products & Services',
    qa: [
      {
        q: 'What types of AI solutions do you offer?',
        a: 'We provide three tiers of solutions: (1) AI & Workflow Automation, (2) AI Assistants & Chatbots, and (3) Custom AI Solutions.',
      },
      {
        q: 'Do you only build custom solutions?',
        a: 'No. We start with no-code or low-code automation tools (like Zapier, Make, Airtable, and ChatGPT integrations) to deliver value quickly. As your business grows, we can transition you to custom AI systems built in-house.',
      },
      {
        q: 'Can you integrate with our existing tools or CRM?',
        a: 'Absolutely. We integrate with Google Workspace, QuickBooks, HubSpot, Zoho, Notion, Trello, ClickUp and more — automating data flow and saving time.',
      },
    ],
  },
  {
    title: 'AI & Automation Use Cases',
    qa: [
      {
        q: 'How can AI help my small business?',
        a: 'AI can automate routine tasks like scheduling, billing, lead qualification and reporting, and enhance customer communication through chatbots and AI-powered assistants.',
      },
      {
        q: 'Do you build chatbots for websites or WhatsApp?',
        a: 'Yes. We create AI chatbots and virtual assistants for websites, WhatsApp, Facebook Messenger and SMS, customized to your tone and workflows.',
      },
      {
        q: 'Is AI only for tech companies?',
        a: 'Not at all. Our mission is to make AI practical and affordable for every business — from yoga studios and real estate firms to accounting offices and home service providers.',
      },
    ],
  },
  {
    title: 'Pricing & Engagement',
    qa: [
      {
        q: 'How do your pricing models work?',
        a: 'We offer project-based builds, subscription-based support, and productized packages for common SMB needs.',
      },
      {
        q: 'How much does a typical project cost?',
        a: 'Starter automation packages begin at $499 CAD, while advanced or custom systems vary by complexity. Every project includes a free initial consultation.',
      },
      {
        q: 'Do you offer ongoing support or maintenance?',
        a: 'Yes. Every client gets access to AI Support Plans with updates, troubleshooting and optimization.',
      },
    ],
  },
  {
    title: 'Security & Compliance',
    qa: [
      {
        q: 'How do you ensure data security and privacy?',
        a: 'We follow Canadian data privacy standards (PIPEDA) and apply strong encryption, access control and anonymization practices.',
      },
      {
        q: 'Will our business data be shared or used to train public AI models?',
        a: 'Never. Your data stays private. We use secure, dedicated environments for automation and AI workflows to ensure confidentiality.',
      },
    ],
  },
  {
    title: 'Getting Started',
    qa: [
      {
        q: 'How do I start working with Samchel AI?',
        a: 'Book a free 30-minute consultation through our website. We’ll discuss your goals, identify opportunities, and propose a tailored plan.',
      },
      {
        q: 'Do you offer demos or pilot programs?',
        a: 'Yes. We offer proof-of-concept and pilot automation projects so you can see measurable value before scaling.',
      },
      {
        q: 'How long does it take to launch a project?',
        a: 'Small automation projects can go live within 1–2 weeks, while larger AI systems typically take 4–8 weeks.',
      },
    ],
  },
  {
    title: 'General Questions',
    qa: [
      {
        q: 'Where is Samchel AI located?',
        a: 'We are based in the Greater Toronto Area (GTA) and work with clients across Ontario and Canada. Remote collaborations are also available.',
      },
      {
        q: 'Do you collaborate with other agencies or developers?',
        a: 'Yes. We partner with marketing agencies, consultants and software developers to integrate AI into their offerings.',
      },
      {
        q: 'How can I contact Samchel AI?',
        a: 'Reach us via the Contact page, email, or by booking a discovery call.',
      },
    ],
  },
]

function QAItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`qa ${open ? 'open' : ''}`}>
      <button className="qa-question" onClick={() => setOpen((v) => !v)}>
        {q}
        <span className="qa-icon">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="qa-answer">{a}</div>}
    </div>
  )
}

export default function FAQs() {
  return (
    <main>
      <section className="banner banner-faqs">
        <div className="container">
          <h1>Samchel AI – Frequently Asked Questions (FAQ)</h1>
          <CTAButton text="Still have questions? Contact us" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          {faqSections.map((sec) => (
            <div key={sec.title} className="faq-section">
              <h2>{sec.title}</h2>
              <div className="qa-list">
                {sec.qa.map((item) => (
                  <QAItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}


