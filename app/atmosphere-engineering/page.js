import Link from "next/link";

export const metadata={title:"Atmosphere & Engineering"};

const effects=[
  ["Integrated lighting","Windows, interiors, street lamps, display lighting and concealed illumination designed around the scene."],
  ["Fire & glow","Candlelight, hearths, furnaces, gaslight and controlled flicker effects where appropriate."],
  ["Steam, smoke & mist","Atmospheric effects for locomotives, chimneys, industrial scenes, kitchens, ports and low-lying environments."],
  ["Water & wet surfaces","Still water, canals, fountains, waves, waterfalls, puddles, rain-dark stone and reflective surfaces."],
  ["Weather & climate","Snow, ice, mud, dust, fallen leaves, dampness and other environmental traces that make a scene feel exposed to time."],
  ["Mechanical movement","Discreet rotating, opening, swinging or operating elements where the scale and project allow."],
  ["Surface ageing","Worn stone, weathered timber, aged plaster, soot, staining, corrosion and other evidence of use."],
  ["Metal patina","Rust, oxidation, verdigris, darkened metal and worn finishes selected to suit the period and environment."],
  ["Vegetation & overgrowth","Moss, ivy, roots, trees, gardens, wild planting and architectural overgrowth."],
  ["Optical depth & reflections","Glazing, mirrors, reflective surfaces, transparency and perspective effects used to extend the visual world."],
  ["Sound & interaction","Optional discreet audio, grouped lighting, sequencing or simple interactive controls for selected projects."],
  ["Exhibition systems","Durability, maintenance access, replaceable components and practical systems for repeated public display."],
  ["Custom practical effects","Project-specific effects can be developed when they are technically feasible, safe and appropriate to the world."]
];

export default function AtmosphereEngineeringPage(){return <>
  <section className="page-hero page-shell atmosphere-hero">
    <p className="kicker">Atmosphere & Engineering</p>
    <h1>Small worlds. Real atmosphere.</h1>
    <p className="lede">Selected commissions can incorporate concealed lighting, atmospheric effects, moving elements, water, weathering and other practical systems designed to make a miniature environment feel inhabited rather than static.</p>
  </section>

  <section className="effects-section page-shell">
    <div className="effects-intro"><div><p className="kicker">Capabilities</p><h2>The effect always serves the world.</h2></div><p>Movement, lighting and atmosphere are selected to support the period, environment and story of a piece — never added simply because they are possible.</p></div>
    <div className="effects-grid">{effects.map(([title,copy],index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    <div className="private-process"><p className="kicker light">Studio process</p><h2>Visible result. Private method.</h2><p>Materials, internal engineering and proprietary fabrication methods vary by project and remain part of the studio’s private process. The site explains what a world can do, not the formulas, internal systems or fabrication recipes behind it.</p></div>
  </section>

  <section className="approval-section">
    <div className="page-shell approval-grid">
      <div><p className="kicker light">Final approval before shipping</p><h2>You see the finished world before we pack it.</h2></div>
      <div>
        <p>Before a commissioned piece leaves the studio, the client receives clear final photographs showing the completed world and its principal features. Where technical effects are included, they are tested before dispatch.</p>
        <p>For existing pieces, the published listing photographs and current pre-shipping condition photographs form the visual reference. For commissioned work, the agreed project specification and final approval photographs form the reference.</p>
        <p>Because every piece is handmade, microscopic variations in texture, hand-finishing and naturally irregular materials are part of the character of the work. Material differences from the approved design, missing agreed features, visible damage or malfunctioning systems are not.</p>
      </div>
    </div>
  </section>

  <section className="aftercare-section page-shell">
    <div className="aftercare-heading"><p className="kicker">Quality & aftercare</p><h2>Crafted to match. Supported after delivery.</h2></div>
    <div className="aftercare-grid">
      <article><span>01</span><h3>Crafted-to-Match Promise</h3><p>The piece you receive should materially correspond to the piece you approved. If a delivered piece materially differs from its agreed specification or documented pre-shipping condition, contact the studio with photographs showing the issue so it can be assessed and remedied appropriately.</p></article>
      <article><span>02</span><h3>Two-year guarantee & aftercare</h3><p>Private consumers in the EU benefit from the statutory legal conformity guarantee required by law. The studio also provides two-year technical aftercare for manufacturing or installation faults in integrated systems, without limiting any mandatory consumer rights that apply in the buyer’s country.</p></article>
      <article><span>03</span><h3>Verified faults</h3><p>Where a manufacturing or conformity fault is attributable to the studio, the appropriate remedy is provided without charge. Reasonable transport required for that remedy is covered where required by applicable consumer law.</p></article>
      <article><span>04</span><h3>Damage after delivery</h3><p>Impact, improper handling, unauthorised modification, unsuitable storage, liquid exposure, incorrect electrical supply or other external damage is not treated as a manufacturing defect. Where repair is possible, a separate paid restoration service may be offered.</p></article>
      <article><span>05</span><h3>Evidence & diagnosis</h3><p>We may request clear photographs or short video showing the condition of the piece and the affected area or technical feature so the problem can be identified before transport is arranged.</p></article>
      <article><span>06</span><h3>Dispatch record</h3><p>High-value commissions are documented before protective packing, including final condition photographs and, where relevant, a short test record of integrated lighting or practical effects.</p></article>
    </div>
    <div className="aftercare-note"><p>This studio policy does not reduce or replace any mandatory statutory rights available to consumers under applicable law.</p></div>
  </section>

  <section className="simple-cta page-shell"><div><p className="kicker">Have an effect in mind?</p><h2>Tell us what the world should feel like. We will decide what the build needs.</h2></div><Link className="button brass" href="/contact">Start an inquiry</Link></section>
</>;}
