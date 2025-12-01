import CTAButton from '../components/CTAButton'

const tiers = [
  {
    name: 'Starter',
    summary:
      'Rapid deployment using no-code/low-code tools for immediate ROI.',
    items: [
      'AI Audit & Consultancy',
      'CRM and lead routing automations',
      'AI Assistants & Chatbots (website, WhatsApp, SMS)',
      'AI-Enhanced Marketing (content, email, SEO)',
    ],
  },
  {
    name: 'Growth',
    summary:
      'Deeper integrations and analytics for scaling teams and operations.',
    items: [
      'Workflow & process automation across tools',
      'Document Intelligence (invoices, contracts, forms)',
      'Business dashboards and KPI tracking',
      'Team training and workshops',
    ],
  },
  {
    name: 'Pro',
    summary:
      'Custom AI development for competitive differentiation and control.',
    items: [
      'Custom models and private deployments',
      'Predictive analytics and forecasting',
      'Advanced integrations and governance',
      'Enterprise-grade support and compliance',
    ],
  },
]

export default function Services() {
  return (
    <main>
      <section className="banner banner-services">
        <div className="container">
          <h1>Products & Services</h1>
          <p>AI-driven automation, analytics and digital transformation for SMBs.</p>
          <CTAButton text="Get a Custom Proposal" />
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          {tiers.map((tier) => (
            <div key={tier.name} className="card tier">
              <h3>{tier.name}</h3>
              <p className="muted">{tier.summary}</p>
              <ul className="list">
                {tier.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <CTAButton text="Enquire Now" />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}


