// components/Sidebar.jsx
import { useState } from 'react';

export default function Sidebar({ isOpen, setIsOpen }) {
  const [active, setActive] = useState('Work');
  const links = ['Work', 'About', 'Services', 'Contact'];

  return (
    <>
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/60 z-30 md:hidden" />
      )}

      {/* md:hidden = sidebar ONLY for mobile, not needed on md/lg because navbar already has links */}
      <aside className={`
        fixed top-0 left-0 z-40 h-screen w-[280px] bg-white border-r border-black/10 flex flex-col md:hidden
        transition-transform duration-300
        ${isOpen? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-5 flex items-center justify-between border-b border-black/5">
          <p className="font-bold text-[13px] tracking-[0.15em] uppercase">Portfolio</p>
          <button onClick={() => setIsOpen(false)} className="w-7 h-7 rounded-full bg-black/5 grid place-items-center">✕</button>
        </div>

        <nav className="mt-4 px-2">
          <div className="space-y-1">
            {links.map((name) => (
              <button
                key={name}
                onClick={() => {
                  setActive(name);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-3 text-[15px] rounded-md
                  ${active===name? 'bg-black text-white' : 'text-black/70 hover:bg-black/5'}`}
              >
                {name}
              </button>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
}