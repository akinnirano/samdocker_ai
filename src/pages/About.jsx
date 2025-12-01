import CTAButton from '../components/CTAButton'

export default function About() {
  return (
    <main>
      <section className="banner banner-about">
        <div className="container">
          <h1>About Samchel AI</h1>
          <p>Your local AI partner in the Greater Toronto Area.</p>
          <CTAButton text="Book a Free Consultation" />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h2>Vision Statement</h2>
            <p>
              To become the leading regional provider of AI-driven automation and business
              intelligence solutions for small businesses in Ontario, bridging the gap between complex
              AI technologies and real-world business needs.
            </p>
          </div>
          <div>
            <h2>Mission Statement</h2>
            <p>
              To empower small and medium-sized businesses in the Greater Toronto Area with
              accessible, affordable, and practical AI solutions that improve efficiency, reduce costs,
              and enhance customer experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            <h2>Value Proposition</h2>
            <p>
              Samchel AI specializes in AI-powered automation, smart websites, chatbots, data
              analytics, and intelligent workflows tailored for small and medium-sized businesses
              (SMBs). By combining no-code automation tools with custom AI development, the
              company enables clients to achieve enterprise-grade efficiency at a fraction of
              traditional technology costs.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Operations Workflow</h2>
          <ol className="steps">
            <li>
              <strong>Client Discovery & Consultation</strong> — Free initial consultation
              (in-person or virtual). Identify automation opportunities and ROI potential.
            </li>
            <li>
              <strong>Proposal & Agreement</strong> — Custom proposal with deliverables,
              pricing and timeline. Signed agreement and deposit.
            </li>
            <li>
              <strong>Solution Design</strong> — Process mapping and data collection.
              Build using no/low-code first; integrate custom models if required.
            </li>
            <li>
              <strong>Deployment & Testing</strong> — Install and integrate automations.
              Train staff and ensure workflow stability.
            </li>
            <li>
              <strong>Support & Maintenance</strong> — Ongoing monitoring, optimization and updates.
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="card">
            <h3>Predictive Analytics</h3>
            <p>
              Build custom dashboards and predictive models to forecast sales, track KPIs,
              and identify performance trends.
            </p>
          </div>
          <div className="card">
            <h3>Document Intelligence</h3>
            <p>
              Deploy AI tools for document scanning, summarization and data extraction from
              contracts, invoices, reports and legal documents.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}


