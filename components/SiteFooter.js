import Link from "next/link";

export default function SiteFooter(){
  return <footer className="site-footer">
    <div className="footer-grid footer-grid-legal">
      <div><p className="kicker">Miniature Worlds Studio</p><h2>Small in scale.<br/>Complete in feeling.</h2></div>
      <div><p className="footer-label">Explore</p><Link href="/portfolio">Portfolio</Link><Link href="/services">Scale & Services</Link><Link href="/atmosphere-engineering">Atmosphere & Engineering</Link><Link href="/commissions">Commission Process</Link><Link href="/journal">Studio Notes</Link></div>
      <div><p className="footer-label">Studio</p><Link href="/about">About</Link><Link href="/faq">FAQ</Link><Link href="/contact">Project Inquiry</Link></div>
      <div><p className="footer-label">Legal</p><Link href="/legal">Legal & Policies</Link><Link href="/legal/terms">Terms & Conditions</Link><Link href="/legal/shipping-returns">Shipping & Returns</Link><Link href="/legal/guarantee-aftercare">Guarantee & Aftercare</Link><Link href="/legal/privacy">Privacy</Link><Link href="/legal/cookies">Cookies</Link></div>
      <div className="footer-note"><p>Custom-made miniature worlds for collectors, private clients, creators, studios, brands, museums, and institutions.</p><p>Final photography before dispatch · technical testing where applicable · studio aftercare.</p></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Miniature Worlds Studio</span><span><Link href="/legal/product-safety-care">Product Safety</Link> · <Link href="/legal/ip-photography">IP & Photography</Link> · <Link href="/legal/accessibility">Accessibility</Link></span></div>
  </footer>;
}
