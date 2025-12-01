import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react'

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()
  const [status, setStatus] = useState(null)

  const onSubmit = async (data) => {
    try {
      setStatus(null)
      await axios.post('/api/contact', data, { timeout: 15000 })
      setStatus({ type: 'success', message: 'Thanks! We will get back to you shortly.' })
      reset()
    } catch (err) {
      setStatus({
        type: 'error',
        message:
          'Something went wrong sending your message. Please try again or email us directly.',
      })
    }
  }

  return (
    <main>
      <section className="banner banner-contact">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Book a free 30-minute discovery call or send us a quick message.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <form className="form card" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="grid-2">
              <div className="form-field">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jane Doe"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <span className="error">{errors.name.message}</span>}
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /.+@.+\..+/, message: 'Enter a valid email' },
                  })}
                />
                {errors.email && <span className="error">{errors.email.message}</span>}
              </div>
            </div>
            <div className="grid-2">
              <div className="form-field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" placeholder="+1 416 000 0000" {...register('phone')} />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" placeholder="What can we help with?" {...register('subject')} />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us about your goals..."
                {...register('message', { required: 'Message is required' })}
              />
              {errors.message && <span className="error">{errors.message.message}</span>}
            </div>
            <button className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {status && (
              <div className={`alert ${status.type === 'success' ? 'success' : 'error'}`}>
                {status.message}
              </div>
            )}
          </form>

          <div className="card">
            <h3>Why Samchel AI?</h3>
            <ul className="list">
              <li>Localized service and compliance expertise (PIPEDA-ready)</li>
              <li>Affordable automation packages for SMB budgets</li>
              <li>Transparent, ROI-based results from month one</li>
            </ul>
            <h3>Location</h3>
            <p>Greater Toronto Area (GTA) — serving clients across Ontario and Canada.</p>
          </div>
        </div>
      </section>
    </main>
  )
}


