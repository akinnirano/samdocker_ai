export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <strong>Samchel AI</strong>
          <p>The Local AI Partner Helping Toronto’s Small Businesses Work Smarter.</p>
        </div>
        <div className="footer-copy">
          <p>© {year} Samchel AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


