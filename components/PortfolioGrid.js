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

export default function PortfolioGrid(){
  const [active,setActive]=useState("All");
  const filtered=active==="All"?projects:projects.filter((project)=>project.tags.includes(active)||project.category===active);
  const showHistorical=active==="Historical";

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
          <div
            className="historical-sprite-crop"
            role="img"
            aria-label={title}
            style={{
              backgroundImage:`url("${historicalSprite}")`,
              backgroundSize:"500% 200%",
              backgroundPosition:`${col*25}% ${row*100}%`
            }}
          />
          <figcaption><span>{String(number).padStart(2,"0")}</span><span>{title}</span></figcaption>
        </figure>)}
      </div>
    </section>}

    {!showHistorical&&<div className="portfolio-grid">
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
