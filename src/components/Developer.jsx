export default function Developer(){
    return(
        <div className="p-5 justify-self  border-b border-black/10 bg-white text-black lg:pt-2">
            <p className="text-[40px] font-bold">Developer & Product Designer</p>
            <p className="text-[15px] font-extralight p-1">I build fast and reliable web experiences that work beautifully on any device.
From SaaS dashboards to e-commerce stores, I turn complex ideas into clean, responsive interfaces using React and Tailwind.</p>

        <div className="flex gap-2 p-2 md:mx-[-8px]">
            <button className="rounded-full border w-30 text-white bg-black hover:cursor-pointer">
                View Work
            </button>
             <button className="rounded-full border border-black w-30 text-white bg-black hover:cursor-pointer" >
                Get in touch
            </button>
        </div>
        

        </div>
    )
}