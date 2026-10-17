import { useState } from "react"
import nexoraImg from "../assets/Nexora.png"
import nexorapro from "../assets/nexorapro.png"
import orion from "../assets/orion.png"

import lumina1 from "../assets/lumina-1.png"
import lumina2 from "../assets/lumina-2.png"
import lumina3 from "../assets/lumina-3.png"

import jhinora1 from "../assets/jhinora-1.png"
import jhinora2 from "../assets/jhinora-2.png"
import jhinora3 from "../assets/jhinora-3.png"


function LuminaGallery() {
  const images = [lumina1, lumina2, lumina3]
  const [active, setActive] = useState(0)
  return (
    <div className="w-full lg:w-[50%] xl:w-[55%] 2xl:w-[60%] flex flex-col gap-3">
      <div className="w-full aspect-[16/10] bg-black rounded-lg xl:rounded-xl overflow-hidden border border-white/10 shadow-2xl">
        <img src={images[active]} alt={`Lumina ${active+1}`} className="w-full h-full object-cover object-top" />
      </div>
      <div className="grid grid-cols-3 gap-2 xl:gap-3">
        {images.map((img, i) => (
          <button key={i} onClick={() => setActive(i)} className={`aspect-[16/10] rounded-md overflow-hidden border-2 transition-all ${active === i? "border-white scale-[1.02]" : "border-white/10 opacity-60 hover:opacity-100"}`}>
            <img src={img} alt={`thumb ${i+1}`} className="w-full h-full object-cover object-top" />
          </button>
        ))}
      </div>
      <p className="text-[10px] xl:text-[11px] text-white/30 text-center">{active + 1} / 3 • Click to switch</p>
    </div>
  )
}

function JhinoraProGallery() {
  const images = [jhinora1, jhinora2, jhinora3]
  const [active, setActive] = useState(0)
  return (
    <div className="w-full lg:w-[50%] xl:w-[55%] 2xl:w-[60%] flex flex-col gap-3">
      <div className="w-full aspect-[16/10] bg-white rounded-lg xl:rounded-xl overflow-hidden border border-black/10 shadow-2xl">
        <img src={images[active]} alt={`Jhinora Pro ${active+1}`} className="w-full h-full object-cover object-top" />
      </div>
      <div className="grid grid-cols-3 gap-2 xl:gap-3">
        {images.map((img, i) => (
          <button key={i} onClick={() => setActive(i)} className={`aspect-[16/10] rounded-md overflow-hidden border-2 transition-all ${active === i? "border-black scale-[1.02]" : "border-black/10 opacity-60 hover:opacity-100"}`}>
            <img src={img} alt={`thumb ${i+1}`} className="w-full h-full object-cover object-top" />
          </button>
        ))}
      </div>
      <p className="text-[10px] xl:text-[11px] text-black/30 text-center">{active + 1} / 3 • Click to switch</p>
    </div>
  )
}

export default function Featured(){
    return(
        <div className="w-full bg-white">

            {/* 01i - LUMINA HAUS */}
            <div className="px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-32 py-8 xl:py-12 border-b border-black/10">
                <p className="uppercase text-[11px] xl:text-[12px] tracking-widest text-black/50 mb-4">Featured Project - 01i</p>
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6 xl:gap-16 p-5 xl:p-10 border bg-[#0e0e0e] rounded-xl xl:rounded-2xl text-white">
                    <div className="w-full lg:w-[45%]">
                        <div className="flex gap-2 mb-2">
                          <span className="text-[10px] px-2.5 py-1 rounded-full bg-white text-black font-medium">New</span>
                          <span className="text-[10px] px-2.5 py-1 rounded-full border border-white/20">2026 • Configurator</span>
                        </div>
                        <p className="text-[22px] xl:text-[32px] font-bold">Lumina Haus</p>
                        <p className="text-[13px] xl:text-[15px] text-white/60 mt-2 leading-relaxed">
                          Luxury architectural material configurator. Real-time material switching, light presets, hotspot product breakdown and Supabase auth.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-5">
                             <span className="px-3 py-1.5 rounded-full bg-white/10 text-[10px] xl:text-[11px] border border-white/10">React</span>
                             <span className="px-3 py-1.5 rounded-full bg-white/10 text-[10px] xl:text-[11px] border border-white/10">Framer Motion</span>
                             <span className="px-3 py-1.5 rounded-full bg-white/10 text-[10px] xl:text-[11px] border border-white/10">Tailwind</span>
                             <span className="px-3 py-1.5 rounded-full bg-white/10 text-[10px] xl:text-[11px] border border-white/10">Supabase</span>
                        </div>
                        <div className="mt-6 flex gap-3">
                          <a className="text-[12px] xl:text-[13px] px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition" href="https://lum-bay.vercel.app/" target="_blank">Live Demo ➤</a>
                          <a className="text-[12px] xl:text-[13px] px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition" href="https://lum-bay.vercel.app/" target="_blank">Visit Site</a>
                        </div>
                    </div>
                    <LuminaGallery />
                </div>
            </div>

            {/* 01ii - JHINORA PRO - SAME AS LUMINA */}
            <div className="px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-32 py-8 xl:py-12 border-b border-black/10">
                <p className="uppercase text-[11px] xl:text-[12px] tracking-widest text-black/50 mb-4">Featured Project - 01ii</p>
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6 xl:gap-16 p-5 xl:p-10 border bg-[#fefefe] rounded-xl xl:rounded-2xl text-black">
                    <div className="w-full lg:w-[45%]">
                        <div className="flex gap-2 mb-2">
                          <span className="text-[10px] px-2.5 py-1 rounded-full bg-black text-white font-medium">Flagship</span>
                          <span className="text-[10px] px-2.5 py-1 rounded-full border border-black/15">2026 • Studio Website</span>
                        </div>
                        <p className="text-[22px] xl:text-[32px] font-bold">Jhinora Pro</p>
                        <p className="text-[13px] xl:text-[15px] text-black/60 mt-2 leading-relaxed">
                          High-fashion studio portfolio for Jhinora Studios. Editorial storytelling, sticky project reveals, fullscreen manifesto and immersive bottom contact.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-5">
                             <span className="px-3 py-1.5 rounded-full bg-black text-white text-[10px] xl:text-[11px] border border-black">React</span>
                             <span className="px-3 py-1.5 rounded-full bg-white text-[10px] xl:text-[11px] border border-black">Framer Motion</span>
                             <span className="px-3 py-1.5 rounded-full bg-white text-[10px] xl:text-[11px] border border-black">Tailwind</span>
                             <span className="px-3 py-1.5 rounded-full bg-white text-[10px] xl:text-[11px] border border-black">Lenis Scroll</span>
                        </div>
                        <div className="mt-6 flex gap-3">
                          <a className="text-[12px] xl:text-[13px] px-4 py-2 rounded-full bg-black text-white font-medium hover:bg-zinc-800 transition" href="https://jhin-chi.vercel.app" target="_blank">Live Demo ➤</a>
                          <a className="text-[12px] xl:text-[13px] px-4 py-2 rounded-full border border-black/15 hover:bg-black/5 transition" href="https://jhin-chi.vercel.app" target="_blank">Visit Site</a>
                        </div>
                    </div>
                    <JhinoraProGallery />
                </div>
            </div>

             {/* 02 - NEXORA PRO */}
            <div className="px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-32 py-8 xl:py-12 border-b border-black/10">
                <p className="uppercase text-[11px] xl:text-[12px] tracking-widest text-black/50 mb-4">Featured Project - 02</p>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 xl:gap-16 p-5 xl:p-10 border bg-zinc-100 rounded-xl">
                    <div className="w-full lg:w-[45%]">
                        <p className="text-[20px] xl:text-[28px] font-bold">Nexora Pro</p>
                        <p className="text-[13px] xl:text-[15px] text-black/60 mt-2">Responsive SaaS dashboard with search, filters & CRUD</p>
                        <div className="flex flex-wrap gap-2 mt-5">
                             <span className="px-3 py-1.5 rounded-full bg-white text-[10px] border border-black">React</span>
                             <span className="px-3 py-1.5 rounded-full bg-white text-[10px] border border-black">Typescript</span>
                             <span className="px-3 py-1.5 rounded-full bg-white text-[10px] border border-black">Tailwind</span>
                             <span className="px-3 py-1.5 rounded-full bg-white text-[10px] border border-black">Rechart</span>
                        </div>
                        
                        <a className=" inline-block text-[15px] p-2 uppercase font-bold underline " href="https://nexora-pro-seven.vercel.app/">Visit Site</a>
                      
                    </div>
                    <img className="w-full lg:w-[55%] max-w-[640px] rounded-lg shadow-lg object-contain" src={nexorapro} alt="Nexora Pro" />
                </div>
            </div>

            {/* 02i - Orion */}
            <div className="px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-32 py-8 xl:py-12 border-b border-black/10">
                <p className="uppercase text-[11px] xl:text-[12px] tracking-widest text-black/50 mb-4">Featured Project - 02i</p>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 xl:gap-16 p-5 xl:p-10 border bg-rose-50 rounded-xl">
                    <div className="w-full lg:w-[45%]">
                        <p className="text-[20px] xl:text-[28px] font-bold">Orion</p>
                        <p className="text-[13px] xl:text-[15px] text-black/60 mt-2"> Immersive gaming landing experience. Staggered circular arcs, Use of icons from Lucid React, and full-screen character reveal with trailer interaction.</p>
                        <div className="text-blue-100/50 p-[5px] mt-[2px] w-20 h-9 rounded-xl md:text-[13px]  bg-black/60 border border-black/10 place-items-center relative">Pending 
                          <span className="absolute top-[-3px] right-[-7px] w-3 h-3 bg-red-500 text-[8px]  font-bold rounded-full grid place-items-center">!
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-5">
                             <span className="px-3 py-1.5 rounded-full bg-white text-[10px] border border-black">React</span>
                             <span className="px-3 py-1.5 rounded-full bg-white text-[10px] border border-black">Typescript</span>
                             <span className="px-3 py-1.5 rounded-full bg-white text-[10px] border border-black">Tailwind</span>
                            
                        </div>
                         <a className=" inline-block text-[15px] p-2 uppercase font-bold underline " href="https://orion-two-taupe.vercel.app/">Visit Site</a>
                    </div>
                    <img className="w-full lg:w-[55%] max-w-[640px] rounded-lg shadow-lg object-contain" src={orion} alt="Nexora" />
                </div>
            </div>


            {/* 02ii - NEXORA */}
            <div className="px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-32 py-8 xl:py-12 border-b border-black/10">
                <p className="uppercase text-[11px] xl:text-[12px] tracking-widest text-black/50 mb-4">Featured Project - 02ii</p>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 xl:gap-16 p-5 xl:p-10 border bg-[#efeff2] rounded-xl">
                    <div className="w-full lg:w-[45%]">
                        <p className="text-[20px] xl:text-[28px] font-bold">Nexora Dashboard</p>
                        <p className="text-[13px] xl:text-[15px] text-black/60 mt-2">Real time analytic dashboard for SaaS teams. Clean data visualization and performance tracking.</p>
                        <div className="flex flex-wrap gap-2 mt-5">
                             <span className="px-3 py-1.5 rounded-full bg-white text-[10px] border border-black">React</span>
                             <span className="px-3 py-1.5 rounded-full bg-white text-[10px] border border-black">Typescript</span>
                             <span className="px-3 py-1.5 rounded-full bg-white text-[10px] border border-black">Tailwind</span>
                             <span className="px-3 py-1.5 rounded-full bg-white text-[10px] border border-black">Rechart</span>
                        </div>
                         <a className=" inline-block text-[15px] p-2 uppercase font-bold underline " href="https://nexora-pro-seven.vercel.app/">Visit Site</a>
                    </div>
                    <img className="w-full lg:w-[55%] max-w-[640px] rounded-lg shadow-lg object-contain" src={nexoraImg} alt="Nexora" />
                </div>
            </div>

            
            
           

        </div>
    )
}