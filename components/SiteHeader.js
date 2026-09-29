import Link from "next/link";

const links=[
  ["Worlds","/portfolio"],
  ["Scale & Services","/services"],
  ["Commission Process","/commissions"],
  ["Atmosphere & Engineering","/atmosphere-engineering"],
  ["About","/about"],
  ["FAQ","/faq"],
  ["Studio Notes","/journal"]
];

export default function SiteHeader(){
  return <header className="site-header site-header-v2">
    <div className="header-brand-row">
      <Link className="brand-mark" href="/" aria-label="Miniature Worlds Studio home">
        <span className="brand-symbol" aria-hidden="true">M</span>
        <span><strong>Miniature Worlds</strong><em>Studio</em></span>
      </Link>
      <Link className="nav-cta header-cta" href="/contact">Commission a World</Link>
    </div>
    <nav className="horizontal-nav" aria-label="Primary navigation">
      <div className="horizontal-nav-inner">
        {links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}
      </div>
    </nav>
  </header>;
}
