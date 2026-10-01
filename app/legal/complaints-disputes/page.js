import LegalNav from "@/components/LegalNav";
export const metadata={title:"Complaints & Disputes"};

export default function ComplaintsDisputesPage(){return <>
  <section className="page-hero page-shell compact"><p className="kicker">Legal · Complaints & Disputes</p><h1>Problems should have a clear route to resolution.</h1><p className="lede">A complaint process should make it easier to solve a genuine problem, not create extra hurdles before a customer can use statutory rights.</p></section>
  <LegalNav/>
  <article className="legal-document page-shell">
    <h2>1. Contact the studio first</h2>
    <p>For the fastest assessment, provide the order or project reference, a clear description of the issue and any photographs or short video that can safely show the problem. If evidence cannot reasonably be provided, that does not by itself extinguish a mandatory consumer right.</p>

    <h2>2. What the studio will check</h2>
    <p>The studio may compare the delivered piece with the accepted specification, final approval photographs, packing record, technical test record, carrier information and product-specific instructions. The purpose is to determine whether the issue is a conformity fault, transit damage, a technical aftercare matter, normal handmade variation or external damage.</p>

    <h2>3. Corrective route</h2>
    <p>Where a mandatory conformity remedy applies, the studio follows the remedy structure required by law. A voluntary studio repair or restoration may be offered for issues outside statutory or commercial coverage, with cost and transport agreed before work begins.</p>

    <h2>4. Romanian consumer protection</h2>
    <p>Consumers may submit complaints to the Romanian National Authority for Consumer Protection (ANPC) through its official channels. The studio will not require a consumer to give up access to a public authority or court as a condition of contacting the studio.</p>
    <p><a className="legal-external" href="https://anpc.ro/" target="_blank" rel="noreferrer">ANPC official website ↗</a></p>

    <h2>5. Alternative Dispute Resolution (SAL)</h2>
    <p>ANPC also coordinates an Alternative Dispute Resolution mechanism for consumer disputes. Where applicable, consumers can use SAL as an out-of-court route. Participation, cooperation and any binding effect are governed by the applicable legal framework and the relevant procedure.</p>
    <p><a className="legal-external" href="https://anpc.ro/sal/" target="_blank" rel="noreferrer">ANPC — Alternative Dispute Resolution (SAL) ↗</a></p>

    <h2>6. No obsolete EU ODR link</h2>
    <p>The European Online Dispute Resolution platform under Regulation (EU) No 524/2013 was discontinued and the Regulation was repealed with effect from 20 July 2025. The studio therefore does not display an obsolete ODR-platform link as though it were still an active complaint channel.</p>

    <h2>7. Courts and mandatory rights</h2>
    <p>Using an internal complaint route or a voluntary ADR mechanism does not remove access to the courts or another remedy where the law provides one. Consumer jurisdiction and applicable-law rules remain governed by mandatory law.</p>

    <h2>8. Records</h2>
    <p>Complaint, safety and aftercare records may be retained for the period reasonably necessary to resolve the issue, comply with legal obligations, support product traceability and establish or defend legal claims, in accordance with the Privacy Policy.</p>
    <p className="legal-updated">Last updated: 1 October 2026.</p>
  </article>
</>;}
