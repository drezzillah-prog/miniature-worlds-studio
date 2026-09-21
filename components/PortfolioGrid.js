"use client";

import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {categories,projects} from "@/lib/projects";

export default function PortfolioGrid(){
  const [active,setActive]=useState("All");
  const filtered=active==="All"?projects:projects.filter((project)=>project.tags.includes(active)||project.category===active);
  return <>
    <div className="filter-row" role="group" aria-label="Filter portfolio">
      {categories.map((category)=><button key={category} className={active===category?"filter-button active":"filter-button"} onClick={()=>setActive(category)} type="button">{category}</button>)}
    </div>
    <div className="portfolio-grid">
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
    </div>
  </>;
}
