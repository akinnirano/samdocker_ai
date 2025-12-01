export default function Testimonials() {
  const testimonials = [
    {
      name: 'Amelia, Clinic Owner',
      text:
        'Samchel AI automated our intake and scheduling — saving my staff hours every week and improving patient response times.',
    },
    {
      name: 'Jordan, Real Estate Broker',
      text:
        'Their chatbot handles FAQs and lead qualification on our site and WhatsApp. We close more deals with less effort.',
    },
    {
      name: 'Priya, Accounting Firm Partner',
      text:
        'Document automation and KPI dashboards gave us visibility we lacked. The team is responsive and local — huge plus.',
    },
  ]
  return (
    <main>
      <section className="banner banner-testimonials">
        <div className="container">
          <h1>Client Testimonials</h1>
          <p>Real results for growing Canadian small businesses.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          {testimonials.map((t) => (
            <div key={t.name} className="card">
              <p className="quote">“{t.text}”</p>
              <p className="muted">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}


