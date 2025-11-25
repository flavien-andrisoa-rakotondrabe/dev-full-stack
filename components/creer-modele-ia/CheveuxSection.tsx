'use client';

import Image from 'next/image';

import { cheveuxColors, cheveuxTypes, eyesColors } from '@/lib/options';
import { OptionType } from '@/types/optionType';
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
  cheveuxType: OptionType;
  setCheveuxType: Dispatch<SetStateAction<OptionType>>;
  cheveuxColor: OptionType;
  setCheveuxColor: Dispatch<SetStateAction<OptionType>>;
  eyesColor: OptionType;
  setEyesColor: Dispatch<SetStateAction<OptionType>>;
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
            {cheveuxTypes.map((item) => (
              <div
                key={`cheveux-types-${item.title}`}
                className="relative w-[167px] h-[206px] cursor-pointer"
                onClick={() => setCheveuxType(item)}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={167}
                  height={206}
                  className="w-full h-full object-cover rounded-4xl"
                />
                <div className="absolute z-10 bottom-0 w-full flex justify-center p-4">
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
                className="relative w-[167px] h-[206px] cursor-pointer"
                onClick={() => setCheveuxColor(item)}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={167}
                  height={206}
                  className="w-full h-full object-cover rounded-4xl"
                />
                <div className="absolute z-10 bottom-0 w-full flex justify-center p-4">
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
                className="relative w-[167px] h-[206px] cursor-pointer"
                onClick={() => setEyesColor(item)}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={167}
                  height={206}
                  className="w-full h-full object-cover rounded-4xl"
                />
                <div className="absolute z-10 bottom-0 w-full flex justify-center p-4">
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
        <button
          className="w-[232px] h-14 flex justify-center items-center uppercase bg-(--color-primary) rounded-[12px] cursor-pointer"
          onClick={handleNext}
        >
          <span className="font-medium text-[24px]">Suivant</span>
        </button>
      </div>
    </div>
  );
};

export default CheveuxSection;
