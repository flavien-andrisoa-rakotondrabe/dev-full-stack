'use client';

import Image from 'next/image';
import Link from 'next/link';

import { routes } from '@/lib/route';
import { usePathname } from 'next/navigation';

const SideBar = ({ mini }: { mini: boolean }) => {
  const pathname = usePathname();

  return (
    <div
      className={`h-full z-50 p-2 border-r border-[#FBF9F9] bg-[#0a0a0a] ${
        mini ? 'w-[117px]' : 'w-[117px] lg:w-[352px]'
      }`}
    >
      <Link href="/" className="flex pt-[17px] ps-8 lg:ps-10">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          height={42}
          width={143}
          className={`${mini ? 'hidden' : 'hidden lg:block'}`}
        />
        <Image
          src="/images/mini-logo.svg"
          alt="Logo"
          height={32}
          width={32}
          className={`${mini ? 'block' : 'block lg:hidden'}`}
        />
      </Link>
      <div className="h-[57px]"></div>
      <div className="flex flex-col gap-2">
        {routes.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className={`h-[50px] flex items-center gap-2 hover:bg-(--color-primary)/50 rounded-md select-none transition ${
              pathname === item.href
                ? 'bg-(--color-primary)/70 cursor-default hover:bg-(--color-primary)/70'
                : ''
            } ${mini ? 'ps-9' : 'ps-9 lg:ps-12'}`}
          >
            <Image
              src={item.src}
              alt={item.label}
              width={26}
              height={24}
              className=""
            />
            <span className={`${mini ? 'hidden' : 'hidden lg:block'}`}>
              {item.label}
            </span>
          </Link>
        ))}
      </div>
      <div className="h-[79px]"></div>
      <Link
        href="/"
        className={`h-[50px] flex items-center gap-2 hover:bg-(--color-primary)/50 rounded-md select-none transition ${
          mini ? 'ps-10' : 'ps-10 lg:ps-12'
        }`}
      >
        <Image
          src="/icons/back.svg"
          alt="Revenir dans myXplace"
          width={26}
          height={24}
          className=""
        />
        <span className={`${mini ? 'hidden' : 'hidden lg:block'}`}>
          Revenir dans myXplace
        </span>
      </Link>
    </div>
  );
};

export default SideBar;
