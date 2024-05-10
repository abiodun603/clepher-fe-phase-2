'use client';


import { Link, useLocation } from 'react-router-dom';
import { SidebarNavItemProps } from '../sidebar';

// ** Libs
import { cn } from '@/lib/utils';

const MenuLink = ({ icon: Icon, path  }: SidebarNavItemProps) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={path}
      className={cn(`h-[52px] w-[52px] text-n500 flex items-center justify-center hover:bg-p100 hover:bg-n500/20 hover:rounded-md`, {
        'text-n200  bg-n900 rounded-md' : pathname === path ,
      })}
    >
      <Icon size={21} className=' ' />
    </Link>
  );
};

export default MenuLink;
