import Info from "../components/Info"
export default function About(){
  return(
    <div className="bg-white min-h-screen">
      <div className="px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-32 py-12 xl:py-20">
        <h1 className="text-[32px] xl:text-[56px] font-bold">About Me</h1>
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-20 mt-8">
          <div>
            <p className="text-[15px] xl:text-[18px] leading-relaxed text-black/70">
              I'm Victor Chinedu, Frontend Developer & Product Designer based in Lagos, Nigeria.
              I build fast, responsive web experiences using React, TypeScript, Tailwind, Recharts, Framer Motion and Supabase.
              <br/><br/>
              My focus is SaaS dashboards, e-commerce and configurators like Lumina Haus. I turn complex ideas into clean interfaces that work on any device.
              <br/><br/>
              Currently available for freelance and remote roles.
            </p>
          </div>
          <div className="space-y-3">
            <div className="border p-5 rounded-2xl"><b>Stack:</b> React, TypeScript, Tailwind, Recharts, Framer Motion, Supabase</div>
            <div className="border p-5 rounded-2xl"><b>Focus:</b> Dashboards, E-commerce, Landing Pages, UI to Code</div>
            <div className="border p-5 rounded-2xl"><b>Email:</b> vardevictor78@gmail.com<br/><b>WhatsApp:</b> +234 813 452 6761</div>
          </div>
        </div>
      </div>
      <Info />
    </div>
  )
}