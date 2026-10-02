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
const cityDirections=["All","Streets & Squares","Waterfronts & Canals","Historic Cities","Night & Rain"];\n
const countrysideStudies=[
  {number:1,image:"/portfolio/countryside/countryside-01.jpg",title:"The Mill House Stream",tags:["Village Life","Waterside Rural"],description:"A self-contained stone cottage and watermill world built around a working stream, footbridge, garden planting and warm interior light, with the finished base clearly framing the scene as a physical miniature."},
  {number:2,image:"/portfolio/countryside/countryside-02.jpg",title:"Hill Village & Windmill",tags:["Farms & Working Land","Mountain & Alpine"],description:"A terraced hillside settlement with a windmill, stone cottages, paths and productive garden plots, balancing rural architecture with the working landscape around it."},
  {number:3,image:"/portfolio/countryside/countryside-03.jpg",title:"Mill Lane Village",tags:["Village Life","Waterside Rural"],description:"A compact village lane gathered around a watermill and stone bridge, with figures, planting and glowing windows making the scene feel inhabited without extending beyond its display base."},
  {number:4,image:"/portfolio/countryside/countryside-04.jpg",title:"Rain on the Village Lane",tags:["Village Life","Woodland & Seasonal"],description:"An English-style village after rain, where wet stone, warm lamps, garden walls and tiny pedestrians create atmosphere while the edges of the handcrafted world remain visible."},
  {number:5,image:"/portfolio/countryside/countryside-05.jpg",title:"Nordic Shore at Dusk",tags:["Waterside Rural","Woodland & Seasonal"],description:"A northern lakeside settlement of timber houses, jetty and dark water, using reflections and restrained lighting to bring a quiet rural shoreline to life."},
  {number:6,image:"/portfolio/countryside/countryside-06.jpg",title:"Snowbound Alpine Hamlet",tags:["Mountain & Alpine","Woodland & Seasonal"],description:"A winter mountain hamlet with deep snow, timber-and-stone chalets, a chapel and frozen stream, designed as a complete seasonal world rather than an endless alpine backdrop."},
  {number:7,image:"/portfolio/countryside/countryside-07.jpg",title:"Vineyard at Last Light",tags:["Farms & Working Land","Village Life"],description:"A Mediterranean vineyard estate of terraced vines, stone houses and a sheltered courtyard, with the working rows of vines becoming part of the architecture of the miniature."},
  {number:8,image:"/portfolio/countryside/countryside-08.jpg",title:"The Farm After Rain",tags:["Farms & Working Land","Woodland & Seasonal"],description:"A muddy working farm with barn, cottage, livestock and waterlogged tracks, focused on believable use, wear and weather rather than an idealised rural postcard."},
  {number:9,image:"/portfolio/countryside/countryside-09.jpg",title:"Fishermen’s Cove",tags:["Waterside Rural","Village Life"],description:"A rocky fishing hamlet with timber jetties, boats, nets and small cottages, where textured water and weathered structures create a finite coastal scene."},
  {number:10,image:"/portfolio/countryside/countryside-10.jpg",title:"Cabin Above the Stream",tags:["Woodland & Seasonal","Mountain & Alpine"],description:"A secluded woodland cabin beside a fast stream and footbridge, using rock, timber, moss and layered vegetation to make the miniature feel naturally embedded in its terrain."},
  {number:11,image:"/portfolio/countryside/countryside-11.jpg",title:"Autumn Market Day",tags:["Village Life","Woodland & Seasonal"],description:"A village square during harvest season, with market stalls, church, pumpkins and autumn foliage arranged as a complete community scene inside a clearly finished display base."},
  {number:12,image:"/portfolio/countryside/countryside-12.jpg",title:"Monastery Garden",tags:["Village Life","Mountain & Alpine"],description:"A rural monastery complex of stone arcades, cultivated gardens and old trees, pairing sacred architecture with the practical rhythms of a self-contained country settlement."},
  {number:13,image:"/portfolio/countryside/countryside-13.jpg",title:"The Village Pond",tags:["Village Life","Waterside Rural"],description:"A spring village centred on a pond, stone bridge and blossoming trees, with market activity and cottages grouped around the water as a compact miniature composition."},
  {number:14,image:"/portfolio/countryside/countryside-14.jpg",title:"Apple Harvest Farm",tags:["Farms & Working Land","Woodland & Seasonal"],description:"An orchard and cider-farm scene at harvest, with crates, barn activity, muddy tracks and autumn colour showing rural work as part of the story of the landscape."},
  {number:15,image:"/portfolio/countryside/countryside-15.jpg",title:"Mountain Chapel & Sheepfold",tags:["Mountain & Alpine","Farms & Working Land"],description:"A highland hamlet with chapel, sheepfold, stone paths and a small waterfall, using elevation and terracing to create depth within a visibly bounded model."},
  {number:16,image:"/portfolio/countryside/countryside-16.jpg",title:"Canal Lock Cottage",tags:["Waterside Rural","Village Life"],description:"A lock-side cottage world with narrowboat, stone walls and working gates, turning the engineering of a rural canal into part of the miniature’s visual narrative."},
  {number:17,image:"/portfolio/countryside/countryside-17.jpg",title:"The Mediterranean Bakery",tags:["Village Life","Farms & Working Land"],description:"A tiny bakery courtyard surrounded by stone houses, herbs, olive planting and outdoor tables, built as an intimate rural-commercial corner rather than a full town street."},
  {number:18,image:"/portfolio/countryside/countryside-18.jpg",title:"Forest Sawmill",tags:["Farms & Working Land","Woodland & Seasonal"],description:"A timber-working scene with water-powered machinery, stacked logs, bridge and forest cabin, combining rural industry with the stream and woodland that support it."},
  {number:19,image:"/portfolio/countryside/countryside-19.jpg",title:"Spring Village Green",tags:["Village Life","Woodland & Seasonal"],description:"A flowering village green with stone cottages, market stalls, church and pond, composed to feel lively and seasonal while remaining unmistakably a handcrafted tabletop world."},
  {number:20,image:"/portfolio/countryside/countryside-20.jpg",title:"Lighthouse Harbour",tags:["Waterside Rural","Village Life"],description:"A small working harbour beneath a lighthouse, with fishing boat, stone quay and weathered cottages set against a finite field of textured water."},
  {number:21,image:"/portfolio/countryside/countryside-21.jpg",title:"Mediterranean Hill Village",tags:["Mountain & Alpine","Village Life"],description:"A stepped stone village with cypress, olive trees, terraces and chapel architecture, using height and narrow paths to suggest a larger settlement within a contained base."}
];
const countrysideDirections=["All","Village Life","Farms & Working Land","Woodland & Seasonal","Mountain & Alpine","Waterside Rural"];


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
  const [cityDirection,setCityDirection]=useState("All");\n  const [countrysideDirection,setCountrysideDirection]=useState("All");

  const filtered=active==="All"?projects:projects.filter((project)=>project.tags.includes(active)||project.category===active);
  const showHistorical=active==="Historical";
  const showSpooky=active==="Spooky / Dark";
  const showCities=active==="Cities";\n  const showCountryside=active==="Countryside";

  const chooseCategory=(category)=>{
    setActive(category);
    setHistoryDirection("All");
    setSpookyDirection("All");
    setCityDirection("All");\n    setCountrysideDirection("All");
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


    {showCountryside&&<section className="study-gallery" aria-label="Countryside miniature worlds">
      <div className="study-gallery-head">
        <div><p className="kicker">Countryside</p><h2>Rural worlds with real edges.</h2></div>
        <p>Villages, farms, woodland, mountain settlements and waterside life are treated as physical miniature objects. Every scene is visibly contained by its finished base, so terrain and architecture end naturally instead of dissolving into a painted or infinite background.</p>
      </div>
      <div className="study-direction-row" role="group" aria-label="Filter countryside worlds">
        {countrysideDirections.map((direction)=><button key={direction} type="button" className={countrysideDirection===direction?"study-direction active":"study-direction"} aria-pressed={countrysideDirection===direction} onClick={()=>setCountrysideDirection(direction)}>{direction}</button>)}
      </div>
      <div className="study-photo-grid">
        {countrysideStudies.filter((study)=>matches(study,countrysideDirection)).map(({number,image,title,tags,description})=><figure className="study-photo" key={number}>
          <div className="study-image study-image-file"><Image src={image} alt={title} fill sizes="(max-width: 720px) 100vw, 50vw"/></div>
          <figcaption><span>{String(number).padStart(2,"0")}</span><span>{tags[0]}</span></figcaption>
          <div className="study-photo-copy"><h3>{title}</h3><p>{description}</p></div>
        </figure>)}
      </div>
    </section>}

    {!showHistorical&&!showSpooky&&!showCities&&!showCountryside&&<div className="portfolio-grid">
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
