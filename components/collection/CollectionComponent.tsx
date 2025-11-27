'use client';

import Image from 'next/image';
import Link from 'next/link';
import UserProfile from '../UserProfile';

import { usePathname } from 'next/navigation';
import { useQuery } from '@/providers/QueryProvider';
import { useEffect, useState } from 'react';

type CollectionType = {
  id: number;
  name: string;
  src: string;
  gallery: { type: 'image' | 'video'; url: string }[];
};

const collectionData: CollectionType[] = [
  {
    id: 1,
    name: 'Luna moreno',
    src: '/images/lunah.png',
    gallery: [
      { type: 'video', url: '/images/lunah-moreno.png' },
      { type: 'image', url: '/images/lunah-moreno-2.png' },
    ],
  },
  {
    id: 2,
    name: 'Mila Mah',
    src: '/images/mila.jpg',
    gallery: [{ type: 'image', url: '/images/mila.jpg' }],
  },
];

const CollectionComponent = () => {
  const pathname = usePathname();

  const { currentQuery } = useQuery();

  const [actualCollection, setActualCollection] =
    useState<CollectionType | null>(null);

  useEffect(() => {
    if (currentQuery?.c && !isNaN(Number(currentQuery.c))) {
      setActualCollection(
        collectionData.find((item) => item.id === Number(currentQuery.c)) ||
          null,
      );
    } else {
      if (actualCollection) {
        setActualCollection(null);
      }
    }
  }, [currentQuery]);

  return (
    <div className="p-8 flex flex-col gap-[47px]">
      <div className="flex justify-end">
        <UserProfile />
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-7">
          <Link
            href={pathname}
            className={`select-none ${
              actualCollection ? 'cursor-pointer' : ''
            }`}
          >
            <h1 className="font-bold text-[40px]">Ma collection</h1>
          </Link>
          {actualCollection && (
            <div className="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M-3.70443e-05 11.8087V8.80869L10.296 5.06469V6.74469L-3.70443e-05 3.00069V0.000687122L11.424 4.34469V7.46469L-3.70443e-05 11.8087Z"
                  fill="white"
                />
              </svg>
              <div className="flex items-center gap-4">
                <div
                  className="w-[58px] h-[58px] rounded-full"
                  style={{
                    background: `url(${actualCollection.src}) no-repeat center / cover`,
                  }}
                />
                <p className="font-bold text-[24px]">{actualCollection.name}</p>
              </div>
            </div>
          )}
        </div>

        {actualCollection ? (
          <div className="flex gap-6">
            {actualCollection.gallery.map((item, index) => (
              <div
                key={`content-${actualCollection.name}-${index}`}
                className="relative w-[203px] h-60 flex items-center justify-center rounded-2xl"
                style={{
                  background: `url(${item.url}) no-repeat center / cover`,
                }}
              >
                {item.type === 'video' && (
                  <Image
                    src="/icons/play-circle.svg"
                    alt="Play"
                    width={35}
                    height={35}
                    className="absolute w-[35px] h-[35px] cursor-pointer"
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex gap-[42px]">
            {collectionData.map((item) => (
              <div key={item.name} className="flex flex-col gap-[34px]">
                <div className="flex gap-4 items-center">
                  <Link
                    href={{ pathname, query: { ...currentQuery, c: item.id } }}
                  >
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="max-w-20 max-h-20 min-w-20 min-h-20 object-cover rounded-2xl cursor-pointer"
                    />
                  </Link>

                  <div className="flex flex-col gap-2 font-bold">
                    <Link
                      href={{
                        pathname,
                        query: { ...currentQuery, c: item.id },
                      }}
                      className="underline-offset-2 hover:underline"
                    >
                      <h6 className="text-[16px]">{item.name}</h6>
                    </Link>
                    <div className="flex items-center gap-4 text-[14px]">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/icons/generer.svg"
                          alt="Généré"
                          width={16}
                          height={16}
                          className=""
                        />
                        <p>1</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/icons/play-simple.svg"
                          alt="Généré"
                          width={16}
                          height={16}
                          className=""
                        />
                        <p>1</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href={{ pathname, query: { ...currentQuery, c: item.id } }}
                >
                  <div className="relative flex items-center justify-center cursor-pointer">
                    <div
                      className="relative w-[203px] h-60 flex items-center justify-center z-10 rounded-2xl"
                      style={{
                        background: `url(${item.gallery[0].url}) no-repeat center / cover`,
                      }}
                    >
                      {item.gallery[0].type === 'video' && (
                        <Image
                          src="/icons/play-circle.svg"
                          alt="Play"
                          width={35}
                          height={35}
                          className="absolute w-[35px] h-[35px]"
                        />
                      )}
                    </div>
                    <div className="absolute -top-3.5 w-[173px] h-full bg-[#434242] rounded-2xl"></div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionComponent;
