import { Link } from 'react-router-dom'

export default function CTAButton({ text = 'Contact Us' }) {
  return (
    <Link to="/contact" className="btn btn-primary">
      {text}
    </Link>
  )
}


