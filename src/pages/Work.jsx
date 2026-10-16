import Featured from "../components/Featured"
import OtherProjects from "../components/OtherProjects"
import Info from "../components/Info"

export default function Work(){
  return(
    <div className="bg-white min-h-screen">
      <div className="px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-32 py-10 xl:py-16 border-b">
        <h1 className="text-[32px] xl:text-[56px] font-bold leading-none">Selected Work</h1>
        <p className="text-black/50 mt-2 text-[14px]">2024 — 2026 • Starts with Lumina Haus</p>
      </div>
      <div id="work-start">
        <Featured />
      </div>
      <OtherProjects />
      <Info />
    </div>
  )
}