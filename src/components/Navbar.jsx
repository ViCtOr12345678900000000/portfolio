// components/Navbar.jsx
export default function Navbar({ isOpen, setIsOpen }){
  return(
    <header className="h-16 w-full px-4 lg:px-8 flex items-center justify-between bg-white border-b border-black/10 sticky top-0 z-20">
      <div className="flex items-center gap-4">
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden w-9 h-9 rounded-full bg-[#1a1a20] text-white grid place-items-center hover:cursor-pointer">
          <span>{isOpen? '✕' : '≡'}</span>
        </button>
        <h1 className="text-[14px] tracking-[0.18em] uppercase font-medium">Victor Chinedu</h1>
      </div>

      <div className="flex items-center gap-6">
        {/* THIS SHOWS ON MD & LG ONLY */}
        <nav className="hidden md:flex items-center gap-3 text-[14px]">
          <button className="hover:opacity-60">Work</button>
          <span className="text-[10px] text-black/30">•</span>
          <button className="hover:opacity-60">About</button>
          <span className="text-[10px] text-black/30">•</span>
          <button className="hover:opacity-60">Services</button>
          <span className="text-[10px] text-black/30">•</span>
          <button className="hover:opacity-60">Contact</button>
        </nav>

        <button className="text-white h-8 px-3.5 bg-[#1a1a20] rounded-full text-[12px] font-medium flex items-center gap-1.5">
          <span>↓</span> Export
        </button>
      </div>
    </header>
  )
}