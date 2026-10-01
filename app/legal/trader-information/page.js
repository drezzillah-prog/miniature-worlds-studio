import LegalNav from "@/components/LegalNav";
export const metadata={title:"Trader Information"};

export default function TraderInformationPage(){return <>
  <section className="page-hero page-shell compact"><p className="kicker">Legal · Trader information</p><h1>Who you are contracting with.</h1><p className="lede">The seller must be identifiable before a customer is asked to enter a binding contract or make a payment.</p></section>
  <LegalNav/>
  <section className="legal-document page-shell">
    <div className="legal-alert"><strong>Pre-launch status</strong><p>This website currently accepts project enquiries only and does not operate a consumer checkout. The final contracting entity has not yet been published on this page. No fictitious company details are used.</p></div>
    <h2>Information that will be displayed before commercial sales open</h2>
    <div className="legal-facts">
      <p><strong>Legal name / registered trade name</strong><span>To be completed with the contracting entity.</span></p>
      <p><strong>Registered office / postal address</strong><span>To be completed before paid orders are accepted.</span></p>
      <p><strong>Trade Registry / public register number</strong><span>To be completed where applicable.</span></p>
      <p><strong>Tax identification and VAT status</strong><span>To be completed according to the seller's actual registration.</span></p>
      <p><strong>Customer-service email and telephone</strong><span>To be completed with channels that allow rapid and effective contact.</span></p>
      <p><strong>Complaint / returns address</strong><span>To be completed before consumer sales begin.</span></p>
    </div>
    <h2>Off-site quotes and invoices</h2>
    <p>If a project is agreed by email, invoice, signed proposal or another distance channel before a website checkout exists, the binding proposal will identify the contracting seller and will provide the legally required pre-contract information applicable to that sale.</p>
    <h2>No contract by browsing</h2>
    <p>Viewing the website, using portfolio filters, or preparing a project brief does not itself create a sales contract. A contract is formed only when the studio accepts the project in writing under an identified contracting entity and the client accepts the applicable quote, specification and terms.</p>
    <p className="legal-updated">Last updated: 1 October 2026.</p>
  </section>
</>;}
