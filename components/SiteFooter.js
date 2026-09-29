import Link from "next/link";

export default function SiteFooter(){
  return <footer className="site-footer">
    <div className="footer-grid">
      <div><p className="kicker">Miniature Worlds Studio</p><h2>Small in scale.<br/>Complete in feeling.</h2></div>
      <div><p className="footer-label">Explore</p><Link href="/portfolio">Portfolio</Link><Link href="/services">Scale & Services</Link><Link href="/atmosphere-engineering">Atmosphere & Engineering</Link><Link href="/commissions">Commission Process</Link><Link href="/journal">Studio Notes</Link></div>
      <div><p className="footer-label">Studio</p><Link href="/about">About</Link><Link href="/faq">FAQ</Link><Link href="/contact">Project Inquiry</Link></div>
      <div className="footer-note"><p>Custom-made miniature worlds for collectors, private clients, creators, studios, brands, museums, and institutions.</p><p>Final photography before dispatch · technical testing where applicable · studio aftercare.</p></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Miniature Worlds Studio</span><span>Hand-built · final-approved · supported after delivery</span></div>
  </footer>;
}
