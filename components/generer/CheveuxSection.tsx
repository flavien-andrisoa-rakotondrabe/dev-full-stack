'use client';

import Image from 'next/image';
import NextButton from './NextButton';

import { cheveuxColors, cheveuxOptions, eyesColors } from '@/lib/options';
import { OptionInterface } from '@/types/OptionInterface';
import { Dispatch, SetStateAction } from 'react';

const CheveuxSection = ({
  cheveuxType,
  setCheveuxType,
  cheveuxColor,
  setCheveuxColor,
  eyesColor,
  setEyesColor,
  handleNext,
}: {
  cheveuxType: OptionInterface;
  setCheveuxType: Dispatch<SetStateAction<OptionInterface>>;
  cheveuxColor: OptionInterface;
  setCheveuxColor: Dispatch<SetStateAction<OptionInterface>>;
  eyesColor: OptionInterface;
  setEyesColor: Dispatch<SetStateAction<OptionInterface>>;
  handleNext: () => void;
}) => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-10">
        <h3 className="font-bold text-[24px] text-[#F6F6F6] text-center">
          Type de cheuveux
        </h3>
        <div className="flex justify-center">
          <div className="flex gap-4">
            {cheveuxOptions.map((item) => (
              <div
                key={`cheveux-types-${item.title}`}
                className="relative w-[167px] h-[206px] cursor-pointer rounded-4xl"
                style={{
                  background: `url(${item.src}) no-repeat center / cover`,
                }}
                onClick={() => setCheveuxType(item)}
              >
                <div className="relative z-10 w-full h-full flex justify-center items-end p-4">
                  <p className="font-bold text-[24px]">{item.title}</p>
                </div>
                {item.title !== cheveuxType.title && (
                  <div className="absolute top-0 left-0 w-full h-full bg-[#000000]/63"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <h3 className="font-bold text-[24px] text-[#F6F6F6] text-center">
          Couleur de cheuveux
        </h3>
        <div className="flex justify-center">
          <div className="flex gap-4">
            {cheveuxColors.map((item) => (
              <div
                key={`origin-${item.title}`}
                className="relative w-[167px] h-[206px] cursor-pointer rounded-4xl"
                style={{
                  background: `url(${item.src}) no-repeat center / cover`,
                }}
                onClick={() => setCheveuxColor(item)}
              >
                <div className="relative z-10 w-full h-full flex justify-center items-end p-4">
                  <p className="font-bold text-[24px]">{item.title}</p>
                </div>
                {item.title !== cheveuxColor.title && (
                  <div className="absolute top-0 left-0 w-full h-full bg-[#000000]/63"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <h3 className="font-bold text-[24px] text-[#F6F6F6] text-center">
          Couleur des yeux
        </h3>
        <div className="flex justify-center">
          <div className="flex gap-4">
            {eyesColors.map((item) => (
              <div
                key={`origin-${item.title}`}
                className="relative w-[167px] h-[206px] cursor-pointer rounded-4xl"
                style={{
                  background: `url(${item.src}) no-repeat center / cover`,
                }}
                onClick={() => setEyesColor(item)}
              >
                <div className="relative z-10 w-full h-full flex justify-center items-end p-4">
                  <p className="font-bold text-[24px]">{item.title}</p>
                </div>
                {item.title !== eyesColor.title && (
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

export default CheveuxSection;
