'use client';

import Image from 'next/image';

import { corpsTypes, poitrineTypes } from '@/lib/options';
import { OptionType } from '@/types/optionType';
import { Dispatch, SetStateAction } from 'react';

const NameSection = ({
  corpsType,
  setCorpsType,
  poitrineType,
  setPoitrineType,
  handleNext,
}: {
  corpsType: OptionType;
  setCorpsType: Dispatch<SetStateAction<OptionType>>;
  poitrineType: OptionType;
  setPoitrineType: Dispatch<SetStateAction<OptionType>>;
  handleNext: () => void;
}) => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-10">
        <h3 className="font-bold text-[24px] text-[#F6F6F6] text-center">
          Choisis un nom
        </h3>
        <div className="w-full flex justify-center">
          <div className="max-w-[790px] w-full flex flex-col items-center gap-4">
            <input
              type="text"
              placeholder="Elizabeth Garcia"
              className="w-full h-12 px-4 font-400 text-[16px] backdrop-blur-2xl rounded-2xl"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
              }}
            />
            <div className="w-full flex justify-end">
              <p className="font-400 text-[16px] text-[#575757]">0/20</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-bold text-[24px] text-[#F6F6F6] text-center">
            Choisir la personnalité
          </h3>
          <p className="font-400 text-[16px] text-[#7D7D7D]">
            Cliquez pour modifier
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 justify-center gap-8">
            <div
              className="w-[320px] flex flex-col gap-2 p-4 backdrop-blur-2xl rounded-2xl"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
              }}
            >
              <h6 className="font-400 text-[16px] text-[#7D7D7D] uppercase">
                Choisir la personnalité
              </h6>
              <p className="font-bold text-[16px]">Soumise</p>
            </div>

            <div
              className="w-[320px] flex flex-col gap-2 p-4 backdrop-blur-2xl rounded-2xl"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
              }}
            >
              <h6 className="font-400 text-[16px] text-[#7D7D7D] uppercase">
                Choisir le type de relation
              </h6>
              <p className="font-bold text-[16px]">Inconnue</p>
            </div>

            <div
              className="w-[320px] flex flex-col gap-2 p-4 backdrop-blur-2xl rounded-2xl"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
              }}
            >
              <h6 className="font-400 text-[16px] text-[#7D7D7D] uppercase">
                Choisir la profession
              </h6>
              <p className="font-bold text-[16px]">Étudiante</p>
            </div>

            <div
              className="w-[320px] flex flex-col gap-2 p-4 backdrop-blur-2xl rounded-2xl"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
              }}
            >
              <h6 className="font-400 text-[16px] text-[#7D7D7D] uppercase">
                Quels sont ses penchants sexuels
              </h6>
              <p className="font-bold text-[16px]">Dirty Talk</p>
            </div>

            <div
              className="w-[320px] flex flex-col gap-2 p-4 backdrop-blur-2xl rounded-2xl"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
              }}
            >
              <h6 className="font-400 text-[16px] text-[#7D7D7D] uppercase">
                Choisir la voix
              </h6>
              <p className="font-bold text-[16px]">Voix 4</p>
            </div>
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

export default NameSection;
