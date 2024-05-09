
import { useState } from 'react';

// ** Layouts
import Navbar from './layouts/navbar'

// ** Styles
import './styles/globals.css'

// ** Libs
import { cn } from './lib/utils';

function App() {
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
          {/* {children} */}
          <div className="w-full grid grid-cols-5 gap-x-10 h-[70vh]">
            <div className=''>
              <div className='bg-white rounded-xl h-[276px]'>

              </div>
            </div>
            <div className='col-span-4 bg-white'>02</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
