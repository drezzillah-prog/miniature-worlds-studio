import Link from "next/link";

export const legalLinks=[
  ["Legal & Policies","/legal"],
  ["Trader Information","/legal/trader-information"],
  ["Terms & Conditions","/legal/terms"],
  ["Shipping & Returns","/legal/shipping-returns"],
  ["Guarantee & Aftercare","/legal/guarantee-aftercare"],
  ["Complaints & Disputes","/legal/complaints-disputes"],
  ["Product Safety & Care","/legal/product-safety-care"],
  ["Privacy","/legal/privacy"],
  ["Cookies","/legal/cookies"],
  ["IP & Photography","/legal/ip-photography"],
  ["Accessibility","/legal/accessibility"]
];

export default function LegalNav(){
  return <nav className="legal-nav page-shell" aria-label="Legal and policy pages">
    {legalLinks.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}
  </nav>;
}
