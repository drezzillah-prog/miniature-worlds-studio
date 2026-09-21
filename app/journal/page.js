import Link from "next/link";

export const metadata={title:"Studio Notes"};
const notes=[
["Behind the scenes","How a miniature world moves from reference board to structure, surface, light, and final weathering."],
["Materials","Why the right material is not always the most realistic one — and how scale changes what the eye believes."],
["Miniature storytelling","Building narrative from evidence: doors left open, objects moved, worn paths, unfinished tasks, and light."],
["Historical inspiration","Using research to make a scene feel inhabited without turning the piece into an illustrated textbook."],
["Worldbuilding notes","How fictional places become coherent through recurring materials, architecture, rules, and traces of daily life."],
["Museum thinking","Designing miniature work for public viewing: durability, access, legibility, distance, interpretation, and installation."]
];
export default function JournalPage(){return <section className="journal-page page-shell"><header className="page-hero compact"><p className="kicker">Studio Notes</p><h1>On building small places seriously.</h1><p className="lede">A future journal for process, materials, historical research, exhibition thinking, and the craft of miniature storytelling.</p></header><div className="journal-grid">{notes.map(([title,copy],index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><p className="kicker">Future note</p><h2>{title}</h2><p>{copy}</p><Link href="/contact" aria-label={"Ask the studio about "+title}>Coming to the journal <b>↗</b></Link></article>)}</div></section>;}
