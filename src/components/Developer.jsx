export default function Developer(){
    return(
        <div className="lg:mt-[-25px] p-5 justify-self  border-b border-black/10 bg-white text-black ">
            <p className="text-[40px] font-bold">Developer & Product Designer</p>
            <p className="text-[15px] font-extralight p-1">I build fast and reliable web experiences that work beautifully on any device.
From SaaS dashboards to e-commerce stores, I turn complex ideas into clean, responsive interfaces using React and Tailwind.</p>

        <div className="flex gap-2 p-2 md:mx-[-8px]">
            <span className=" text-sm p-2 text-center rounded-full border w-30 text-black bg-white hover:cursor-text">
                View Works <span>↓</span>
            </span>
             <button className="rounded-full border border-black w-30 text-white bg-black hover:cursor-pointer" >
                Get in touch
            </button>
        </div>
        

        </div>
    )
}