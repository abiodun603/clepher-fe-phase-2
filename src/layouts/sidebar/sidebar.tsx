// ** Libs


// ** Icons
import { AiOutlineDashboard } from "react-icons/ai";
import { 
  FiUsers,
 } from "react-icons/fi";
import { BsChatText } from "react-icons/bs";
import { ImMagnet } from "react-icons/im";
import { IoTelescopeSharp } from "react-icons/io5";
import { ImMagicWand } from "react-icons/im";
import { BiLineChart } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { PiStack } from "react-icons/pi";
import MenuLink from "./menu-link/menu-link";
import { PiChartLineLight } from "react-icons/pi";
import { ImStack } from "react-icons/im";

export interface SidebarNavItemProps {
  name?: string;
  path: string;
  icon: React.ComponentType<{ size: number, className?: string }>}

export enum  RoutePath {
  DASHBOARD = "/dashboard",
  AUDIENCE = "/audience",
  CHAT = "/chat",
  CAPTURE_TOOLS = "/capture-tools",
  BROADCASTS = "/broadcasts",
  AUTOMATION = "/automation",
  SHELF = "/shelf",
  CHART = "/chart",
  SETTINGS = "/settings",
}


const NAV_ITEMS: SidebarNavItemProps[] = [
  {
    name: "dashboard",
    path: RoutePath.DASHBOARD,
    icon: AiOutlineDashboard
  },
  {
    name: "audience",
    path: RoutePath.AUDIENCE,
    icon: FiUsers
  },
  {
    name: "chat",
    path: RoutePath.CHAT,
    icon: BsChatText
  },
  {
    name: "capture-tools",
    path: RoutePath.CAPTURE_TOOLS,
    icon: ImMagnet
  },
  {
    name: "broadcasts",
    path: RoutePath.BROADCASTS,
    icon: IoTelescopeSharp
  },
  {
    name: "automation",
    path: RoutePath.AUTOMATION,
    icon: ImMagicWand
  },
  {
    name: "shelf",
    path: RoutePath.SHELF,
    icon: ImStack
  },
  {
    name: "chart",
    path: RoutePath.CHART,
    icon: PiChartLineLight
  },
  {
    name: "settings",
    path: RoutePath.SETTINGS,
    icon: IoSettingsOutline
  }
];

const Sidebar =  () => {
  return (
    <div className="sticky top-10 h-[100dvh]">
      <div className="mt-20 flex items-center justify-center">
        <ul className={`list-none`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.name} className="">
                <MenuLink icon={item.icon} path={item.path}/>
            </li>
          ))}
        </ul>  
      </div>
    </div>
  );
};

export default Sidebar;