import { Dispatch, FC, SetStateAction } from 'react'

// ** Icons
import { LifeBuoy } from 'lucide-react';
import { BsShieldExclamation } from "react-icons/bs";
import { FiMoon } from "react-icons/fi";
// Assets
import { Assets } from "../../assets"

// ** Component
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface NavbarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}


const Navbar: FC<NavbarProps> = ({isSidebarOpen, setIsSidebarOpen}) => {

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  
  return (
    <div className="h-[70px] flex items-center justify-between pl-4 pr-3  border-b border-slate-200 z-50 bg-white">
      <div className="md:w-[25rem] flex items-center justify-start space-x-4">
        {/* <Menu className="text-black md:hidden -mt-1" size={30} onClick={handleSidebarToggle} /> */}
        <Avatar className="w-10 h-10 cursor-pointer">
          <AvatarImage src={Assets.ituneProfileImage}  />
          <AvatarFallback>IT</AvatarFallback>
        </Avatar>
        <div className="border border-slate-200 rounded-md px-2 py-1">
          <p className='subtitle-five'>@hitunezofficial</p>
        </div>
      </div>
    
      <div className="w-full flex items-center justify-end">
        <div className="flex items-center gap-5">

          <div className="flex items-center">
            <div className="center-all p-3.5  hover:bg-[#E58B8B] hover:rounded-full">
              <BsShieldExclamation size={20} className='text-n500'/>
            </div>
            <div className="center-all p-3.5  hover:bg-n500/20 hover:rounded-full">
              <FiMoon size={20} className='text-n500' />
            </div>
            <div className="center-all p-3.5  hover:bg-n500/20 hover:rounded-full">
              <LifeBuoy size={20} className='text-n500' />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center">
                <Avatar className="w-10 h-10 hover:ring-4 hover:ring-offset-2 hover:ring-n500/20">
                  <AvatarImage src={Assets.navProfileImage}  />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuLabel className="cursor-pointer" onClick={() => null }>Logout</DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar