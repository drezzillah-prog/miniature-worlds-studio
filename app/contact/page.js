import InquiryForm from "@/components/InquiryForm";

export const metadata={title:"Project Inquiry"};

export default function ContactPage(){
  return <>
    <section className="page-hero page-shell"><p className="kicker">Project inquiry</p><h1>Tell the studio what you want to enter in miniature.</h1><p className="lede">You do not need a finished specification. A place, a memory, an era, a feeling, a reference image, or a single strange idea is enough to begin shaping the brief.</p></section>
    <section className="contact-layout page-shell">
      <aside><p className="kicker">Useful to include</p><h2>The clearer the intention, the better the first proposal.</h2><p>Share the approximate footprint or display space if you know it, where the piece will live, whether accuracy or atmosphere matters most, a deadline if one exists, and a realistic budget range.</p><div className="contact-note"><strong>For institutions</strong><p>Include exhibition dates, audience, expected viewing distance, installation constraints, interpretation needs, procurement timing, and any durability or access requirements.</p></div></aside>
      <InquiryForm/>
    </section>
  </>;
}
