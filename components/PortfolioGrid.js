"use client";

import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {categories,projects} from "@/lib/projects";

const historicalStudies=[
  {number:1,image:"/portfolio/history/history-group-1.jpg",columns:3,col:0,title:"Roman bakery courtyard",tags:["Ancient & Classical","Everyday Life"],description:"A compact Roman courtyard centred on a working bakery, with masonry, vessels, bread-making details and figures arranged as a lived working space rather than a museum tableau."},
  {number:2,image:"/portfolio/history/history-group-1.jpg",columns:3,col:1,title:"Viking longhall gathering",tags:["Medieval Worlds","Everyday Life"],description:"A timber longhall built around warmth, gathering and domestic activity, with small figures and furnishings giving the architecture a believable human scale."},
  {number:3,image:"/portfolio/history/history-group-1.jpg",columns:3,col:2,title:"Ottoman bazaar at dusk",tags:["Early Modern","Everyday Life"],description:"A layered market scene of arches, stalls, textiles and warm evening light, composed to suggest movement and exchange without turning the period into spectacle."},
  {number:4,image:"/portfolio/history/history-group-2.jpg",columns:2,col:0,title:"Edo village canal",tags:["Early Modern","Everyday Life"],description:"A waterside settlement with timber façades, bridge details and miniature figures, using the canal as both architecture and narrative space."},
  {number:5,image:"/portfolio/history/history-group-2.jpg",columns:2,col:1,title:"Medieval monastery cloister",tags:["Medieval Worlds","Sacred & Monumental"],description:"A quiet cloister study where repeated stone arches, planting and controlled weathering carry the sense of age, rhythm and use."},
  {number:6,image:"/portfolio/history/history-group-3.jpg",columns:3,col:0,title:"Renaissance courtyard",tags:["Early Modern","Everyday Life"],description:"An urban courtyard built around proportion, plaster, masonry and small traces of occupation — architecture first, detail added only where it supports the scene."},
  {number:7,image:"/portfolio/history/history-group-3.jpg",columns:3,col:1,title:"Industrial harbour",tags:["Industrial & Victorian","Everyday Life"],description:"A working harbour environment of brick, metal, cargo and human activity, with layered ageing and industrial atmosphere shaping the scene."},
  {number:8,image:"/portfolio/history/history-group-3.jpg",columns:3,col:2,title:"Victorian railway station",tags:["Industrial & Victorian"],description:"A station world designed around platforms, ironwork, passengers and warm practical light, with the possibility of integrated steam and train effects in a full commission."},
  {number:9,image:"/portfolio/history/history-group-4.jpg",columns:2,col:0,title:"Hilltop fortress",tags:["Medieval Worlds","Sacred & Monumental"],description:"A larger architectural build in which walls, towers, terrain and approach routes are read as one complete defensive landscape rather than isolated façades."},
  {number:10,image:"/portfolio/history/history-group-4.jpg",columns:2,col:1,title:"Gothic cathedral square",tags:["Medieval Worlds","Sacred & Monumental","Everyday Life"],description:"A monumental square balancing vertical architecture with tiny civic life below, so the scale of the cathedral is felt through the people and spaces around it."}
];

const historyDirections=["All","Ancient & Classical","Medieval Worlds","Early Modern","Industrial & Victorian","Sacred & Monumental","Everyday Life"];

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
const spookyDirections=["All","Gothic Interiors","Ruins & Sacred Spaces","Dark Streets & Woodland"];

const cityStudies=[
  {number:1,image:"/portfolio/cities/cities-group-1.jpg",columns:3,col:0,title:"Paris After Rain",tags:["Streets & Squares","Night & Rain"],description:"A rain-dark Parisian street where wet paving, warm windows and tiny figures turn a compact block into a complete evening atmosphere."},
  {number:2,image:"/portfolio/cities/cities-group-1.jpg",columns:3,col:1,title:"Alsatian Canal Evening",tags:["Waterfronts & Canals","Historic Cities"],description:"A canal-side miniature built around timber façades, reflections and close-set urban detail, with the water carrying light through the scene."},
  {number:3,image:"/portfolio/cities/cities-group-1.jpg",columns:3,col:2,title:"Venice at Dusk",tags:["Waterfronts & Canals","Historic Cities"],description:"A Venetian waterfront of narrow architecture, balconies, stone edges and moving water, composed so the city feels larger than its finished base."},
  {number:4,image:"/portfolio/cities/cities-group-2.jpg",columns:3,col:0,title:"Piazza at Last Light",tags:["Streets & Squares","Historic Cities"],description:"An Italian square designed around façades, café-scale details and the last warm light of the day, with open space used as part of the composition."},
  {number:5,image:"/portfolio/cities/cities-group-2.jpg",columns:3,col:1,title:"Santorini Blue Hour",tags:["Waterfronts & Canals"],description:"A stepped island settlement of white architecture and blue accents, using height, shadow and the edge of the sea to create depth."},
  {number:6,image:"/portfolio/cities/cities-group-2.jpg",columns:3,col:2,title:"Old Town at Dusk",tags:["Historic Cities","Night & Rain"],description:"A dense old-town study with close roofs, narrow routes and warm windows, built as a finite urban world with a clear physical edge."},
  {number:7,image:"/portfolio/cities/cities-group-3.jpg",columns:2,col:0,title:"Japanese Alley After Rain",tags:["Streets & Squares","Night & Rain"],description:"A narrow Japanese alley where wet surfaces, signage, foliage and practical light create the feeling of recent rain without losing the handmade scale."},
  {number:8,image:"/portfolio/cities/cities-group-3.jpg",columns:2,col:1,title:"London at Dusk",tags:["Streets & Squares","Night & Rain","Historic Cities"],description:"A compact London street world with masonry, shopfronts, lamps and pedestrians, framed so the scene reads as a complete model rather than an endless city."},
  {number:9,image:"/portfolio/cities/cities-group-4.jpg",columns:2,col:0,title:"Byzantine Shore",tags:["Historic Cities","Waterfronts & Canals"],description:"A historical coastal settlement where pale stone, domes, terraces and the sea are built into one continuous miniature landscape."},
  {number:10,image:"/portfolio/cities/cities-group-4.jpg",columns:2,col:1,title:"Mediterranean Village at Sunset",tags:["Historic Cities","Waterfronts & Canals"],description:"A warm hillside village of small houses, steps and planting, shaped around the transition from architecture to landscape and sea."}
];
const cityDirections=["All","Streets & Squares","Waterfronts & Canals","Historic Cities","Night & Rain"];

function spritePosition(col,columns){
  return columns<=1 ? "0% 0%" : `${(col/(columns-1))*100}% 0%`;
}
function matches(study,active){
  return active==="All" || (study.tags||[study.direction]).includes(active);
}

export default function PortfolioGrid(){
  const [active,setActive]=useState("All");
  const [historyDirection,setHistoryDirection]=useState("All");
  const [spookyDirection,setSpookyDirection]=useState("All");
  const [cityDirection,setCityDirection]=useState("All");

  const filtered=active==="All"?projects:projects.filter((project)=>project.tags.includes(active)||project.category===active);
  const showHistorical=active==="Historical";
  const showSpooky=active==="Spooky / Dark";
  const showCities=active==="Cities";

  const chooseCategory=(category)=>{
    setActive(category);
    setHistoryDirection("All");
    setSpookyDirection("All");
    setCityDirection("All");
  };

  return <>
    <div className="filter-row" role="group" aria-label="Filter portfolio">
      {categories.map((category)=><button key={category} className={active===category?"filter-button active":"filter-button"} onClick={()=>chooseCategory(category)} type="button">{category}</button>)}
    </div>

    {showHistorical&&<section className="study-gallery" aria-label="Historical miniature worlds">
      <div className="study-gallery-head">
        <div><p className="kicker">Historical worlds</p><h2>History, rebuilt by hand.</h2></div>
        <p>Each scene is built around believable scale, material culture and atmosphere. Architecture, figures, clothing, surfaces, vegetation, lighting and weathering are selected to make a period feel inhabited rather than decorative.</p>
      </div>
      <div className="study-direction-row" role="group" aria-label="Filter historical worlds">
        {historyDirections.map((direction)=><button key={direction} type="button" className={historyDirection===direction?"study-direction active":"study-direction"} aria-pressed={historyDirection===direction} onClick={()=>setHistoryDirection(direction)}>{direction}</button>)}
      </div>
      <div className="study-photo-grid">
        {historicalStudies.filter((study)=>matches(study,historyDirection)).map(({number,image,columns,col,title,tags,description})=><figure className="study-photo" key={number}>
          <div className="study-image" role="img" aria-label={title} style={{backgroundImage:`url("${image}")`,backgroundSize:`${columns*100}% 100%`,backgroundPosition:spritePosition(col,columns)}}/>
          <figcaption><span>{String(number).padStart(2,"0")}</span><span>{tags[0]}</span></figcaption>
          <div className="study-photo-copy"><h3>{title}</h3><p>{description}</p></div>
        </figure>)}
      </div>
    </section>}

    {showSpooky&&<section className="study-gallery" aria-label="Spooky and dark miniature worlds">
      <div className="study-gallery-head">
        <div><p className="kicker">Spooky / Dark</p><h2>Dark worlds, built in miniature.</h2></div>
        <p>Gothic rooms, weathered ruins, candlelit interiors and rain-dark streets are built around mood, scale and material detail. Practical miniature lighting and layered surface work give each scene depth without relying on gore or spectacle.</p>
      </div>
      <div className="study-direction-row" role="group" aria-label="Filter Spooky / Dark worlds">
        {spookyDirections.map((direction)=><button key={direction} type="button" className={spookyDirection===direction?"study-direction active":"study-direction"} aria-pressed={spookyDirection===direction} onClick={()=>setSpookyDirection(direction)}>{direction}</button>)}
      </div>
      <div className="study-photo-grid">
        {spookyStudies.filter((study)=>matches(study,spookyDirection)).map(({number,col,row,direction,title,description})=><figure className="study-photo" key={number}>
          <div className="study-image" role="img" aria-label={title} style={{backgroundImage:`url("/portfolio/spooky/spooky-row-${row+1}.jpg")`,backgroundSize:"300% 100%",backgroundPosition:spritePosition(col,3)}}/>
          <figcaption><span>{String(number).padStart(2,"0")}</span><span>{direction}</span></figcaption>
          <div className="study-photo-copy"><h3>{title}</h3><p>{description}</p></div>
        </figure>)}
      </div>
    </section>}

    {showCities&&<section className="study-gallery" aria-label="City miniature worlds">
      <div className="study-gallery-head">
        <div><p className="kicker">Cities</p><h2>Urban worlds with a pulse.</h2></div>
        <p>City pieces are composed as complete physical worlds: streets end, waterfronts meet their bases, and buildings are framed so the eye can imagine what lies beyond without the model pretending to continue forever. Light, wet surfaces, water, signage and figures can add a second layer of life.</p>
      </div>
      <div className="study-direction-row" role="group" aria-label="Filter city worlds">
        {cityDirections.map((direction)=><button key={direction} type="button" className={cityDirection===direction?"study-direction active":"study-direction"} aria-pressed={cityDirection===direction} onClick={()=>setCityDirection(direction)}>{direction}</button>)}
      </div>
      <div className="study-photo-grid">
        {cityStudies.filter((study)=>matches(study,cityDirection)).map(({number,image,columns,col,title,tags,description})=><figure className="study-photo" key={number}>
          <div className="study-image" role="img" aria-label={title} style={{backgroundImage:`url("${image}")`,backgroundSize:`${columns*100}% 100%`,backgroundPosition:spritePosition(col,columns)}}/>
          <figcaption><span>{String(number).padStart(2,"0")}</span><span>{tags[0]}</span></figcaption>
          <div className="study-photo-copy"><h3>{title}</h3><p>{description}</p></div>
        </figure>)}
      </div>
    </section>}

    {!showHistorical&&!showSpooky&&!showCities&&<div className="portfolio-grid">
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
