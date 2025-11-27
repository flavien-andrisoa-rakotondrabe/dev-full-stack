'use client';

import Popup from '../Popup';
import Image from 'next/image';
import NextButton from '../generer/NextButton';

import {
  penchantOptions,
  personalityOptions,
  professionOptions,
  relationOptions,
  voixOptions,
} from '@/lib/options';
import { Dispatch, SetStateAction, useState } from 'react';

type PersonalityType =
  | 'personality'
  | 'relation'
  | 'profession'
  | 'penchant'
  | 'voix';

const NameSection = ({
  personality,
  setPersonality,
  relation,
  setRelation,
  profession,
  setProfession,
  penchant,
  setPenchant,
  voix,
  setVoix,
  handleNext,
}: {
  personality: string;
  setPersonality: Dispatch<SetStateAction<string>>;
  relation: string;
  setRelation: Dispatch<SetStateAction<string>>;
  profession: string;
  setProfession: Dispatch<SetStateAction<string>>;
  penchant: string;
  setPenchant: Dispatch<SetStateAction<string>>;
  voix: string;
  setVoix: Dispatch<SetStateAction<string>>;
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
      value: relation,
    },
    { title: 'Choisir la profession', tag: 'profession', value: profession },
    {
      title: 'Quels sont ses penchants sexuels',
      tag: 'penchant',
      value: penchant,
    },
    { title: 'Choisir la voix', tag: 'voix', value: voix },
  ];
  const [open, setOpen] = useState<PersonalityType | null>(null);
  const [name, setName] = useState('');
  const [actualPersonality, setActualPersonality] = useState(personality);
  const [actualProfession, setActualProfession] = useState(profession);
  const [actualRelation, setActualRelation] = useState(relation);
  const [actualPenchant, setActualPenchant] = useState(penchant);
  const [actualVoix, setActualVoix] = useState(voix);

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
                className="w-[360px] flex flex-col gap-2 p-4 backdrop-blur-2xl rounded-2xl cursor-pointer"
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

      <Popup
        open={open === 'personality'}
        title="Modifier la personnalité"
        onClose={() => {
          setOpen(null);
          setActualPersonality(personality);
        }}
        handleSubmit={() => {
          setPersonality(actualPersonality);
          setOpen(null);
        }}
      >
        <div className="max-w-[720px] flex flex-wrap justify-center gap-6">
          {personalityOptions.map((item) => (
            <div
              key={`personality-${item}`}
              onClick={() => setActualPersonality(item)}
              className={`flex justify-center items-center p-4 rounded-2xl ${
                actualPersonality === item
                  ? 'bg-(--color-primary)'
                  : 'bg-[#727272] hover:text-(--color-primary) cursor-pointer'
              }`}
            >
              <p className="font-bold text-[20px] select-none">{item}</p>
            </div>
          ))}
        </div>
      </Popup>

      <Popup
        open={open === 'relation'}
        title="Modifier la relation"
        onClose={() => {
          setOpen(null);
          setActualRelation(relation);
        }}
        handleSubmit={() => {
          setRelation(actualRelation);
          setOpen(null);
        }}
      >
        <div className="max-w-[800px] flex flex-wrap justify-center gap-6">
          {relationOptions.map((item) => (
            <div
              key={`relation-${item.title}`}
              className={`relative w-[140px] h-40 flex justify-center items-end p-1 rounded-3xl ${
                actualRelation === item.title
                  ? ''
                  : 'hover:text-(--color-primary) cursor-pointer'
              }`}
              style={{
                background: `url(${item.src}) no-repeat center / cover`,
              }}
              onClick={() => setActualRelation(item.title)}
            >
              <p className="font-bold text-[20px] select-none">{item.title}</p>
              {actualRelation === item.title && (
                <Image
                  src="/icons/check.svg"
                  alt="Check"
                  width={20}
                  height={20}
                  className="absolute top-2 right-2"
                />
              )}
            </div>
          ))}
        </div>
      </Popup>

      <Popup
        open={open === 'profession'}
        title="Modifier la profession"
        onClose={() => {
          setOpen(null);
          setActualProfession(profession);
        }}
        handleSubmit={() => {
          setProfession(actualProfession);
          setOpen(null);
        }}
      >
        <div className="max-w-[850px] flex flex-wrap justify-center gap-6">
          {professionOptions.map((item) => (
            <div
              key={`profession-${item}`}
              onClick={() => setActualProfession(item)}
              className={`flex justify-center items-center p-4 rounded-2xl ${
                actualProfession === item
                  ? 'bg-(--color-primary)'
                  : 'bg-[#727272] hover:text-(--color-primary) cursor-pointer'
              }`}
            >
              <p className="font-bold text-[20px] select-none">{item}</p>
            </div>
          ))}
        </div>
      </Popup>

      <Popup
        open={open === 'penchant'}
        title="Modifier le penchant sexuel"
        onClose={() => {
          setOpen(null);
          setActualPenchant(penchant);
        }}
        handleSubmit={() => {
          setPenchant(actualPenchant);
          setOpen(null);
        }}
      >
        <div className="max-w-[910px] flex flex-wrap justify-center gap-6">
          {penchantOptions.map((item) => (
            <div
              key={`penchant-${item}`}
              onClick={() => setActualPenchant(item)}
              className={`flex justify-center items-center p-4 rounded-2xl ${
                actualPenchant === item
                  ? 'bg-(--color-primary)'
                  : 'bg-[#727272] hover:text-(--color-primary) cursor-pointer'
              }`}
            >
              <p className="font-bold text-[20px] select-none">{item}</p>
            </div>
          ))}
        </div>
      </Popup>

      <Popup
        open={open === 'voix'}
        title="Modifier la voix"
        onClose={() => {
          setOpen(null);
          setActualVoix(voix);
        }}
        handleSubmit={() => {
          setVoix(actualVoix);
          setOpen(null);
        }}
      >
        <div className="max-w-[800px] flex flex-wrap justify-center gap-6">
          {voixOptions.map((item) => (
            <div
              key={`voix-${item.title}`}
              onClick={() => setActualVoix(item.title)}
              className={`relative w-[140px] h-[170px] flex flex-col gap-4 justify-center items-center rounded-3xl bg-[#161616] ${
                actualVoix === item.title
                  ? 'outline-2 outline-[#DFDFDF]'
                  : 'hover:text-(--color-primary)'
              }`}
            >
              <div
                className="relative w-16 h-16 flex justify-center items-center cursor-pointer rounded-full"
                style={{
                  background: `url(${item.src}) no-repeat center / cover`,
                }}
              >
                <Image
                  src="/icons/play-simple.svg"
                  alt="Play"
                  width={16}
                  height={16}
                  className="absolute cursor-pointer"
                />
              </div>

              <div className="flex flex-col items-center gap-1">
                <h6 className="font-bold text-[18px] select-none">
                  {item.title}
                </h6>
                <p className="font-400 text-[12px] text-[#938E8E]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Popup>

      <div className="flex justify-center">
        <NextButton onClick={handleNext} />
      </div>
    </div>
  );
};

export default NameSection;
