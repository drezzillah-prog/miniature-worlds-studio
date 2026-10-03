"use client";

import {useState} from "react";
import Image from "next/image";

const studies=[
  {n:1,t:"The Mill House Stream",tags:["Village Life","Waterside Rural"],d:"A self-contained stone cottage and watermill world built around a stream, footbridge, garden planting and warm interior light, with the finished base clearly framing the scene as a physical miniature."},
  {n:2,t:"Hill Village & Windmill",tags:["Farms & Working Land","Mountain & Alpine"],d:"A terraced hillside settlement with a windmill, stone cottages, paths and productive garden plots, balancing rural architecture with the working landscape around it."},
  {n:3,t:"Mill Lane Village",tags:["Village Life","Waterside Rural"],d:"A compact village lane gathered around a watermill and stone bridge, with figures, planting and glowing windows making the scene feel inhabited without extending beyond its display base."},
  {n:4,t:"Rain on the Village Lane",tags:["Village Life","Woodland & Seasonal"],d:"An English-style village after rain, where wet stone, warm lamps, garden walls and tiny pedestrians create atmosphere while the handcrafted world keeps a visible physical edge."},
  {n:5,t:"Nordic Shore at Dusk",tags:["Waterside Rural","Woodland & Seasonal"],d:"A northern lakeside settlement of timber houses, jetty and dark water, using reflections and restrained lighting to bring a quiet rural shoreline to life."},
  {n:6,t:"Snowbound Alpine Hamlet",tags:["Mountain & Alpine","Woodland & Seasonal"],d:"A winter mountain hamlet with deep snow, timber-and-stone chalets, a chapel and frozen stream, designed as a complete seasonal world rather than an endless alpine backdrop."},
  {n:7,t:"Vineyard at Last Light",tags:["Farms & Working Land","Village Life"],d:"A Mediterranean vineyard estate of terraced vines, stone houses and a sheltered courtyard, with the working rows of vines becoming part of the architecture of the miniature."},
  {n:8,t:"The Farm After Rain",tags:["Farms & Working Land","Woodland & Seasonal"],d:"A muddy working farm with barn, cottage, livestock and waterlogged tracks, focused on believable use, wear and weather rather than an idealised rural postcard."},
  {n:9,t:"Fishermen’s Cove",tags:["Waterside Rural","Village Life"],d:"A rocky fishing hamlet with timber jetties, boats, nets and small cottages, where textured water and weathered structures create a finite coastal scene."},
  {n:10,t:"Cabin Above the Stream",tags:["Woodland & Seasonal","Mountain & Alpine"],d:"A secluded woodland cabin beside a fast stream and footbridge, using rock, timber, moss and layered vegetation to make the miniature feel naturally embedded in its terrain."},
  {n:11,t:"Autumn Market Day",tags:["Village Life","Woodland & Seasonal"],d:"A village square during harvest season, with market stalls, church, pumpkins and autumn foliage arranged as a complete community scene inside a clearly finished display base."},
  {n:12,t:"Monastery Garden",tags:["Village Life","Mountain & Alpine"],d:"A rural monastery complex of stone arcades, cultivated gardens and old trees, pairing sacred architecture with the practical rhythms of a self-contained country settlement."},
  {n:13,t:"The Village Pond",tags:["Village Life","Waterside Rural"],d:"A spring village centred on a pond, stone bridge and blossoming trees, with market activity and cottages grouped around the water as a compact miniature composition."},
  {n:14,t:"Apple Harvest Farm",tags:["Farms & Working Land","Woodland & Seasonal"],d:"An orchard and cider-farm scene at harvest, with crates, barn activity, muddy tracks and autumn colour showing rural work as part of the story of the landscape."},
  {n:15,t:"Mountain Chapel & Sheepfold",tags:["Mountain & Alpine","Farms & Working Land"],d:"A highland hamlet with chapel, sheepfold, stone paths and a small waterfall, using elevation and terracing to create depth within a visibly bounded model."},
  {n:16,t:"Canal Lock Cottage",tags:["Waterside Rural","Village Life"],d:"A lock-side cottage world with narrowboat, stone walls and working gates, turning the engineering of a rural canal into part of the miniature’s visual narrative."},
  {n:17,t:"The Mediterranean Bakery",tags:["Village Life","Farms & Working Land"],d:"A tiny bakery courtyard surrounded by stone houses, herbs, olive planting and outdoor tables, built as an intimate rural-commercial corner rather than a full town street."},
  {n:18,t:"Forest Sawmill",tags:["Farms & Working Land","Woodland & Seasonal"],d:"A timber-working scene with water-powered machinery, stacked logs, bridge and forest cabin, combining rural industry with the stream and woodland that support it."},
  {n:19,t:"Spring Village Green",tags:["Village Life","Woodland & Seasonal"],d:"A flowering village green with stone cottages, market stalls, church and pond, composed to feel lively and seasonal while remaining unmistakably a handcrafted tabletop world."},
  {n:20,t:"Lighthouse Harbour",tags:["Waterside Rural","Village Life"],d:"A small working harbour beneath a lighthouse, with fishing boat, stone quay and weathered cottages set against a finite field of textured water."},
  {n:21,t:"Mediterranean Hill Village",tags:["Mountain & Alpine","Village Life"],d:"A stepped stone village with cypress, olive trees, terraces and chapel architecture, using height and narrow paths to suggest a larger settlement within a contained base."}
];

const directions=["All","Village Life","Farms & Working Land","Woodland & Seasonal","Mountain & Alpine","Waterside Rural"];

export default function CountrysideGallery(){
  const [active,setActive]=useState("All");
  const visible=active==="All"?studies:studies.filter((study)=>study.tags.includes(active));
  return <section className="study-gallery" aria-label="Countryside miniature worlds">
    <div className="study-gallery-head">
      <div><p className="kicker">Countryside</p><h2>Rural worlds with real edges.</h2></div>
      <p>Villages, farms, woodland, mountain settlements and waterside life are presented as physical miniature objects. Every scene is visibly contained by its finished base, so terrain and architecture end naturally instead of dissolving into a painted or infinite background.</p>
    </div>
    <div className="study-direction-row" role="group" aria-label="Filter countryside worlds">
      {directions.map((direction)=><button key={direction} type="button" className={active===direction?"study-direction active":"study-direction"} aria-pressed={active===direction} onClick={()=>setActive(direction)}>{direction}</button>)}
    </div>
    <div className="study-photo-grid">
      {visible.map((study)=><figure className="study-photo" key={study.n}>
        <div className="study-image" style={{position:"relative",overflow:"hidden"}}>
          <Image src={`/portfolio/countryside/countryside-${String(study.n).padStart(2,"0")}.jpg`} alt={study.t} fill sizes="(max-width: 720px) 100vw, 50vw" style={{objectFit:"cover"}}/>
        </div>
        <figcaption><span>{String(study.n).padStart(2,"0")}</span><span>{study.tags[0]}</span></figcaption>
        <div className="study-photo-copy"><h3>{study.t}</h3><p>{study.d}</p></div>
      </figure>)}
    </div>
  </section>;
}
