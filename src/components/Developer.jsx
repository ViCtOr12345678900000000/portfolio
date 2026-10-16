export default function Developer(){
    return(
        <div className="w-full border-b border-black/10 bg-white text-black px-5 py-8 md:px-8 lg:px-10 xl:px-20 2xl:px-32 xl:py-16 2xl:py-20">
            <p className="text-[32px] md:text-[40px] lg:text-[48px] xl:text-[64px] 2xl:text-[80px] font-bold leading-[0.9] tracking-tight max-w-[1200px]">
              Developer & Product Designer
            </p>
            <p className="text-[13px] md:text-[15px] xl:text-[18px] 2xl:text-[20px] font-light leading-relaxed mt-4 max-w-[650px] xl:max-w-[800px] 2xl:max-w-[900px] text-black/70">
              I build fast and reliable web experiences that work beautifully on any device.
              From SaaS dashboards to e-commerce stores, I turn complex ideas into clean, responsive interfaces using React and Tailwind.
            </p>

            <div className="flex gap-3 mt-6 xl:mt-8">
                <span className="text-[12px] xl:text-[13px] 2xl:text-[14px] px-5 py-2.5 xl:px-6 xl:py-3 text-center rounded-full border border-black bg-white hover:bg-black hover:text-white transition-colors cursor-pointer">
                    View Works <span>↓</span>
                </span>
                <button className="rounded-full border border-black px-5 py-2.5 xl:px-6 xl:py-3 text-[12px] xl:text-[13px] 2xl:text-[14px] text-white bg-black hover:bg-zinc-800">
                    Get in touch
                </button>
            </div>
        </div>
    )
}