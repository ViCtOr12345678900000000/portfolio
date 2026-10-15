import Developer from "./Developer"
import Featured from "./Featured"
import OtherProjects  from "./OtherProjects"
import Info from "./Info"

export default function Panel(){
    return(
        <div className="bg-white justify-center w-80% h-full md:h-full lg:h-full md:pt- lg:pt-4">
            <Developer />
            <Featured />
            <OtherProjects/>
            <Info />
        </div>
    )
}