import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

export default function PortfolioHeader(){
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const goToWork = () => {
    setOpen(false)
    if(location.pathname!== "/"){
      navigate("/")
      setTimeout(()=> document.getElementById("work-start")?.scrollIntoView({behavior:"smooth"}), 150)
    } else {
      document.getElementById("work-start")?.scrollIntoView({behavior:"smooth"})
    }
  }

  const closeMenu = () => setOpen(false)

  return(
    <header className="w-full px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-32 h-[60px] xl:h-[70px] flex justify-between items-center border-b border-black/10 bg-white sticky top-0 z-[100]">
      <Link to="/" onClick={closeMenu} className="font-bold tracking-[0.2em] text-[11px] xl:text-[13px]">VICTOR CHINEDU</Link>

      {/* Desktop */}
      <nav className="hidden md:flex items-center gap-6 xl:gap-8 text-[11px] xl:text-[12px] uppercase tracking-widest">
        <button onClick={goToWork} className="hover:opacity-60">Work</button>
        <Link to="/about" className="hover:opacity-60">About</Link>
        <Link to="/services" className="hover:opacity-60">Services</Link>
        <Link to="/contact" className="bg-black text-white px-4 py-2 rounded-full normal-case tracking-normal">Contact</Link>
      </nav>

      {/* Mobile Hamburger */}
      <button onClick={()=>setOpen(!open)} className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5">
        <span className={`w-full h-[1.5px] bg-black transition ${open? "rotate-45 translate-y-[3px]" : ""}`}></span>
        <span className={`w-full h-[1.5px] bg-black transition ${open? "-rotate-45 -translate-y-[3px]" : ""}`}></span>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[60px] left-0 w-full bg-white border-b border-black/10 p-5 flex flex-col gap-4 md:hidden z-50">
          <button onClick={goToWork} className="text-left text-[13px] uppercase tracking-widest py-2 border-b">Work</button>
          <Link to="/about" onClick={closeMenu} className="text-[13px] uppercase tracking-widest py-2 border-b">About</Link>
          <Link to="/services" onClick={closeMenu} className="text-[13px] uppercase tracking-widest py-2 border-b">Services</Link>
          <Link to="/contact" onClick={closeMenu} className="text-[13px] uppercase tracking-widest py-2">Contact</Link>
          <div className="pt-2 text-[11px] opacity-50">
            vardevictor78@gmail.com<br/>+234 813 452 6761
          </div>
        </div>
      )}
    </header>
  )
}