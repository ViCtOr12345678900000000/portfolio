import nexoraImg from "../assets/Nexora.png"
import nexorapro from "../assets/nexorapro.png"

export default function Featured(){
    return(
        <div className="w-full bg-white">
            {/* PROJECT 01 */}
            <div className="px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-32 py-8 xl:py-12 border-b border-black/10">
                <p className="uppercase text-[11px] xl:text-[12px] tracking-widest text-black/50 mb-4">Featured Project - 01</p>

                <div className="flex flex-col lg:flex-row xl:flex-row justify-between items-start lg:items-center gap-6 xl:gap-16 2xl:gap-24 p-5 xl:p-10 2xl:p-12 shadow-sm border bg-[#efeff2] xl:bg-[#e9e9ec] rounded-xl xl:rounded-2xl">
                    {/* Text */}
                    <div className="w-full lg:w-[50%] xl:w-[45%] 2xl:w-[40%]">
                        <p className="text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-bold">Nexora Dashboard</p>
                        <p className="text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px] font-light leading-relaxed mt-2 xl:mt-3 text-black/60 xl:max-w-[520px] 2xl:max-w-[600px]">
                          A real time analytic dashboard for SaaS team. Clean data visualization, user matrix and performance tracking built for clarity and speed.
                        </p>

                        <div className="flex flex-wrap gap-2 mt-5 xl:mt-6">
                             <span className="px-3 py-1.5 rounded-full bg-white text-[10px] xl:text-[11px] border border-black">React</span>
                             <span className="px-3 py-1.5 rounded-full bg-white text-[10px] xl:text-[11px] border border-black">Typescript</span>
                             <span className="px-3 py-1.5 rounded-full bg-white text-[10px] xl:text-[11px] border border-black">Tailwind</span>
                             <span className="px-3 py-1.5 rounded-full bg-white text-[10px] xl:text-[11px] border border-black">Rechart</span>
                        </div>
                        <p className="mt-6 text-[12px] xl:text-[13px]">
                            <a className="underline hover:font-medium" href="https://nexora-theta-liart.vercel.app/">Visit</a>
                            <span className="text-[10px] ml-1">➤</span>
                        </p>
                    </div>

                    {/* Image */}
                    <div className="w-full lg:w-[50%] xl:w-[55%] 2xl:w-[60%] flex justify-center lg:justify-end">
                        <img
                          className="w-full max-w-[520px] xl:max-w-[640px] 2xl:max-w-[760px] h-auto object-contain rounded-lg shadow-lg xl:shadow-xl"
                          src={nexoraImg}
                          alt="Nexora dashboard"
                        />
                    </div>
                </div>
            </div>

            {/* PROJECT 02 */}
            <div className="px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-32 py-8 xl:py-12 border-b border-black/10">
                <p className="uppercase text-[11px] xl:text-[12px] tracking-widest text-black/50 mb-4">Featured Project - 02</p>

                <div className="flex flex-col lg:flex-row xl:flex-row justify-between items-start lg:items-center gap-6 xl:gap-16 2xl:gap-24 p-5 xl:p-10 2xl:p-12 shadow-sm border bg-zinc-100 rounded-xl xl:rounded-2xl">
                    <div className="w-full lg:w-[50%] xl:w-[45%] 2xl:w-[40%]">
                        <p className="text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-bold">Nexora Pro</p>
                        <p className="text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px] font-light leading-relaxed mt-2 xl:mt-3 text-black/60 xl:max-w-[520px] 2xl:max-w-[600px]">
                          Built a responsive SaaS dashboard to master React list management, interactive customer management with live search, filters & CRUD
                        </p>

                        <div className="flex flex-wrap gap-2 mt-5 xl:mt-6">
                             <span className="px-3 py-1.5 rounded-full bg-white text-[10px] xl:text-[11px] border border-black">React</span>
                             <span className="px-3 py-1.5 rounded-full bg-white text-[10px] xl:text-[11px] border border-black">Typescript</span>
                             <span className="px-3 py-1.5 rounded-full bg-white text-[10px] xl:text-[11px] border border-black">Tailwind</span>
                             <span className="px-3 py-1.5 rounded-full bg-white text-[10px] xl:text-[11px] border border-black">Rechart</span>
                        </div>
                        <p className="mt-6 text-[12px] xl:text-[13px]">
                            <a className="underline hover:font-medium" href="https://nexora-pro-seven.vercel.app/">Visit</a>
                            <span className="text-[10px] ml-1">➤</span>
                        </p>
                    </div>

                    <div className="w-full lg:w-[50%] xl:w-[55%] 2xl:w-[60%] flex justify-center lg:justify-end">
                        <img
                          className="w-full max-w-[520px] xl:max-w-[640px] 2xl:max-w-[760px] h-auto object-contain rounded-lg shadow-lg xl:shadow-xl"
                          src={nexorapro}
                          alt="Nexora Pro dashboard"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}