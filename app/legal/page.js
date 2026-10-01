import Link from "next/link";
import LegalNav from "@/components/LegalNav";

export const metadata={title:"Legal & Policies"};

const cards=[
  ["Trader Information","Who the contracting seller is, how to contact the studio, and the legal information that must be visible before commercial launch.","/legal/trader-information"],
  ["Terms & Conditions","How enquiries become contracts, quotes, staged payments, approvals, custom commissions, changes, delays and applicable law.","/legal/terms"],
  ["Shipping & Returns","Packing, delivery, transfer of risk, transit damage, ready-made returns and the personalised-goods withdrawal exception.","/legal/shipping-returns"],
  ["Guarantee & Aftercare","Statutory conformity rights, the studio's two-year technical aftercare, repairs, evidence and what is not a manufacturing fault.","/legal/guarantee-aftercare"],
  ["Complaints & Disputes","How to raise a complaint, escalation, Romanian consumer protection and alternative dispute resolution without relying on the discontinued EU ODR platform.","/legal/complaints-disputes"],
  ["Product Safety & Care","Collector-object status, product-specific warnings, technical systems, safe use, maintenance, traceability and corrective action.","/legal/product-safety-care"],
  ["Privacy","What personal data may be processed, why, legal bases, retention criteria, service providers and data-subject rights.","/legal/privacy"],
  ["Cookies","What the current site stores, what it does not intentionally track, and what must happen before non-essential tracking is ever activated.","/legal/cookies"],
  ["IP & Photography","Ownership of the physical piece versus design rights, client references, commercial reproduction, portfolio photography and confidentiality.","/legal/ip-photography"],
  ["Accessibility","The studio's accessibility approach and the legal launch check required if e-commerce accessibility obligations apply.","/legal/accessibility"]
];

export default function LegalHubPage(){return <>
  <section className="page-hero page-shell compact">
    <p className="kicker">Legal & policies</p>
    <h1>Clear rules for unusual objects.</h1>
    <p className="lede">Miniature Worlds Studio makes one-off and technically complex physical works. These policies separate creative flexibility from the things that should never be ambiguous: price, approval, delivery, safety, consumer rights, privacy and aftercare.</p>
  </section>
  <LegalNav/>
  <section className="legal-status page-shell">
    <div><p className="kicker">Current website status</p><h2>Inquiry-first, not checkout-first.</h2></div>
    <p>The current website lets visitors explore the studio and prepare a project brief. It does not presently process online payment or conclude consumer contracts through a checkout. Before paid online ordering is enabled, the seller's full statutory identity, tax status, payment methods, delivery restrictions and any legally required point-of-sale notices will be completed and displayed.</p>
  </section>
  <section className="legal-card-grid page-shell">
    {cards.map(([title,copy,href])=><Link className="legal-card" href={href} key={href}><span>Read policy</span><h2>{title}</h2><p>{copy}</p><b aria-hidden="true">↗</b></Link>)}
  </section>
  <section className="legal-priority page-shell">
    <p className="kicker">Mandatory rights come first</p>
    <h2>No studio policy is intended to remove a right that the law says cannot be waived.</h2>
    <p>Where a consumer has mandatory rights under Romanian law, EU law or another law that applies to the contract, those rights prevail over any less favourable wording on this website, in a quote or in a project document.</p>
  </section>
</>;}
