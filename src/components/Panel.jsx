
// Panel.jsx
import Developer from "./Developer"
import Featured from "./Featured"
import OtherProjects from "./OtherProjects"
import Info from "./Info"

export default function Panel(){
    return(
        <div className="w-full max-w-[1920px] mx-auto min-h-screen bg-white">
            <Developer />
            <Featured />
            <OtherProjects/>
            <Info />
        </div>
    )
}