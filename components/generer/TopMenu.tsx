'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { useQuery } from '@/providers/QueryProvider';

const TopMenu = ({
  queryKey,
  type = 'simple',
  menu,
  actualValue,
  onClick,
}: {
  queryKey?: 'filter' | 'genre';
  type?: 'simple' | 'link';
  menu: string[];
  actualValue: string;
  onClick?: (value: string) => void;
}) => {
  const pathname = usePathname();

  const { currentQuery } = useQuery();

  return (
    <div className="flex gap-10">
      {type === 'link'
        ? queryKey &&
          menu.map((item) => (
            <Link
              key={`menu-${item}`}
              href={{ pathname, query: { ...currentQuery, [queryKey]: item } }}
              className="relative flex flex-col items-center gap-1"
            >
              <p
                className={`font-400 text-[16px] ${
                  actualValue === item
                    ? ''
                    : 'text-[#333333] hover:text-[#FFFFFF]'
                }`}
              >
                {item}
              </p>
              <div
                className={`w-10 h-1 rounded-full ${
                  actualValue === item ? 'bg-(--color-primary)' : ''
                }`}
              />
            </Link>
          ))
        : onClick &&
          menu.map((item) => (
            <div
              key={`menu-${item}`}
              className="relative flex flex-col items-center gap-1 cursor-pointer"
              onClick={() => onClick(item)}
            >
              <p
                className={`font-400 text-[16px] ${
                  actualValue === item
                    ? ''
                    : 'text-[#333333] hover:text-[#FFFFFF]'
                }`}
              >
                {item}
              </p>
              <div
                className={`w-10 h-1 rounded-full ${
                  actualValue === item ? 'bg-(--color-primary)' : ''
                }`}
              />
            </div>
          ))}
    </div>
  );
};

export default TopMenu;
