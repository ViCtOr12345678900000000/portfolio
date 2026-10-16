import Info from "../components/Info"
export default function Contact(){
  return(
    <div className="bg-white min-h-screen">
      <div className="px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-32 py-12 xl:py-20">
        <h1 className="text-[32px] xl:text-[56px] font-bold leading-none">Let's build<br/>something great</h1>
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-20 mt-10">
          <form action="https://formspree.io/f/xzzbyqjk" method="POST" className="space-y-4">
            <input name="name" placeholder="Your Name" required className="w-full border p-4 rounded-xl text-[14px]" />
            <input name="email" type="email" placeholder="Your Email" required className="w-full border p-4 rounded-xl text-[14px]" />
            <textarea name="message" rows={6} placeholder="Project details..." required className="w-full border p-4 rounded-xl text-[14px]" />
            <button className="w-full bg-black text-white py-4 rounded-full">Send Message</button>
            <p className="text-[11px] text-center opacity-40">Sends directly to vardevictor78@gmail.com via Formspree</p>
          </form>
          <div className="space-y-3">
            <a href="mailto:vardevictor78@gmail.com" className="block border p-5 rounded-2xl hover:bg-black hover:text-white transition"><p className="text-[11px] opacity-50">EMAIL</p><p className="font-medium mt-1">vardevictor78@gmail.com</p></a>
            <a href="https://wa.me/2348134526761" target="_blank" className="block border p-5 rounded-2xl hover:bg-black hover:text-white transition"><p className="text-[11px] opacity-50">WHATSAPP</p><p className="font-medium mt-1">+234 813 452 6761 — Fastest reply</p></a>
            <div className="border p-5 rounded-2xl text-[13px] space-y-1">
              <p><a className="underline" href="https://portfolio-z5s4.vercel.app" target="_blank">portfolio-z5s4.vercel.app</a> — Main</p>
              <p><a className="underline" href="https://lum-bay.vercel.app/" target="_blank">lum-bay.vercel.app</a> — Lumina</p>
              <p><a className="underline" href="https://nexora-theta-liart.vercel.app/" target="_blank">Nexora</a> / <a className="underline" href="https://nexora-pro-seven.vercel.app/" target="_blank">Nexora Pro</a></p>
            </div>
          </div>
        </div>
      </div>
      <Info />
    </div>
  )
}