export const projects = [
  {
    slug:"last-light-saint-aubin", title:"The Last Light on Rue Saint-Aubin", category:"Historical",
    image:"/magnific-dark-tavern-fantasy-mini-2.png", eyebrow:"Historical · Concept study",
    description:"A rain-darkened nineteenth-century street caught between closing shutters, lamplight, and the final footsteps of the evening.",
    story:"The scene is imagined as a memory rather than a literal reconstruction: architecture, clothing, signage, street texture, and lighting work together to make the viewer feel that the hour has continued without them.",
    scale:"Approx. 1:48 · final scale depends on commission",
    materials:"Architectural board, resin, wood, sculpted details, pigments, miniature lighting, archival references.",
    timeline:"Medium World · typically 3–8 weeks", clientType:"Concept study / collector-scale direction",
    tags:["Historical","Cities"]
  },
  {
    slug:"nocturne-apothecary", title:"The Nocturne Apothecary", category:"Spooky / Dark",
    image:"/magnific-dark-tavern-fantasy-mini-1.png", eyebrow:"Spooky / Dark · Concept study",
    description:"An impossible little shop of amber bottles, old ledgers, sealed drawers, and a doorway that seems deeper than the room behind it.",
    story:"Dark work at the studio is atmospheric rather than graphic. The focus is unease, mystery, texture, age, strange rituals, and the sense that every object belongs to a larger story.",
    scale:"Approx. 1:24 · adaptable",
    materials:"Wood, resin, paper, glass-effect elements, aged finishes, hand-painted props, low-voltage lighting.",
    timeline:"Medium World · typically 3–8 weeks", clientType:"Concept study / private collector direction",
    tags:["Spooky / Dark","Rooms / Interiors"]
  },
  {
    slug:"midnight-quarter", title:"Midnight Quarter", category:"Cities",
    image:"/magnific-dark-tavern-fantasy-mini-3.png", eyebrow:"City world · Concept study",
    description:"A dense urban slice where windows, alleys, signs, balconies, and tiny human traces build the feeling of a city that continues beyond the frame.",
    story:"City commissions can be based on a real place, a remembered neighbourhood, or an invented district. The goal is not simply to miniaturize buildings, but to create believable urban life.",
    scale:"Variable · street slice to multi-building world",
    materials:"Mixed architectural media, printed and hand-painted signage, resin, wood, metal details, lighting.",
    timeline:"Large World · typically 2–6 months", clientType:"Concept study / brand or collector direction",
    tags:["Cities"]
  },
  {
    slug:"orchard-before-rain", title:"Orchard Before Rain", category:"Countryside",
    image:"/magnific-dark-tavern-fantasy-mini-4.png", eyebrow:"Countryside · Concept study",
    description:"A rural world of worn paths, timber, quiet domestic traces, low clouds, and the exact stillness before weather changes.",
    story:"Rural pieces can preserve family places, regional architecture, farms, village streets, seasonal rituals, or entirely fictional landscapes without slipping into postcard nostalgia.",
    scale:"Approx. 1:48 · adaptable",
    materials:"Wood, scenic fibres, plaster, pigments, natural textures, miniature foliage, architectural details.",
    timeline:"Medium World · typically 3–8 weeks", clientType:"Concept study / personal commission direction",
    tags:["Countryside"]
  },
  {
    slug:"writers-room", title:"The Writer’s Room, 2:13 A.M.", category:"Rooms / Interiors",
    image:"/magnific-dark-tavern-fantasy-mini-1.png", eyebrow:"Interior · Concept study",
    description:"A deeply personal room assembled through books, paper, ash-soft light, a half-finished drink, and the evidence of someone recently present.",
    story:"Interior commissions are built around clues. A chair angle, a stack of letters, a particular textile, a lamp left on: small choices create the portrait of a person without showing the person at all.",
    scale:"Approx. 1:12 or 1:24",
    materials:"Wood, paper, textiles, resin, miniature books and props, lighting, patina and painted finishes.",
    timeline:"Tiny or Medium World · typically 1–8 weeks", clientType:"Concept study / private commission direction",
    tags:["Rooms / Interiors"]
  },
  {
    slug:"port-city-memory-table", title:"Port City Memory Table", category:"Museum / Institutional",
    image:"/magnific-dark-tavern-fantasy-mini-3.png", eyebrow:"Museum / Institutional · Future-scale concept",
    description:"A large interpretive city table combining architecture, movement, labelled stories, lighting, and layered historical moments.",
    story:"Institutional work can become an exhibition object rather than a conventional diorama: a durable, research-led environment designed for public viewing, education, and repeat interpretation.",
    scale:"Exhibition-scale · footprint defined with institution",
    materials:"Specification-led mixed media, durable finishes, modular structure, lighting and interpretive elements.",
    timeline:"Museum / Exhibition World · typically 6–12+ months", clientType:"Future institutional / museum concept",
    tags:["Museum / Institutional","Historical","Cities"]
  }
];

export const categories=["All","Historical","Spooky / Dark","Cities","Countryside","Rooms / Interiors","Museum / Institutional"];
export function getProject(slug){return projects.find((project)=>project.slug===slug);}
