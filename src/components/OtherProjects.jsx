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
    <section className="px-4 lg:px-8 py-4 bg-white border-b border-black/10">
      {/* Header */}
      <div className="flex items-end justify-between mb-10">
        <h2 className="uppercase leading-none tracking-[-0.02em]">
          Other Projects - 03
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:flex md:gap-6 lg:gap-6 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="group cursor-pointer">
            {/* Image now redirects */}
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              <div className="bg-white w-full h-[280px] md:h-[150px] md:w-[200px] lg:w-[430px] rounded-sm overflow-hidden shadow-sm">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>
            </a>

            {/* Text under */}
            <div className="mt-4 flex items-start justify-between">
              <div>
                <h3 className="text-[16px] font-medium">{p.title}</h3>
                <p className="text-[13px] text-black/50 mt-1 max-w-[300px]">{p.tag}</p>

                {p.stack.length > 0 && (
                  <div className="flex gap-1 mt-3">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 text-[10px] md:text-[7px] tracking-[0.14em] uppercase font-medium px-3.5 py-1.5 rounded-full bg-[#f2f2f2] text-black/60 border border-black/5"
                      >
                        <span className="w-1 h-1 bg-black rounded-full"></span>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <span className="text-[13px] text-black/40 border border-black/10 rounded-full px-3 py-1 group-hover:bg-black group-hover:text-white transition-colors">
                {p.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}