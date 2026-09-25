"use client";

import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {categories,projects} from "@/lib/projects";
import c1 from "@/lib/history-sprite/c1";
import c2 from "@/lib/history-sprite/c2";
import c3 from "@/lib/history-sprite/c3";
import c4 from "@/lib/history-sprite/c4";
import c5 from "@/lib/history-sprite/c5";
import c6 from "@/lib/history-sprite/c6";
import c7 from "@/lib/history-sprite/c7";

const historicalSprite=`data:image/jpeg;base64,${c1}${c2}${c3}${c4}${c5}${c6}${c7}`;

const historicalStudies=[
  {number:1,col:0,row:0,title:"Roman bakery courtyard"},
  {number:2,col:1,row:0,title:"Viking longhall gathering"},
  {number:3,col:2,row:0,title:"Ottoman bazaar at dusk"},
  {number:4,col:3,row:0,title:"Edo village canal"},
  {number:5,col:4,row:0,title:"Medieval monastery cloister"},
  {number:6,col:0,row:1,title:"Renaissance courtyard"},
  {number:7,col:1,row:1,title:"Industrial harbour"},
  {number:8,col:2,row:1,title:"Victorian railway station"},
  {number:9,col:3,row:1,title:"Hilltop fortress"},
  {number:10,col:4,row:1,title:"Gothic cathedral square"}
];

const spookyStudies=[
  {number:1,col:0,row:0,direction:"Gothic Interiors",title:"The Apothecary",description:"A candlelit apothecary built around shelves of tiny vessels, dried botanicals and worn stonework, with every surface layered to feel used rather than staged."},
  {number:2,col:1,row:0,direction:"Gothic Interiors",title:"The Alchemist’s Tower",description:"A two-level gothic laboratory where glassware, books, instruments and warm practical lights create a dense, lived-in workspace."},
  {number:3,col:2,row:0,direction:"Gothic Interiors",title:"The Séance Room",description:"A Victorian parlour in deep burgundy and dark wood, composed around miniature figures, textiles and candlelight for a restrained supernatural atmosphere."},
  {number:4,col:0,row:1,direction:"Dark Streets & Woodland",title:"The Witch’s Cottage",description:"A crooked woodland workshop tucked beneath an old tree, with handmade timber, moss, jars and warm interior light set against an autumn floor."},
  {number:5,col:1,row:1,direction:"Ruins & Sacred Spaces",title:"The Crypt",description:"A ruined stone crypt shaped by arches, carved masonry, tomb sculpture and clusters of candles, balancing decay with precise architectural detail."},
  {number:6,col:2,row:1,direction:"Gothic Interiors",title:"The Conservatory",description:"An overgrown glasshouse of aged metal, climbing vines, water and statuary, designed so the structure and planting feel equally hand-built."},
  {number:7,col:0,row:2,direction:"Ruins & Sacred Spaces",title:"The Ruined Chapel",description:"A roofless gothic chapel with broken tracery, weathered stone and small figures, using warm points of light to pull depth through the ruin."},
  {number:8,col:1,row:2,direction:"Ruins & Sacred Spaces",title:"The Last Arch",description:"A compact fragment of gothic ruins, stripped back to stone, ivy and a lone bird — a smaller-scale study in texture, silhouette and age."},
  {number:9,col:2,row:2,direction:"Dark Streets & Woodland",title:"Rain on Blackstone Street",description:"A finite Victorian street scene with wet cobbles, glowing windows and miniature pedestrians, framed as a complete tabletop world rather than an endless city."},
  {number:10,col:0,row:3,direction:"Dark Streets & Woodland",title:"The Gothic Cemetery",description:"A self-contained cemetery world of ironwork, headstones, bare trees and a lit mausoleum, photographed as a physical tabletop build."},
  {number:11,col:1,row:3,direction:"Ruins & Sacred Spaces",title:"The Abbey Above the Tide",description:"A large ruined abbey built across a rocky coastal base, combining architecture, miniature figures, water effects and integrated amber lighting."},
  {number:12,col:2,row:3,direction:"Ruins & Sacred Spaces",title:"The Cloister Above the Tide",description:"A quieter monastic complex on the cliff edge, with cloisters, courtyards and sea-weathered stone contained within a finished display base."}
];

export default function PortfolioGrid(){
  const [active,setActive]=useState("All");
  const filtered=active==="All"?projects:projects.filter((project)=>project.tags.includes(active)||project.category===active);
  const showHistorical=active==="Historical";
  const showSpooky=active==="Spooky / Dark";

  return <>
    <div className="filter-row" role="group" aria-label="Filter portfolio">
      {categories.map((category)=><button key={category} className={active===category?"filter-button active":"filter-button"} onClick={()=>setActive(category)} type="button">{category}</button>)}
    </div>

    {showHistorical&&<section className="historical-gallery" aria-label="Historical miniature worlds">
      <div className="historical-gallery-head">
        <div>
          <p className="kicker">Historical worlds</p>
          <h2>History, rebuilt by hand.</h2>
        </div>
        <p>Each scene is built piece by piece — architecture, surfaces, figures, vegetation, lighting and weathering are chosen to make the period feel lived-in rather than decorative. From intimate courtyards and workshops to stations, fortresses and cathedrals, every world is shaped around believable scale, careful craft and atmosphere.</p>
      </div>
      <div className="historical-photo-grid">
        {historicalStudies.map(({number,col,row,title})=><figure className="historical-photo" key={number}>
          <div className="historical-sprite-crop" role="img" aria-label={title} style={{backgroundImage:`url("${historicalSprite}")`,backgroundSize:"500% 200%",backgroundPosition:`${col*25}% ${row*100}%`}}/>
          <figcaption><span>{String(number).padStart(2,"0")}</span><span>{title}</span></figcaption>
        </figure>)}
      </div>
    </section>}

    {showSpooky&&<section className="spooky-gallery" aria-label="Spooky and dark miniature worlds">
      <div className="spooky-gallery-head">
        <div>
          <p className="kicker">Spooky / Dark</p>
          <h2>Dark worlds, built in miniature.</h2>
        </div>
        <p>Gothic rooms, weathered ruins, candlelit interiors and rain-dark streets are built around mood, scale and material detail. Stone is chipped and aged by hand, vegetation is layered into architecture, figures anchor the scene, and practical miniature lighting gives each world depth without relying on gore or spectacle.</p>
      </div>
      <div className="spooky-direction-row" aria-label="Spooky portfolio directions">
        <span>Gothic Interiors</span><span>Ruins & Sacred Spaces</span><span>Dark Streets & Woodland</span>
      </div>
      <div className="spooky-photo-grid">
        {spookyStudies.map(({number,col,row,direction,title,description})=><figure className="spooky-photo" key={number}>
          <div className="spooky-sprite-crop" role="img" aria-label={title} style={{backgroundImage:'url("/portfolio/spooky/spooky-sprite.webp")',backgroundSize:"300% 400%",backgroundPosition:`${col*50}% ${row*(100/3)}%`}}/>
          <figcaption><span>{String(number).padStart(2,"0")}</span><span>{direction}</span></figcaption>
          <div className="spooky-photo-copy"><h3>{title}</h3><p>{description}</p></div>
        </figure>)}
      </div>
    </section>}

    {!showHistorical&&!showSpooky&&<div className="portfolio-grid">
      {filtered.map((project,index)=><article className="portfolio-card" key={project.slug}>
        <Link className="portfolio-image" href={"/portfolio/"+project.slug}>
          <Image src={project.image} alt={project.title} fill sizes="(max-width: 800px) 100vw, 50vw" priority={index<2}/>
          <span className="image-shade"/><span className="card-index">{String(index+1).padStart(2,"0")}</span>
        </Link>
        <div className="portfolio-card-copy">
          <p className="kicker">{project.eyebrow}</p>
          <h2><Link href={"/portfolio/"+project.slug}>{project.title}</Link></h2>
          <p>{project.description}</p>
          <div className="card-meta"><span>{project.scale}</span><Link href={"/portfolio/"+project.slug}>View project <b aria-hidden="true">↗</b></Link></div>
        </div>
      </article>)}
    </div>}
  </>;
}
