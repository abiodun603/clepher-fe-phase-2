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

export interface SidebarNavItemProps {
  name: string;
  path: string;
  icon: React.ComponentType
}

export enum  RoutePath {
  DASHBOARD = "/dashboard",
  AUDIENCE = "/audience",
  CHAT = "/chat",
  CAPTURE_TOOLS = "/capture-tools",
  BROADCASTS = "/broadcasts",
  AUTOMATION = "/automation",
  SHELF = "/dashboard",
  CHART = "/dashboard",
  SETTINGS = "/dashboard",
}

export interface Route {
  name: string;
  path: RoutePath;
  SidebarNavItems: SidebarNavItemProps[]
  component: React.ComponentType
}


export const defaultSidebarNavItems: SidebarNavItemProps[] = [
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
    icon: PiStack
  },
  {
    name: "chart",
    path: RoutePath.CHART,
    icon: BiLineChart
  },
  {
    name: "settings",
    path: RoutePath.SETTINGS,
    icon: IoSettingsOutline
  }
];
