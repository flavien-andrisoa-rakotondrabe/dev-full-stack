'use client';

import SideBar from '@/components/SideBar';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const SideBarLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="relative h-full w-full min-h-screen">
      <div className="fixed left-0 top-0 bottom-0">
        <SideBar />
      </div>
      <div
        className={`overflow-auto ${
          pathname === '/discuter' ? 'ms-[117px]' : 'ms-[117px] lg:ms-[352px]'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default SideBarLayout;
