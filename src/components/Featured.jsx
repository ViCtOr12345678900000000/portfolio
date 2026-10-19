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
import nova from "../assets/nova.png"

// 1. YOUR ARRAY - NOW WITH STYLE INFO
const initialUsers = [
  { 
    id: 1, 
    header:'Featured Project - 01i', 
    name: 'Lumina Haus', 
    info:'Luxury architectural material configurator. Real-time material switching, light presets, hotspot product breakdown and Supabase auth.', 
    tags: ['React','Framer Motion','Tailwind','Supabase'],
    badge1: 'New', badge2: '2026 • Configurator',
    type: 'gallery', // <-- Style A
    theme: 'dark', // bg #0e0e0e text white
    images: [lumina1, lumina2, lumina3],
    link:'https://lum-bay.vercel.app/',
  },
  { 
    id: 2,
    header:'Featured Project - 01ii', 
    name: 'Jhinora Pro', 
    info:'High-fashion studio portfolio for Jhinora Studios. Editorial storytelling, sticky project reveals, fullscreen manifesto and immersive bottom contact.', 
    tags: ['React','Framer Motion','Tailwind','Lenis Scroll'],
    badge1: 'Flagship', badge2: '2026 • Studio Website',
    type: 'gallery', // <-- Style A
    theme: 'light', // bg #fefefe text black
    images: [jhinora1, jhinora2, jhinora3],
    link:'https://jhin-chi.vercel.app',
  },
  { 
    id: 3,
    header:'Featured Project - 02', 
    name: 'Nexora Pro', 
    info:'Responsive SaaS dashboard with search, filters & CRUD', 
    tags: ['React','Typescript','Tailwind','Rechart'],
    type: 'single', // <-- Style B
    bg: 'bg-zinc-100',
    image: nexorapro,
    link:'https://nexora-pro-seven.vercel.app/',
  },
  {
    id: 4,
    header:'Featured Project - 02i', 
    name: 'Nova', 
    info:'A modern, minimal inventory dashboard for boutique owners to track products, stock levels, and value in real-time. Built with a focus on clean UI and fast interactions.', 
    tags: ['React','Typescript','Tailwind'],
    type: 'single', // <-- Style B
    bg: 'bg-zinc-100',
    image: nova,
    link:'https://novastock-taupe.vercel.app/',
  },
  { 
    id: 5,
    header:'Featured Project - 02ii', 
    name: 'Orion', 
    info:'Immersive gaming landing experience. Staggered circular arcs, Use of icons from Lucid React, and full-screen character reveal with trailer interaction.', 
    tags: ['React','Typescript','Tailwind'],
    type: 'single',
    bg: 'bg-rose-50',
    status: 'pending', 
  statusText: 'Pending',
    image: orion,
    link:'https://orion-two-taupe.vercel.app/',
  },
  { 
    id: 6,
    header:'Featured Project - 02iii', 
    name: 'Nexora Dashboard', 
    info:'Real time analytic dashboard for SaaS teams. Clean data visualization and performance tracking.', 
    tags: ['React','Typescript','Tailwind','Rechart'],
    type: 'single',
    bg: 'bg-[#efeff2]',
    image: nexoraImg,
    link:'https://nexora-pro-seven.vercel.app/',
  },
];

// 2. ONE GALLERY COMPONENT THAT HANDLES BOTH THEMES
function Gallery({ images, theme }) {
  const [active, setActive] = useState(0)
  const isDark = theme === 'dark'
  return (
    <div className="w-full lg:w-[50%] xl:w-[55%] 2xl:w-[60%] flex flex-col gap-3">
      <div className={`w-full  rounded-lg xl:rounded-xl overflow-hidden border shadow-2xl ${isDark ? 'bg-black border-white/10' : 'bg-white border-black/10'}`}>
        <img src={images[active]} alt={`project ${active+1}`} className="w-full h-full object-contain " />
      </div>
      <div className="grid grid-cols-3 gap-2 xl:gap-3">
        {images.map((img, i) => (
          <button key={i} onClick={() => setActive(i)} className={`aspect-[16/10] rounded-md overflow-hidden border-2 transition-all ${active === i ? (isDark ? "border-white scale-[1.02]" : "border-black scale-[1.02]") : (isDark ? "border-white/10 opacity-60 hover:opacity-100" : "border-black/10 opacity-60 hover:opacity-100")}`}>
            <img src={img} className="w-full h-full object-cover object-top" />
          </button>
        ))}
      </div>
      <p className={`text- xl:text- text-center ${isDark ? 'text-white/30' : 'text-black/30'}`}>{active + 1} / {images.length} • Click to switch</p>
    </div>
  )
}

// 3. MAIN COMPONENT - MAPS AND PICKS STYLE AUTOMATICALLY
export default function Featured(){
  return(
    <div className="w-full bg-white">
      {initialUsers.map((data) => (
        <div key={data.id} className="px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-32 py-8 xl:py-12 border-b border-black/10">
          <p className="uppercase text- xl:text- tracking-widest text-black/50 mb-4">{data.header}</p>
          
          {/* IF gallery type */}
          {data.type === 'gallery' ? (
            <div className={`flex flex-col lg:flex-row justify-between items-start gap-6 xl:gap-16 p-5 xl:p-10 border rounded-xl xl:rounded-2xl ${data.theme === 'dark' ? 'bg-[#0e0e0e] text-white' : 'bg-[#fefefe] text-black'}`}>
              <div className="w-full lg:w-[45%]">
                <div className="flex gap-2 mb-2">
                  <span className={`text- px-2.5 py-1 rounded-full font-medium ${data.theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}>{data.badge1}</span>
                  <span className={`text- px-2.5 py-1 rounded-full border ${data.theme === 'dark' ? 'border-white/20' : 'border-black/15'}`}>{data.badge2}</span>
                </div>
                <p className="text- xl:text- font-bold">{data.name}</p>
                <p className={`text- xl:text- mt-2 leading-relaxed ${data.theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>{data.info}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {data.tags.map(t => <span key={t} className={`px-3 py-1.5 rounded-full text- xl:text- border ${data.theme === 'dark' ? 'bg-white/10 border-white/10' : 'bg-black text-white border-black'}`}>{t}</span>)}
                </div>
                <div className="mt-6 flex gap-3">
                  <a className={`text- xl:text- px-4 py-2 rounded-full font-medium transition ${data.theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`} href={data.link} target="_blank">Live Demo ➤</a>
                  <a className={`text- xl:text- px-4 py-2 rounded-full border transition ${data.theme === 'dark' ? 'border-white/20 hover:bg-white/10' : 'border-black/15 hover:bg-black/5'}`} href={data.link} target="_blank">Visit Site</a>
                </div>
              </div>
              <Gallery images={data.images} theme={data.theme} />
            </div>
          ) : (
            /* IF single image type */
            <div className={`flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 xl:gap-16 p-5 xl:p-10 border rounded-xl ${data.bg}`}>
              <div className="w-full lg:w-[45%]">
                <p className="text- xl:text- font-bold">{data.name}</p>
                <p className="text- xl:text- text-black/60 mt-2">{data.info}</p>


                   {/* ADD THIS - PENDING BADGE */}
            {data.status === 'pending' && (
              <div className="text-blue-100/50 p-[5px] mt-3 w-28 h-9 rounded-xl text-[13px] bg-black/60 border border-black/10 place-items-center relative flex justify-center items-center">
                {data.statusText || 'Pending'}
                    <span className="absolute top-[-3px] right-[-7px] w-3 h-3 bg-red-500 text-[8px] text-white font-bold rounded-full grid place-items-center">!</span>
              </div>
            )}


                <div className="flex flex-wrap gap-2 mt-5">
                  {data.tags.map(t => <span key={t} className="px-3 py-1.5 rounded-full bg-white text- border border-black">{t}</span>)}
                </div>
                <a className="inline-block text- p-2 uppercase font-bold underline" href={data.link}>Visit Site</a>
              </div>
              <img className="w-full lg:w-[55%] max-w- rounded-lg shadow-lg object-contain" src={data.image} alt={data.name} />
            </div>

          

          )}
        </div>
      ))}
    </div>
  )
}