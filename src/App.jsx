import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Panel from "./components/Panel";



export default function App(){
  const [sidebarOpen, setSidebarOpen] = useState(false); //closed by default

  return(
    <div className="flex min-h-screen bg-white text-black">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <main className="p-4 lg:p-8">
          {/* Dashboard content */}
          <Panel />

        </main>
       

      </div>
      
    </div>
  )
}