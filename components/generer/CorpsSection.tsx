'use client';

import Image from 'next/image';
import NextButton from './NextButton';

import { corpsOptions, poitrineOptions } from '@/lib/options';
import { OptionInterface } from '@/types/OptionInterface';
import { Dispatch, SetStateAction } from 'react';

const CorpsSection = ({
  corpsType,
  setCorpsType,
  poitrineType,
  setPoitrineType,
  handleNext,
}: {
  corpsType: OptionInterface;
  setCorpsType: Dispatch<SetStateAction<OptionInterface>>;
  poitrineType: OptionInterface;
  setPoitrineType: Dispatch<SetStateAction<OptionInterface>>;
  handleNext: () => void;
}) => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-10">
        <h3 className="font-bold text-[24px] text-[#F6F6F6] text-center">
          Choisir le type de corps
        </h3>
        <div className="flex justify-center">
          <div className="flex gap-4">
            {corpsOptions.map((item) => (
              <div
                key={`cheveux-types-${item.title}`}
                className="relative w-[167px] h-[206px] cursor-pointer rounded-4xl"
                style={{
                  background: `url(${item.src}) no-repeat center / cover`,
                }}
                onClick={() => setCorpsType(item)}
              >
                <div className="relative z-10 w-full h-full flex justify-center items-end p-4">
                  <p className="font-bold text-[24px]">{item.title}</p>
                </div>
                {item.title !== corpsType.title && (
                  <div className="absolute top-0 left-0 w-full h-full bg-[#000000]/63"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <h3 className="font-bold text-[24px] text-[#F6F6F6] text-center">
          Choisissez la taille de poitrine
        </h3>
        <div className="flex justify-center">
          <div className="flex gap-4">
            {poitrineOptions.map((item) => (
              <div
                key={`origin-${item.title}`}
                className="relative w-[222px] h-[226px] cursor-pointer rounded-4xl"
                style={{
                  background: `url(${item.src}) no-repeat center / cover`,
                }}
                onClick={() => setPoitrineType(item)}
              >
                <div className="relative z-10 w-full h-full flex justify-center items-end p-4">
                  <p className="font-bold text-[24px]">{item.title}</p>
                </div>
                {item.title !== poitrineType.title && (
                  <div className="absolute top-0 left-0 w-full h-full bg-[#000000]/63"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <NextButton onClick={handleNext} />
      </div>
    </div>
  );
};

export default CorpsSection;
