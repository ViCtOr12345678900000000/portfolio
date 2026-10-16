import nexoraImg from "../assets/Nexora.png"
import jhinora from "./Jhinora.png"
import vcstore from "../assets/vcstore.png"

const projects = [
  {
    title: "VC Store",
    year: "2023",
    tag: "Beginner clothing brand with Beginner coding.",
    img: vcstore,
    stack: ["HTML", "CSS", "JS"],
    link: "https://victor12345678900000000.github.io/Vc-store/Store.html",
  },
  {
    title: "Jhinora Studios",
    year: "2024",
    tag: "Amateur Studio brand with more experience than inital.",
    img: jhinora,
    stack: ["HTML", "CSS", "JS"],
    link: "https://victor12345678900000000.github.io/jhinorastore/jhinora",
  },
  {
    title: "Nexora Dashboard",
    year: "2026",
    tag: "Fintech / Dashboard",
    img: nexoraImg,
    stack: ["REACT", "TAILWIND", "RECHART"],
    link: "https://nexora-theta-liart.vercel.app/",
  },
]

export default function OtherProjects() {
  return (
    <section className="px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-32 py-8 xl:py-12 bg-white border-b border-black/10">
      <h2 className="uppercase text-[11px] xl:text-[12px] tracking-widest text-black/50 mb-6 xl:mb-10">
        Other Projects - 03
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 xl:gap-8 2xl:gap-10">
        {projects.map((p, i) => (
          <div key={i} className="group cursor-pointer">
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              <div className="w-full h-[260px] md:h-[180px] lg:h-[200px] xl:h-[260px] 2xl:h-[320px] rounded-lg xl:rounded-xl overflow-hidden shadow-sm bg-white">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </a>

            <div className="mt-4">
              <div className="flex gap-3 items-center">
                <h3 className="text-[16px] xl:text-[18px] 2xl:text-[20px] font-medium">{p.title}</h3>
                <span className="text-[11px] xl:text-[12px] text-black/40 border border-black/10 rounded-full px-3 py-1 group-hover:bg-black group-hover:text-white transition-colors">
                  {p.year}
                </span>
              </div>
              <p className="text-[13px] xl:text-[14px] text-black/50 mt-1 max-w-[300px] xl:max-w-[400px]">{p.tag}</p>

              <div className="flex gap-1.5 mt-3 flex-wrap">
                {p.stack.map((tech) => (
                  <span key={tech} className="text-[9px] xl:text-[10px] tracking-widest uppercase px-3 py-1 rounded-full bg-[#f2f2f2] text-black/60 border border-black/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}