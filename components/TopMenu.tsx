'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

const topMenu = [
  { label: 'Post', href: '/generer' },
  { label: 'Au feeling', href: '/creer-modele-ia' },
  { label: 'Mes IA', href: '/mes-ia' },
];

const TopMenu = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-10">
      {topMenu.map((item) => (
        <Link
          href={item.href}
          key={`menu-${item.href}`}
          className="relative flex flex-col gap-1 px-1"
        >
          <p
            className={`font-400 text-[16px] ${
              pathname === item.href ? '' : 'text-[#333333]'
            }`}
          >
            {item.label}
          </p>
          {pathname === item.href && (
            <div className="w-full h-1 rounded-full bg-(--color-primary)"></div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default TopMenu;
