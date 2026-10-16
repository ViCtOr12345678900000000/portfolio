import Info from "../components/Info"
const services = [
  { title: "SaaS Dashboard Development", desc: "Full React + TypeScript dashboard with charts, filters, CRUD. Like Nexora.", price: "From $800" },
  { title: "Product Configurator", desc: "Like Lumina Haus — real-time material switching, cost breakdown, cart.", price: "From $1000" },
  { title: "Landing Page / Portfolio", desc: "Fast, responsive. Converts visitors to clients.", price: "From $300" },
  { title: "Figma to React Code", desc: "Pixel-perfect conversion to Tailwind + Framer Motion.", price: "From $250" },
]

export default function Services(){
  return(
    <div className="bg-white min-h-screen">
      <div className="px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-32 py-12 xl:py-20">
        <h1 className="text-[32px] xl:text-[56px] font-bold">Services</h1>
        <p className="text-black/50 mt-2">What I can build for you</p>
        <div className="grid md:grid-cols-2 gap-4 xl:gap-6 mt-10">
          {services.map(s => (
            <div key={s.title} className="border p-6 xl:p-8 rounded-2xl hover:bg-black hover:text-white transition group">
              <h3 className="font-bold text-[16px] xl:text-[20px]">{s.title}</h3>
              <p className="text-[13px] mt-3 opacity-60">{s.desc}</p>
             
            </div>
          ))}
        </div>
      </div>
      <Info />
    </div>
  )
}