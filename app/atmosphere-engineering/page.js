import Link from "next/link";

export const metadata={title:"Atmosphere & Engineering"};

const effectGroups=[
  {number:"01",title:"Light & atmosphere",copy:"Illumination and air are used to give a world time of day, temperature and activity.",items:[
    ["Integrated lighting","Windows, interiors, street lamps, display lighting and concealed illumination designed around the scene."],
    ["Fire & glow","Candlelight, hearths, furnaces, gaslight and controlled flicker effects where appropriate."],
    ["Steam, smoke & mist","Atmospheric effects for locomotives, chimneys, industrial scenes, kitchens, ports and low-lying environments."]
  ]},
  {number:"02",title:"Water & environment",copy:"Weather and natural systems help the miniature feel exposed to a world beyond its base.",items:[
    ["Water & wet surfaces","Still water, canals, fountains, waves, waterfalls, puddles, rain-dark stone and reflective surfaces."],
    ["Weather & climate","Snow, ice, mud, dust, fallen leaves, dampness and other environmental traces that make a scene feel exposed to time."],
    ["Vegetation & overgrowth","Moss, ivy, roots, trees, gardens, wild planting and architectural overgrowth."]
  ]},
  {number:"03",title:"Material realism & depth",copy:"Surfaces are treated so that scale reads through wear, reflection, transparency and age.",items:[
    ["Surface ageing","Worn stone, weathered timber, aged plaster, soot, staining, corrosion and other evidence of use."],
    ["Metal patina","Rust, oxidation, verdigris, darkened metal and worn finishes selected to suit the period and environment."],
    ["Optical depth & reflections","Glazing, mirrors, reflective surfaces, transparency and perspective effects used to extend the visual world."]
  ]},
  {number:"04",title:"Motion & exhibition systems",copy:"Where a project needs it, discreet engineering can introduce movement, control and repeatable public use.",items:[
    ["Mechanical movement","Discreet rotating, opening, swinging or operating elements where the scale and project allow."],
    ["Sound & interaction","Optional discreet audio, grouped lighting, sequencing or simple interactive controls for selected projects."],
    ["Exhibition systems","Durability, maintenance access, replaceable components and practical systems for repeated public display."],
    ["Custom practical effects","Project-specific effects can be developed when they are technically feasible, safe and appropriate to the world."]
  ]}
];

const aftercare=[
  ["Two-year protection","For private consumers in the EU, the statutory legal guarantee of conformity applies for at least two years. The studio also provides two-year technical aftercare for manufacturing or installation faults in integrated systems, without reducing mandatory consumer rights."],
  ["If the fault is ours","A verified manufacturing, installation or conformity fault attributable to the studio is remedied without charge. Reasonable transport required for the remedy is covered where required by applicable consumer law."],
  ["If damage happens later","Impact, improper handling, unauthorised modification, unsuitable storage, liquid exposure, incorrect electrical supply or other external damage is not treated as a manufacturing defect. Where possible, a paid restoration service may still be offered."],
  ["How an issue is assessed","We may request clear photographs or a short video of the affected area or technical feature. High-value commissions also have a pre-shipping dispatch record so the delivered condition can be compared fairly."]
];

export default function AtmosphereEngineeringPage(){return <>
  <section className="page-hero page-shell atmosphere-hero">
    <p className="kicker">Atmosphere & Engineering</p>
    <h1>Small worlds. Real atmosphere.</h1>
    <p className="lede">Selected commissions can incorporate concealed lighting, atmospheric effects, moving elements, water, weathering and other practical systems designed to make a miniature environment feel inhabited rather than static.</p>
  </section>

  <nav className="page-map page-shell" aria-label="Atmosphere and engineering sections">
    <a href="#effects">Effects</a>
    <a href="#approval">Final Approval</a>
    <a href="#aftercare">Two-Year Protection</a>
    <a href="#repairs">Repairs & Aftercare</a>
  </nav>

  <section className="effects-section page-shell" id="effects">
    <div className="effects-intro"><div><p className="kicker">Capabilities</p><h2>The effect always serves the world.</h2></div><p>Movement, lighting and atmosphere are selected to support the period, environment and story of a piece — never added simply because they are possible.</p></div>
    <div className="effect-groups">{effectGroups.map((group)=><section className="effect-group" key={group.title}>
      <header><span>{group.number}</span><div><h3>{group.title}</h3><p>{group.copy}</p></div></header>
      <div className="effect-items">{group.items.map(([title,copy])=><article key={title}><h4>{title}</h4><p>{copy}</p></article>)}</div>
    </section>)}</div>
    <div className="private-process"><p className="kicker light">Studio process</p><h2>Visible result. Private method.</h2><p>Materials, internal engineering and proprietary fabrication methods vary by project and remain part of the studio’s private process. The site explains what a world can do, not the formulas, internal systems or fabrication recipes behind it.</p></div>
  </section>

  <section className="approval-section" id="approval">
    <div className="page-shell approval-grid">
      <div><p className="kicker light">Final approval before shipping</p><h2>You see the finished world before we pack it.</h2><p className="approval-lede">The approval record protects both sides: it shows exactly what the piece looked like and how its technical systems performed immediately before protective packing.</p></div>
      <div className="approval-steps">
        <article><span>01</span><div><h3>Final photography</h3><p>Clear final photographs document the completed world and its principal features. Existing pieces use their listing photographs plus current condition photographs.</p></div></article>
        <article><span>02</span><div><h3>Technical test</h3><p>Where integrated lighting, movement or practical effects are included, the relevant systems are tested before dispatch and may be documented by short video.</p></div></article>
        <article><span>03</span><div><h3>Client approval & packing</h3><p>For commissions, the approved project specification and final photographs become the visual reference. Protective packing begins after final visual approval.</p></div></article>
      </div>
    </div>
  </section>

  <section className="aftercare-section page-shell" id="aftercare">
    <div className="aftercare-heading"><p className="kicker">Quality, guarantee & aftercare</p><h2>Crafted to match. Supported after delivery.</h2><p>Handmade character is expected; material non-conformity is not. Microscopic variations in texture, hand-finishing and naturally irregular materials are part of the work. Missing agreed features, visible damage or malfunctioning systems are assessed separately.</p></div>

    <div className="promise-banner"><div><span>Crafted-to-Match Promise</span><h3>The piece you receive should materially correspond to the piece you approved.</h3></div><p>If a delivered piece materially differs from its agreed specification or documented pre-shipping condition, contact the studio with photographs showing the issue so it can be assessed and remedied appropriately.</p></div>

    <div className="aftercare-grid" id="repairs">{aftercare.map(([title,copy],index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>

    <div className="aftercare-note"><p>This studio policy does not reduce or replace mandatory statutory rights available to consumers under applicable law. Consumer-sales documentation will include the legally required guarantee information applicable at the time and place of sale.</p></div>
  </section>

  <section className="simple-cta page-shell"><div><p className="kicker">Have an effect in mind?</p><h2>Tell us what the world should feel like. We will decide what the build needs.</h2></div><Link className="button brass" href="/contact">Start an inquiry</Link></section>
</>;}
