import LegalNav from "@/components/LegalNav";
export const metadata={title:"Cookie Policy"};

export default function CookiesPage(){return <>
  <section className="page-hero page-shell compact"><p className="kicker">Legal · Cookies</p><h1>No decorative cookie banner.</h1><p className="lede">A consent banner should exist because the site needs consent — not because every website is supposed to display one.</p></section>
  <LegalNav/>
  <article className="legal-document page-shell">
    <h2>1. Current site</h2>
    <p>The current Miniature Worlds Studio code does not intentionally deploy advertising, behavioural profiling or analytics cookies. The inquiry form stores its temporary entries only in the page's live browser state and does not intentionally persist them after the page session.</p>

    <h2>2. Strictly necessary technologies</h2>
    <p>Hosting, security, network delivery or future payment functionality may use storage or technical mechanisms that are strictly necessary to provide a service explicitly requested by the user. Where the law allows those mechanisms without consent, they will be limited to what is necessary.</p>

    <h2>3. Non-essential cookies</h2>
    <p>If analytics, advertising, social-media tracking, behavioural profiling or another non-essential storage technology is introduced, it will not be activated for users who require prior consent until an appropriate consent mechanism is in place. The cookie list, providers, purposes and durations will be published before activation.</p>

    <h2>4. Third-party embeds</h2>
    <p>The current site should avoid loading third-party media or social embeds that set non-essential tracking before consent. If such embeds are later added, they should be blocked or privacy-preserving until the relevant legal basis is satisfied.</p>

    <h2>5. Browser controls</h2>
    <p>Users can also manage stored website data through browser settings. Blocking strictly necessary storage may affect functionality where a future feature genuinely depends on it.</p>

    <h2>6. Why there is no consent banner today</h2>
    <p>Romanian electronic-communications rules require consent for storing or accessing information on a user's terminal unless a statutory exception applies, including storage strictly necessary to provide an explicitly requested information-society service. The studio therefore does not use a consent interface merely for appearance; it will add one before activating technologies that require consent.</p>
    <p className="legal-updated">Last updated: 1 October 2026.</p>
  </article>
</>;}
