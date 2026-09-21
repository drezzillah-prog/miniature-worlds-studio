import Link from "next/link";
export const metadata={title:"Commission Process"};
const steps=[
["01","Inquiry","Share the type of world, intended use, atmosphere, approximate footprint, deadline, budget range, and any reference material you already have."],
["02","Discussion & concept","The studio clarifies what the piece needs to communicate, what must be accurate, what can be invented, and which scale best supports the idea."],
["03","Proposal","You receive a defined scope with concept direction, estimated dimensions, timeline, major materials or techniques, delivery assumptions, and project quote."],
["04","Staged payment","Custom work is paid in agreed stages. Production begins only after the first required stage is received."],
["05","Production","Architecture, terrain, interiors, figures, props, paint, lighting, weathering, and assembly are developed according to the approved scope."],
["06","Progress updates","Milestone images or notes are shared at appropriate build stages. Updates are for visibility and agreed decisions, not continuous redesign."],
["07","Final delivery","The finished world is documented, packed or crated according to scale, and prepared for collection, shipping, or installation as agreed."]
];
export default function CommissionsPage(){return <>
  <section className="page-hero page-shell"><p className="kicker">Commission process</p><h1>Commissioning a world should feel clear, even when the world itself is complicated.</h1><p className="lede">Every project is custom. The process protects the idea, the craft time, and the client by defining scope before production starts.</p></section>
  <section className="steps-section page-shell">{steps.map(([number,title,copy])=><article className="process-step" key={number}><span>{number}</span><h2>{title}</h2><p>{copy}</p></article>)}</section>
  <section className="policy-section"><div className="page-shell policy-grid"><div><p className="kicker light">Important commission terms</p><h2>Custom means committed.</h2></div><div className="policy-list"><p><strong>Custom work only.</strong> Each miniature world is made for a specific brief rather than pulled from ready-made stock.</p><p><strong>Staged payments are required.</strong> The payment schedule is defined in the proposal and follows project milestones.</p><p><strong>No cancellation once production begins.</strong> Materials, research, planning, and studio time are committed specifically to the project.</p><p><strong>Timelines vary with complexity.</strong> Research, architecture, figure count, lighting, custom mechanisms, approvals, shipping, or institutional requirements can extend the schedule.</p><p><strong>Scope changes are handled separately.</strong> Significant additions after approval may require a revised timeline and quote.</p></div></div></section>
  <section className="simple-cta page-shell"><div><p className="kicker">Ready to begin?</p><h2>Start with the story, the place, or simply the feeling.</h2></div><Link className="button brass" href="/contact">Open the inquiry form</Link></section>
</>;}
