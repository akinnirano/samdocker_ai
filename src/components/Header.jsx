import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const closeMobile = () => setIsMobileOpen(false)

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/faqs', label: 'FAQs' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact', label: 'Contact Us' },
  ]

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={closeMobile}>
          <span className="brand-ai">Samchel</span> <span>AI</span>
        </Link>

        <button
          className="hamburger"
          aria-label="Toggle navigation"
          onClick={() => setIsMobileOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${isMobileOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
              onClick={closeMobile}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="cta-small" onClick={closeMobile}>
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  )
}


