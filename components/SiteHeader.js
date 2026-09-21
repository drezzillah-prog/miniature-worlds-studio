import Link from "next/link";

const links=[["Worlds","/portfolio"],["About","/about"],["Services","/services"],["Process","/commissions"],["FAQ","/faq"],["Studio Notes","/journal"]];

export default function SiteHeader(){
  return <header className="site-header"><div className="nav-shell">
    <Link className="brand-mark" href="/" aria-label="Miniature Worlds Studio home">
      <span className="brand-symbol" aria-hidden="true">M</span>
      <span><strong>Miniature Worlds</strong><em>Studio</em></span>
    </Link>
    <nav className="desktop-nav" aria-label="Primary navigation">
      {links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}
      <Link className="nav-cta" href="/contact">Commission a World</Link>
    </nav>
    <details className="mobile-nav">
      <summary aria-label="Open menu"><span>Menu</span><i aria-hidden="true">+</i></summary>
      <nav aria-label="Mobile navigation">
        {links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}
        <Link className="nav-cta" href="/contact">Commission a World</Link>
      </nav>
    </details>
  </div></header>;
}
