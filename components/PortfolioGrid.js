"use client";

import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {categories,projects} from "@/lib/projects";
import {historicalSprite} from "@/lib/historicalSprite";

const historicalStudies=Array.from({length:10},(_,index)=>({
  number:index+1,
  col:index%5,
  row:Math.floor(index/5)
}));

export default function PortfolioGrid(){
  const [active,setActive]=useState("All");
  const filtered=active==="All"?projects:projects.filter((project)=>project.tags.includes(active)||project.category===active);
  const showHistorical=active==="Historical";

  return <>
    <div className="filter-row" role="group" aria-label="Filter portfolio">
      {categories.map((category)=><button key={category} className={active===category?"filter-button active":"filter-button"} onClick={()=>setActive(category)} type="button">{category}</button>)}
    </div>

    {showHistorical&&<section className="historical-gallery" aria-label="Historical miniature studies">
      <div className="historical-gallery-head">
        <div>
          <p className="kicker">Historical worlds</p>
          <h2>Across eras, cultures and scales.</h2>
        </div>
        <p>Photographic concept studies showing the studio direction: handmade miniature worlds photographed from the maker’s own point of view, with the working table and materials allowed to remain part of the image.</p>
      </div>
      <div className="historical-photo-grid">
        {historicalStudies.map(({number,col,row})=><figure className="historical-photo" key={number}>
          <div
            className="historical-sprite-crop"
            role="img"
            aria-label={"Historical miniature study "+String(number).padStart(2,"0")}
            style={{
              backgroundImage:`url("${historicalSprite}")`,
              backgroundSize:"500% 200%",
              backgroundPosition:`${col*25}% ${row*100}%`
            }}
          />
          <figcaption><span>{String(number).padStart(2,"0")}</span><span>Historical study</span></figcaption>
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
