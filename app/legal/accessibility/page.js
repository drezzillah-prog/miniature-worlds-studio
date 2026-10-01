import LegalNav from "@/components/LegalNav";
export const metadata={title:"Accessibility"};

export default function AccessibilityPage(){return <>
  <section className="page-hero page-shell compact"><p className="kicker">Legal · Accessibility</p><h1>A premium site should still be usable.</h1><p className="lede">The studio treats accessibility as part of information design, not as a visual afterthought.</p></section>
  <LegalNav/>
  <article className="legal-document page-shell">
    <h2>1. Current approach</h2>
    <p>The website is built with semantic headings, labelled controls, keyboard-operable buttons and links, responsive layouts, readable text contrast, alternative text or accessible labels for meaningful imagery where implemented, and reduced-motion support for users who request it through their device settings.</p>

    <h2>2. Horizontal navigation</h2>
    <p>Long horizontal navigation rows are designed to remain scrollable on smaller screens rather than forcing links outside the viewport. Section navigation is intended to remain available while a user reads a long page.</p>

    <h2>3. Future commerce</h2>
    <p>If online ordering, identification, security or payment functions are added, accessibility will be reviewed as part of the launch gate. E-commerce accessibility obligations can apply under Romanian and EU law, while certain microenterprises providing services may qualify for a statutory exemption. The studio will assess the actual contracting entity and service before relying on any exemption.</p>

    <h2>4. Content supplied by third parties</h2>
    <p>Where a product or service has accessibility information supplied by the responsible economic operator, that information should not be removed from the customer-facing offer.</p>

    <h2>5. Feedback and remediation</h2>
    <p>Once the permanent studio contact channel is published, it will also be available for accessibility feedback. Material barriers reported by users should be investigated and corrected where reasonably possible.</p>
    <p className="legal-updated">Last updated: 1 October 2026.</p>
  </article>
</>;}
