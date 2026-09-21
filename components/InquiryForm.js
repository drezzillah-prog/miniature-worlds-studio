"use client";

import {useMemo,useState} from "react";

const initial={name:"",email:"",projectType:"Medium World",theme:"Historical",size:"",use:"",deadline:"",budget:"",references:""};

export default function InquiryForm(){
  const [form,setForm]=useState(initial);
  const [prepared,setPrepared]=useState(false);
  const [copied,setCopied]=useState(false);
  const summary=useMemo(()=>[
    "MINIATURE WORLDS STUDIO — PROJECT INQUIRY","",
    "Name: "+(form.name||"—"),"Email: "+(form.email||"—"),"Project type: "+form.projectType,"Theme: "+form.theme,
    "Approximate size: "+(form.size||"—"),"Intended use: "+(form.use||"—"),"Desired deadline: "+(form.deadline||"—"),"Budget range: "+(form.budget||"—"),"",
    "Reference ideas / story:",form.references||"—"
  ].join("\n"),[form]);
  function update(event){setForm((current)=>({...current,[event.target.name]:event.target.value}));setPrepared(false);setCopied(false);}
  async function copyBrief(){try{await navigator.clipboard.writeText(summary);setCopied(true);}catch{setCopied(false);}}
  return <div className="inquiry-wrap">
    <form className="inquiry-form" onSubmit={(event)=>{event.preventDefault();setPrepared(true);}}>
      <div className="form-grid">
        <label><span>Your name</span><input required name="name" value={form.name} onChange={update} autoComplete="name"/></label>
        <label><span>Email</span><input required type="email" name="email" value={form.email} onChange={update} autoComplete="email"/></label>
        <label><span>Project type</span><select name="projectType" value={form.projectType} onChange={update}><option>Tiny World</option><option>Medium World</option><option>Large World</option><option>Museum / Exhibition World</option><option>Not sure yet</option></select></label>
        <label><span>Desired theme</span><select name="theme" value={form.theme} onChange={update}><option>Historical</option><option>Spooky / Dark / Gothic</option><option>City / Urban</option><option>Countryside / Rural</option><option>Room / Interior</option><option>Museum / Institutional</option><option>Other / Mixed</option></select></label>
        <label><span>Approximate size</span><input name="size" value={form.size} onChange={update} placeholder="Footprint, scale, shelf size, or 'not sure'"/></label>
        <label><span>Intended use</span><input name="use" value={form.use} onChange={update} placeholder="Personal, collector, display, exhibition…"/></label>
        <label><span>Desired deadline</span><input name="deadline" value={form.deadline} onChange={update} placeholder="Date or flexible window"/></label>
        <label><span>Budget range</span><input name="budget" value={form.budget} onChange={update} placeholder="Your working range, or 'need guidance'"/></label>
      </div>
      <label className="full-field"><span>Reference ideas, place, memory, atmosphere, or story</span><textarea name="references" value={form.references} onChange={update} rows="7" placeholder="Tell the studio what the world should feel like, not only what it should contain."/></label>
      <div className="form-actions"><button className="button brass" type="submit">Prepare project brief</button><p>Direct email/CRM delivery can be connected once the studio inbox is chosen. This version never pretends to send data somewhere it does not.</p></div>
    </form>
    {prepared&&<section className="prepared-brief" aria-live="polite">
      <div><p className="kicker">Your brief is ready</p><h3>One clean summary for the first studio conversation.</h3></div>
      <pre>{summary}</pre><button className="button ghost" type="button" onClick={copyBrief}>{copied?"Copied":"Copy inquiry brief"}</button>
    </section>}
  </div>;
}
