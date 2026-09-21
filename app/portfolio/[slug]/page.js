import Image from "next/image";
import Link from "next/link";
import {notFound} from "next/navigation";
import {getProject,projects} from "@/lib/projects";

export function generateStaticParams(){return projects.map((project)=>({slug:project.slug}));}
export async function generateMetadata({params}){const {slug}=await params;const project=getProject(slug);return project?{title:project.title,description:project.description}:{};}

export default async function ProjectDetailPage({params}){
  const {slug}=await params;const project=getProject(slug);if(!project)notFound();
  return <>
    <section className="project-hero"><Image src={project.image} alt={project.title} fill priority sizes="100vw"/><div className="project-hero-overlay"/><div className="page-shell project-hero-copy"><p className="kicker light">{project.eyebrow}</p><h1>{project.title}</h1><p>{project.description}</p></div></section>
    <section className="project-story page-shell"><div><p className="kicker">Concept / story</p><h2>The world behind the object.</h2></div><div><p className="project-story-copy">{project.story}</p><dl className="project-specs"><div><dt>Category</dt><dd>{project.category}</dd></div><div><dt>Approximate scale</dt><dd>{project.scale}</dd></div><div><dt>Materials / techniques</dt><dd>{project.materials}</dd></div><div><dt>Timeline</dt><dd>{project.timeline}</dd></div><div><dt>Project type</dt><dd>{project.clientType}</dd></div></dl></div></section>
    <section className="project-gallery page-shell"><div className="gallery-main"><Image src={project.image} alt={project.title+" full scene"} fill sizes="(max-width: 900px) 100vw, 66vw"/></div><div className="gallery-stack"><div><Image src="/magnific-dark-tavern-fantasy-mini-2.png" alt="Material and lighting reference study" fill sizes="(max-width: 900px) 100vw, 32vw"/></div><div><Image src="/magnific-dark-tavern-fantasy-mini-4.png" alt="Atmosphere and texture reference study" fill sizes="(max-width: 900px) 100vw, 32vw"/></div></div></section>
    <section className="similar-cta page-shell"><p className="kicker">Request something related</p><h2>Your commission can borrow the mood without copying the world.</h2><p>Every project is built from a new brief, so a request for “something similar” means preserving qualities — darkness, density, era, warmth, scale — rather than duplicating a previous piece.</p><div><Link className="button brass" href="/contact">Request a related world</Link><Link className="button ghost" href="/portfolio">Back to portfolio</Link></div></section>
  </>;
}
