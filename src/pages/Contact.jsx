import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useEffect, useMemo, useState } from 'react'

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()
  const [status, setStatus] = useState(null)
  const [staff, setStaff] = useState([])
  const [selectedStaff, setSelectedStaff] = useState('')
  const [availability, setAvailability] = useState([])
  const [availabilityLoading, setAvailabilityLoading] = useState(false)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedSlot, setSelectedSlot] = useState('')
  const [bookingStatus, setBookingStatus] = useState(null)
  const [bookingSubmitting, setBookingSubmitting] = useState(false)

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

  useEffect(() => {
    const loadStaff = async () => {
      try {
        const res = await axios.get('/api/staff', { timeout: 15000 })
        const items = res.data?.staff || []
        setStaff(items)
        if (items.length > 0) {
          setSelectedStaff(items[0].id)
        }
      } catch {
        setStaff([])
      }
    }
    loadStaff()
  }, [])

  useEffect(() => {
    const loadAvailability = async () => {
      if (!selectedStaff) return
      setAvailabilityLoading(true)
      setSelectedDate('')
      setSelectedSlot('')
      setBookingStatus(null)
      try {
        const res = await axios.get('/api/availability', {
          params: { staff_id: selectedStaff, days: 14 },
          timeout: 15000,
        })
        setAvailability(res.data?.slots || [])
      } catch {
        setAvailability([])
      } finally {
        setAvailabilityLoading(false)
      }
    }
    loadAvailability()
  }, [selectedStaff])

  const slotsByDate = useMemo(() => {
    const map = {}
    for (const iso of availability) {
      const d = new Date(iso)
      // yyyy-mm-dd
      const key = d.toISOString().slice(0, 10)
      if (!map[key]) map[key] = []
      map[key].push(iso)
    }
    // sort by time within each date
    Object.keys(map).forEach((k) => map[k].sort())
    return map
  }, [availability])

  const orderedDates = useMemo(() => Object.keys(slotsByDate).sort(), [slotsByDate])

  const formatDate = (dStr) => {
    const d = new Date(dStr + 'T00:00:00')
    return d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })
  }
  const formatTime = (iso) => {
    const d = new Date(iso)
    return d.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })
  }

  const submitBooking = async (e) => {
    e.preventDefault()
    if (!selectedStaff || !selectedSlot) return
    try {
      setBookingSubmitting(true)
      setBookingStatus(null)
      // Reuse values from the contact form if present; otherwise read from inputs
      const name = e.target.elements['bk_name'].value
      const email = e.target.elements['bk_email'].value
      const phone = e.target.elements['bk_phone'].value
      const notes = e.target.elements['bk_notes'].value
      await axios.post(
        '/api/appointments',
        {
          staff_id: selectedStaff,
          start_time: selectedSlot,
          duration_min: 30,
          name,
          email,
          phone,
          notes,
        },
        { timeout: 20000 },
      )
      setBookingStatus({ type: 'success', message: 'Booked! Check your email for details.' })
      setSelectedSlot('')
      setSelectedDate('')
      e.target.reset()
    } catch {
      setBookingStatus({
        type: 'error',
        message: 'Could not book this slot. It may have just been taken. Please try another.',
      })
    } finally {
      setBookingSubmitting(false)
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
            <h3>Book an Appointment</h3>
            <div className="form-field">
              <label htmlFor="staff">Choose Team Member</label>
              <select
                id="staff"
                value={selectedStaff}
                onChange={(e) => setSelectedStaff(e.target.value)}
              >
                {staff.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            {availabilityLoading && <p>Loading availability…</p>}
            {!availabilityLoading && orderedDates.length === 0 && (
              <p>No available times in the next 2 weeks.</p>
            )}

            {!availabilityLoading && orderedDates.length > 0 && (
              <>
                <div className="date-strip">
                  {orderedDates.map((d) => (
                    <button
                      type="button"
                      key={d}
                      className={`chip ${selectedDate === d ? 'primary' : ''}`}
                      onClick={() => {
                        setSelectedDate(d)
                        setSelectedSlot('')
                      }}
                    >
                      {formatDate(d)} ({slotsByDate[d].length})
                    </button>
                  ))}
                </div>

                {selectedDate && (
                  <div className="time-grid">
                    {slotsByDate[selectedDate].map((iso) => (
                      <button
                        type="button"
                        key={iso}
                        className={`chip ${selectedSlot === iso ? 'primary' : ''}`}
                        onClick={() => setSelectedSlot(iso)}
                      >
                        {formatTime(iso)}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}

            <hr />
            <form className="form" onSubmit={submitBooking}>
              <div className="grid-2">
                <div className="form-field">
                  <label htmlFor="bk_name">Full Name</label>
                  <input id="bk_name" name="bk_name" type="text" placeholder="Jane Doe" required />
                </div>
                <div className="form-field">
                  <label htmlFor="bk_email">Email</label>
                  <input id="bk_email" name="bk_email" type="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="bk_phone">Phone</label>
                <input id="bk_phone" name="bk_phone" type="tel" placeholder="+1 416 000 0000" />
              </div>
              <div className="form-field">
                <label htmlFor="bk_notes">Notes (optional)</label>
                <textarea id="bk_notes" name="bk_notes" rows={3} placeholder="Anything we should know?" />
              </div>
              <button className="btn btn-primary" disabled={bookingSubmitting || !selectedSlot || !selectedStaff}>
                {bookingSubmitting ? 'Booking…' : selectedSlot ? 'Confirm Booking' : 'Select a time'}
              </button>
              {bookingStatus && (
                <div className={`alert ${bookingStatus.type === 'success' ? 'success' : 'error'}`}>
                  {bookingStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}


