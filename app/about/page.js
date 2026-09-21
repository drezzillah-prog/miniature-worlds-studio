import Image from "next/image";
import Link from "next/link";

export const metadata={title:"About"};

export default function AboutPage(){
  return <>
    <section className="page-hero page-shell"><p className="kicker">About the studio</p><h1>A miniature world is not a reduced object. It is a concentrated place.</h1><p className="lede">The studio exists to make small environments feel emotionally, historically, and physically believable — the kind of work that rewards the first glance and the fiftieth.</p></section>
    <section className="editorial-grid page-shell">
      <div className="editorial-image tall"><Image src="/magnific-dark-tavern-fantasy-mini-4.png" alt="Warm atmospheric miniature environment" fill sizes="(max-width: 900px) 100vw, 48vw"/></div>
      <div className="editorial-copy"><p className="kicker">Vision</p><h2>Build the feeling first.</h2><p>A convincing miniature does not come from adding the most detail. It comes from choosing the right detail: the one that explains how a room is used, who has passed through a street, how old a wall feels, what weather has done to timber, or why a light is still on.</p><p>The studio works across personal, historical, poetic, dark, educational, architectural, and immersive commissions. Some worlds may be grounded in research. Others may be entirely invented. Both are treated with the same seriousness of composition and craft.</p></div>
    </section>
    <section className="values-section page-shell">
      <div><p className="kicker">01 · Atmosphere</p><h3>Light is part of the architecture.</h3><p>Warmth, darkness, shadow, weather, and viewing angle can do as much storytelling as the objects themselves.</p></div>
      <div><p className="kicker">02 · Detail</p><h3>Precision without sterility.</h3><p>The work should be exact enough to persuade, but never so clean that it stops feeling inhabited.</p></div>
      <div><p className="kicker">03 · Story</p><h3>Evidence instead of exposition.</h3><p>A world should suggest what happened before the viewer arrived and what might happen after they leave.</p></div>
      <div><p className="kicker">04 · Context</p><h3>History with restraint.</h3><p>Historically inspired scenes aim for thoughtful context and material specificity. War scenes, where appropriate, are atmospheric and non-gory rather than sensationalist.</p></div>
    </section>
    <section className="dark-editorial"><div className="page-shell dark-editorial-grid"><div><p className="kicker light">What can become a world?</p><h2>A remembered kitchen. A lost house. A street in 1890. A strange hotel room. A whole district that never existed.</h2></div><div><p>The commission begins by deciding what the piece needs to preserve: likeness, mood, history, narrative, symbolism, or a combination of them. Scale comes after intent.</p><Link className="button brass" href="/contact">Discuss a commission</Link></div></div></section>
  </>;
}
