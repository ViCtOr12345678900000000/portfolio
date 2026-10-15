import nexoraImg from "../assets/Nexora.png"

import nexorapro from "../assets/nexorapro.png"
export default function Featured(){
    return(
        <>
        <div className="p-5 justify-self  border-b border-black/10 bg-white text-black">
            <p className="uppercase">Featured Project - 01</p>
            <div className="grid md:flex-cols-2 lg:flex-cols-2">
                
                {/*for nexora dshbord*/}
                <div className="p-5 justify-self shadow-md border   bg-zinc-300 rounded-sm text-black md:flex mt-3">
                    <div className="md:w-[300px] lg:w-[700px] md:pt-8 lg:pt-8">
                    <p className="text-[20px] lg:text-[25px] font-bold">Nexora Dashboard</p>
                    <p className="text-[10px] lg:text-[20px] font-extralight lg:w-[600px] "> A real time analytic dashboard for SaaS team. Clean data visualization, user matrix and performance tracking built for clarity and speed. </p>

                        <div className="flex mx-[-22px] gap-2 p-5 md:mx-[-22px]">
                             <span className="text-black px-2 py-2 rounded-full bg-white text-[10px] border border-black" >React</span>
                             <span className="text-black px-2 py-2 rounded-full bg-white text-[10px]  border border-black" >Typescript</span>
                              <span className="text-black px-2 py-2 rounded-full bg-white text-[10px] border border-black" >Tailwind</span>
                               <span className="text-black px-2 py-2 rounded-full bg-white text-[10px] border border-black" >Rechart</span>
                        </div>
                        <p className="text-sm ">
                            <a className="underline hover:cursor-pointer" href="https://nexora-theta-liart.vercel.app/">Visit</a>
                            <span className="text-[9px] mx-1">➤</span>
                        </p>
                    </div>
                    
                   <div className="bg-inherit border-none md:w-[350px] mt-5 h-[200px] rounded-sm ">
  <img
    className="w-full h-full lg:ml-25   object-contain scale-100  "
    src={nexoraImg}
    alt="Nexora dashboard"
    
  />
</div>

                       
                        
                </div>

                </div>

            </div>

       


<div className="p-5 justify-self  border-b border-black/10 bg-white text-black">
            <p className="uppercase">Featured Project - 02</p>
            <div className="grid md:flex-cols-2 lg:flex-cols-2">
                
                {/*for nexora dshbord*/}
                <div className="p-5 justify-self shadow-md border   bg-gray-100 rounded-sm text-black md:flex mt-3">
                    <div className="md:w-[300px] lg:w-[700px] md:pt-8 lg:pt-8">
                    <p className="text-[20px] lg:text-[25px] font-bold">Nexora Pro</p>
                    <p className="text-[10px] lg:text-[20px] font-extralight lg:w-[900px] ">Built a responsive SaaS dashboard to master React list management, interactive customer management with live search, filters & CRUD</p>

                        <div className="flex mx-[-22px] gap-2 p-5 md:mx-[-22px]">
                             <span className="text-black px-2 py-2 rounded-full bg-white text-[10px] border border-black" >React</span>
                             <span className="text-black px-2 py-2 rounded-full bg-white text-[10px]  border border-black" >Typescript</span>
                              <span className="text-black px-2 py-2 rounded-full bg-white text-[10px] border border-black" >Tailwind</span>
                              <span className="text-black px-2 py-2 rounded-full bg-white text-[10px] border border-black" >Rechart</span> 
                        </div>
                        <p className="text-sm ">
                            <a className="underline hover:cursor-pointer" href="https://map-t2h4.vercel.app/">Visit</a>
                            <span className="text-[9px] mx-1">➤</span>
                        </p>
                    </div>
                    
                   <div className="bg-inherit border-none md:w-[350px] mt-5 h-[200px] rounded-sm ">
  <img
    className="w-full h-full lg:ml-25  object-contain scale-100  "
    src={nexorapro}
    alt="Nexora dashboard"
    
  />
</div>

                       
                        
                </div>

                </div>

            </div>

       
</>
    )
}