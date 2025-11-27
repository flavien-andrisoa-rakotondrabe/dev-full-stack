'use client';

import Image from 'next/image';
import NextButton from './NextButton';

import { Dispatch, SetStateAction } from 'react';
import { Slider } from '../ui/slider';
import { originOptions } from '@/lib/options';
import { OptionType } from '@/types/optionType';

const OriginSection = ({
  origin,
  age,
  setOrigin,
  setAge,
  handleNext,
}: {
  origin: OptionType;
  age: number;
  setOrigin: Dispatch<SetStateAction<OptionType>>;
  setAge: Dispatch<SetStateAction<number>>;
  handleNext: () => void;
}) => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-10">
        <h3 className="font-bold text-[24px] text-[#F6F6F6] text-center">
          Choisir l'origine ethnique
        </h3>
        <div className="flex justify-center">
          <div className="flex gap-4">
            {originOptions.map((item) => (
              <div
                key={`origin-${item.title}`}
                className="relative w-[203px] h-[264px] cursor-pointer rounded-4xl"
                style={{
                  background: `url(${item.src}) no-repeat center / cover`,
                }}
                onClick={() => setOrigin(item)}
              >
                <div className="relative z-10 w-full h-full flex justify-center items-end p-4">
                  <p className="font-bold text-[24px]">{item.title}</p>
                </div>
                {item.title !== origin.title && (
                  <div className="absolute top-0 left-0 w-full h-full bg-[#000000]/63"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <h3 className="font-bold text-[24px] text-[#F6F6F6] text-center">
          Choisir l'âge
        </h3>

        <div className="flex justify-center">
          <div
            className="w-[790px] flex flex-col justify-center items-center px-16 py-6 gap-7 backdrop-blur-2xl rounded-2xl"
            style={{
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
            }}
          >
            <div className="flex justify-center items-center w-max p-2.5 border border-(--color-primary) rounded-[8px]">
              <p className="font-medium text-[16px] uppercase">{age} ANS</p>
            </div>
            <div className="w-full flex items-center gap-5 font-semibold text-[16px]">
              <p>18</p>
              <Slider
                value={[age]}
                min={18}
                max={39}
                step={1}
                onValueChange={(value) => setAge(value[0])}
                trackClassName="bg-[#6D6D6D]"
                rangeClassName="bg-(--color-primary)"
                thumbClassName="bg-[#FFFFFF]"
              />
              <p>+39</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <NextButton onClick={handleNext} />
      </div>
    </div>
  );
};

export default OriginSection;
