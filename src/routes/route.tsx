import  { useState } from "react";
import { Outlet } from "react-router-dom";

// ** Layouts
import Navbar from "@/layouts/navbar";

// ** CN
import { cn } from "@/lib/utils";


export default function Root() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className={cn(`bg-white border-r border-slate-200 w-[4.2rem] min-h-screen fixed left-0 top-0 transform`, {
        '-translate-x-full lg:translate-x-0' : !isSidebarOpen,
        'z-50': isSidebarOpen
      })}>
        {/* <Sidebar setIsSidebarOpen={setIsSidebarOpen} /> */}
      </div>
      <div className="fixed top-0 w-[100vw]  z-50">
        <Navbar/>
      </div>
      <div className={cn(`w-full`,{
        'lg:pl-[4.2rem]' : isSidebarOpen,
        " lg:pl-[4.2rem] p-0" : !isSidebarOpen
      } )}>
        <div className="w-full bg-[#F2F7FE] min-h-screen pt-24 pb-16 md:px-8">
         <Outlet />
        </div>
      </div>
    </>
  )
}