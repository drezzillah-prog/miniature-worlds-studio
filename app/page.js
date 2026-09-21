import Image from "next/image";
import Link from "next/link";
import {projects} from "@/lib/projects";

const categories=[
  ["Historical","Architecture, people, clothing, objects, and atmosphere shaped by research rather than spectacle.","/magnific-dark-tavern-fantasy-mini-2.png"],
  ["Spooky / Gothic","Dark rooms, uncanny streets, strange rituals, ruined beauty, and story-first unease — never gore.","/magnific-dark-tavern-fantasy-mini-1.png"],
  ["Cities","Street slices, neighbourhoods, urban fragments, remembered places, and imagined city worlds.","/magnific-dark-tavern-fantasy-mini-3.png"],
  ["Countryside","Farms, villages, landscapes, regional architecture, weather, season, and quiet domestic traces.","/magnific-dark-tavern-fantasy-mini-4.png"],
  ["Rooms / Interiors","Personal spaces built through objects, light, texture, memory, and the evidence of human presence.","/magnific-dark-tavern-fantasy-mini-1.png"],
  ["Museum / Large Installations","Durable, research-led worlds for exhibitions, education, public display, and institutional storytelling.","/magnific-dark-tavern-fantasy-mini-3.png"]
];
const scales=[["Tiny","1–3 weeks","Compact scenes, intimate gifts, focused concepts."],["Medium","3–8 weeks","More detail, stronger narrative, layered environments."],["Large","2–6 months","Complex architecture, multiple zones, immersive commissions."],["Museum","6–12+ months","Institutional, educational, exhibition-scale work."]];

export default function HomePage(){
  return <>
    <section className="hero">
      <Image src="/magnific-dark-tavern-fantasy-mini-1.png" alt="" fill priority sizes="100vw" className="hero-image"/>
      <div className="hero-overlay"/><div className="hero-grain"/>
      <div className="hero-content page-shell">
        <p className="kicker light">Bespoke miniature environments · collector to exhibition scale</p>
        <h1>Miniature<br/><em>Worlds</em> Studio</h1>
        <p className="hero-copy">Hand-built worlds for people who want more than an object: a place, a memory, an atmosphere, a story you can stand over and disappear into.</p>
        <div className="hero-actions"><Link className="button brass" href="/portfolio">View Worlds</Link><Link className="button glass" href="/contact">Commission a World</Link></div>
      </div>
      <div className="hero-foot page-shell"><span>Historical</span><span>Gothic</span><span>Urban</span><span>Rural</span><span>Interiors</span><span>Institutional</span></div>
    </section>

    <section className="intro-section page-shell">
      <div><p className="kicker">The studio</p><h2>A world does not need to be large to feel inhabited.</h2></div>
      <div className="intro-copy">
        <p>Miniature Worlds Studio creates custom, diorama-like environments with an emphasis on atmosphere, architectural detail, storytelling, and handcrafted precision. A commission may begin with a real building, a vanished street, a family memory, a fictional room, a dark legend, or simply a feeling.</p>
        <p>Every piece is developed as its own small reality. Scale, materials, research, figures, lighting, weathering, and composition are chosen around the story rather than forced into a fixed product template.</p>
        <Link className="text-link" href="/about">Read the studio story <span>↗</span></Link>
      </div>
    </section>

    <section className="category-section">
      <div className="page-shell section-heading"><p className="kicker">Ways into a world</p><h2>Six directions. No two commissions alike.</h2></div>
      <div className="category-grid page-shell">
        {categories.map(([title,copy,image],index)=><Link href="/portfolio" className="category-card" key={title} style={{backgroundImage:`linear-gradient(180deg, rgba(8,8,7,.05), rgba(8,8,7,.92)), url("${image}")`}}>
          <span className="category-number">{String(index+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{copy}</p></div>
        </Link>)}
      </div>
    </section>

    <section className="featured-section page-shell">
      <div className="section-heading split"><div><p className="kicker">Selected worlds</p><h2>Stories held inside a frame.</h2></div><p className="section-note">The first portfolio uses clearly labelled studio concept studies. Finished commissions can replace them without changing the system.</p></div>
      <div className="featured-grid">
        {projects.slice(0,4).map((project,index)=><article className={index===0?"featured-card feature-large":"featured-card"} key={project.slug}>
          <Link href={"/portfolio/"+project.slug} className="featured-image"><Image src={project.image} alt={project.title} fill sizes={index===0?"(max-width: 900px) 100vw, 62vw":"(max-width: 900px) 100vw, 38vw"}/><span className="image-shade"/></Link>
          <div className="featured-copy"><p className="kicker">{project.eyebrow}</p><h3><Link href={"/portfolio/"+project.slug}>{project.title}</Link></h3><p>{project.description}</p></div>
        </article>)}
      </div>
      <div className="center-action"><Link className="button ghost" href="/portfolio">Enter the portfolio</Link></div>
    </section>

    <section className="craft-section"><div className="page-shell craft-grid">
      <div className="craft-visual"><Image src="/magnific-dark-tavern-fantasy-mini-4.png" alt="Atmospheric miniature study" fill sizes="(max-width: 900px) 100vw, 50vw"/><div className="craft-caption">Light · texture · proportion · evidence of life</div></div>
      <div className="craft-copy"><p className="kicker light">What makes the work different</p><h2>Not tiny objects.<br/>Tiny evidence.</h2>
        <p>The most convincing miniature worlds are built from things that imply a life beyond the frame: worn thresholds, a chair that has moved, soot above a lamp, damp stone, uneven books, a market closing, a window still awake.</p>
        <div className="principle-list">
          <div><span>01</span><strong>Story before decoration</strong><p>Every detail earns its place by supporting atmosphere, character, history, or use.</p></div>
          <div><span>02</span><strong>Research where it matters</strong><p>Historical work considers architecture, dress, material culture, signage, and context without sensationalism.</p></div>
          <div><span>03</span><strong>Built for the viewing distance</strong><p>Scale, contrast, lighting, density, and finish change depending on whether a piece lives on a shelf or in a gallery.</p></div>
        </div>
      </div>
    </div></section>

    <section className="process-preview page-shell">
      <div className="section-heading split"><div><p className="kicker">Commissioning</p><h2>From an idea to a physical world.</h2></div><Link className="text-link" href="/commissions">Full commission process <span>↗</span></Link></div>
      <div className="process-line">{["Inquiry","Concept","Proposal","Staged Payment","Build","Progress Updates","Delivery"].map((step,index)=><div key={step}><span>{String(index+1).padStart(2,"0")}</span><strong>{step}</strong></div>)}</div>
    </section>

    <section className="scale-preview"><div className="page-shell">
      <div className="section-heading"><p className="kicker light">Scale & time</p><h2>Choose the ambition. The quote follows the world.</h2></div>
      <div className="scale-grid">{scales.map(([name,time,copy])=><article key={name}><p className="kicker light">{name} World</p><h3>{time}</h3><p>{copy}</p></article>)}</div>
      <p className="scale-note">Exact pricing is quote-based. Complexity, footprint, research, figures, architecture, lighting, materials, protective display, packaging, shipping, and installation all affect the final proposal.</p>
    </div></section>

    <section className="testimonial page-shell"><div className="quote-mark">“</div><blockquote><p>The goal is the moment someone leans closer, goes quiet, and starts noticing a second story inside the first.</p><footer>Studio principle · placeholder placement for a future verified client testimonial</footer></blockquote></section>

    <section className="final-cta"><Image src="/magnific-dark-tavern-fantasy-mini-2.png" alt="" fill sizes="100vw"/><div className="image-shade"/><div className="page-shell final-cta-copy"><p className="kicker light">Have a place in mind?</p><h2>Tell the studio what should exist in miniature.</h2><Link className="button brass" href="/contact">Start an inquiry</Link></div></section>
  </>;
}
