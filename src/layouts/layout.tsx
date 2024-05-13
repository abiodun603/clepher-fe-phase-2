import  { useState } from "react";
import { Outlet } from "react-router-dom";

// ** Layouts
import Navbar from "@/layouts/navbar/navbar";
import Sidebar from "@/layouts/sidebar/sidebar";

// ** CN
import { cn } from "@/lib/utils";
import { Provider } from "react-redux";
import store from "@/store";


export default function Root() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Provider store={store}>
      <div className={cn(`bg-white border-r border-slate-200 w-[4.3rem] min-h-screen fixed left-0 top-0 transform`, {
        '-translate-x-full lg:translate-x-0' : !isSidebarOpen,
        'z-50': isSidebarOpen
      })}>
        <Sidebar />
      </div>
      <div className="fixed top-0 w-[100vw]  z-50">
        <Navbar  isSidebarOpen = {isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </div>
      <div className={cn(`w-full`,{
        'lg:pl-[4.2rem]' : isSidebarOpen,
        " lg:pl-[4.2rem] p-0" : !isSidebarOpen
      } )}>
        <div className="w-full bg-[#F2F7FE] min-h-screen pt-20 pb-16 md:px-8">
         <Outlet />
        </div>
      </div>
    </Provider>
  )
}