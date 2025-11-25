'use client';

import Image from 'next/image';

import { personalityTypes } from '@/lib/options';
import { Dispatch, SetStateAction, useState } from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

type PersonalityType =
  | 'personality'
  | 'relation'
  | 'profession'
  | 'penchant'
  | 'voix';

const NameSection = ({
  personality,
  setPersonality,
  handleNext,
}: {
  personality: string;
  setPersonality: Dispatch<SetStateAction<string>>;
  handleNext: () => void;
}) => {
  const personalityData: {
    title: string;
    tag: PersonalityType;
    value: string;
  }[] = [
    {
      title: 'Choisir la personnalité',
      tag: 'personality',
      value: personality,
    },
    {
      title: 'Choisir le type de relation',
      tag: 'relation',
      value: 'Inconnue',
    },
    { title: 'Choisir la profession', tag: 'profession', value: 'Étudiante' },
    {
      title: 'Quels sont ses penchants sexuels',
      tag: 'penchant',
      value: 'Dirty Talk',
    },
    { title: 'Choisir la voix', tag: 'voix', value: 'Voix 4' },
  ];
  const [open, setOpen] = useState<PersonalityType | null>(null);
  const [name, setName] = useState('');
  const [actualPersonality, setActualPersonality] = useState(personality);

  return (
    <div className="relative flex flex-col gap-16">
      <div className="flex flex-col gap-10">
        <h3 className="font-bold text-[24px] text-[#F6F6F6] text-center">
          Choisis un nom
        </h3>
        <div className="w-full flex justify-center">
          <div className="max-w-[790px] w-full flex flex-col items-center gap-4">
            <input
              type="text"
              value={name}
              maxLength={20}
              placeholder="Elizabeth Garcia"
              className="w-full h-12 px-4 font-400 text-[16px] backdrop-blur-2xl rounded-2xl"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
              }}
              onChange={(event) => setName(event.target.value)}
            />
            <div className="w-full flex justify-end">
              <p className="font-400 text-[16px] text-[#575757]">
                {name.length}/20
              </p>
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
            {personalityData.map((item) => (
              <div
                key={`personality-data-${item.title}`}
                className="w-[320px] flex flex-col gap-2 p-4 backdrop-blur-2xl rounded-2xl cursor-pointer"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
                }}
                onClick={() => setOpen(item.tag)}
              >
                <h6 className="font-400 text-[16px] text-[#7D7D7D] uppercase">
                  {item.title}
                </h6>
                <p className="font-bold text-[16px]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AlertDialog open={open !== null}>
        <AlertDialogTitle className="hidden"></AlertDialogTitle>
        <AlertDialogContent
          className="max-w-none! w-full h-screen backdrop-blur-2xl border-none p-0 rounded-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
          }}
        >
          <div className="relative w-full h-full flex flex-col justify-between py-20">
            <Image
              src="/icons/close.svg"
              alt="Close"
              width={32}
              height={32}
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(null)}
            />

            <div className="flex flex-col items-center gap-16">
              <h5 className="text-center font-bold text-[24px]">
                Modifier la personnalité
              </h5>
              <div className="max-w-[850px] flex flex-wrap justify-center gap-6">
                {personalityTypes.map((item) => (
                  <div
                    key={`personality-${item}`}
                    onClick={() => setActualPersonality(item)}
                    className={`flex justify-center items-center p-5 rounded-2xl ${
                      actualPersonality === item
                        ? 'bg-(--color-primary)'
                        : 'bg-[#727272] hover:text-(--color-primary) cursor-pointer'
                    }`}
                  >
                    <p className="font-bold text-[24px] select-none">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-8">
              <button
                type="reset"
                onClick={() => {
                  setActualPersonality(personality);
                  setOpen(null);
                }}
                className="font-medium text-[24px] px-10 py-5 bg-[#575757] rounded-[12px] select-none cursor-pointer"
              >
                Annuler
              </button>
              <button
                type="submit"
                onClick={() => {
                  setPersonality(actualPersonality);
                  setOpen(null);
                }}
                className="font-medium text-[24px] px-10 py-5 bg-(--color-primary) rounded-[12px] select-none cursor-pointer"
              >
                Enregistrer les modification
              </button>
            </div>
          </div>
        </AlertDialogContent>
      </AlertDialog>

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
