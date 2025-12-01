import BannerCarousel from '../components/BannerCarousel'
import CTAButton from '../components/CTAButton'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      <BannerCarousel />

      <section className="section">
        <div className="container split">
          <div>
            <h2>Smart AI for Real Business Results</h2>
            <p>
              Samchel AI is a Toronto-based Artificial Intelligence and Automation
              Agency helping small and medium-sized businesses streamline operations,
              improve customer experience, and grow using accessible AI solutions.
            </p>
            <div className="actions">
              <CTAButton text="Talk to an Expert" />
              <Link to="/services" className="btn btn-ghost">
                Explore Services
              </Link>
            </div>
          </div>
          <div className="card-list">
            <div className="card">
              <h3>AI Assistants & Chatbots</h3>
              <p>Industry-specific assistants for customer service, scheduling and FAQs.</p>
            </div>
            <div className="card">
              <h3>Workflow Automation</h3>
              <p>No-code tools, CRM automation, lead routing and appointment systems.</p>
            </div>
            <div className="card">
              <h3>Predictive Analytics</h3>
              <p>Dashboards and models to forecast sales, track KPIs and trends.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="card">
            <p>
              Samchel AI empowers GTA small and medium-sized businesses with accessible and affordable
              AI that improves efficiency, reduces costs, and elevates customer experiences.
            </p>
            <p className="muted" style={{ marginTop: 8 }}>
              We deliver practical automation, smart websites, chatbots, analytics, and intelligent workflows—combining
              no‑code speed with custom AI to achieve enterprise‑grade results.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}


