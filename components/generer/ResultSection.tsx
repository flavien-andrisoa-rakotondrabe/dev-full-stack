'use client';

import Image from 'next/image';

import { useState } from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

const sectionMenu = ['Apparence', 'Personnage'];

const ResultSection = () => {
  const data: {
    label: string;
    value: string;
    src?: string;
    type?: string;
    calc?: number;
  }[][] = [
    [
      {
        label: 'Ethnicité',
        value: 'Occidental',
        src: '/images/lunah-moreno.png',
        calc: 76,
      },
      {
        label: 'Âge',
        value: '22 ans',
      },
      {
        label: 'Couleur des yeux',
        value: 'Bleu',
        src: '/images/yeux/bleu.png',
        calc: 62,
      },
      {
        label: 'Type de corps',
        value: 'Moyenne',
        src: '/images/corps.png',
        calc: 51,
      },
      {
        label: 'Taille de poitrine',
        value: 'Forte (D)',
        src: '/images/poitrine.jpg',
        calc: 23,
      },
      {
        label: 'Coiffure',
        value: 'Lisse',
        src: '/images/cheveux/lisse.png',
        calc: 55,
      },
      {
        label: 'Couleur de cheveux',
        value: 'Rose',
        src: '/images/cheveux/rose.png',
        calc: 48,
      },
    ],
    [
      { label: 'Nom', value: 'Elizabeth Garcia' },
      { label: 'Personnalité', value: 'Soumise' },
      { label: 'Relation', value: 'Inconnue' },
      { label: 'Profession', value: 'Étudiante' },
      { label: 'Kinks', value: 'Dirty Talk' },
      { label: 'Voix', value: 'Voix 4', src: '/images/voix.jpg', calc: 62 },
    ],
  ];

  const [actualMenu, setActualMenu] = useState(sectionMenu[0]);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="w-full h-full ps-[149px] flex items-center">
      <div className="flex gap-8">
        <div
          className="w-[400px] h-[600px] rounded-4xl"
          style={{
            background: 'url(/images/result.png) no-repeat center / cover',
          }}
        />

        <div className="flex-1 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <h1 className="font-bold text-[24px]">Elizabeth Garcia, 22</h1>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-[8px] select-none">
                    <Image
                      src="/images/relation/etudiante.png"
                      alt="Etudiante"
                      width={32}
                      height={32}
                      className="w-full h-full rounded-[8px]"
                    />
                  </div>
                  <p>Etudiante</p>
                </div>
              </div>

              <div className="flex gap-4">
                {sectionMenu.map((item) => (
                  <div
                    key={`section-menu-${item}`}
                    className={`flex justify-center items-center py-2.5 px-5 rounded-full select-none ${
                      actualMenu === item
                        ? 'bg-(--color-primary) cursor-default'
                        : 'bg-[#575757] cursor-pointer'
                    }`}
                    onClick={() => setActualMenu(item)}
                  >
                    <p className="font-medium text-[16px]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {(actualMenu === sectionMenu[1] ? data[1] : data[0]).map(
                (item) => (
                  <div
                    key={`personnage-${item.label}`}
                    className="relative w-[203px] py-3 px-4 rounded-2xl"
                    style={{
                      background: item?.src
                        ? `url(${item.src}) no-repeat center / cover`
                        : 'radial-gradient(80.88% 649.74% at 25.37% 25.74%, #0C0C0C 0%, #875555 100%)',
                    }}
                  >
                    <div className="relative z-10">
                      <h6 className="font-medium text-[#6C6C6C] text-[16px] cursor-default">
                        {item.label}
                      </h6>
                      <p className="font-bold text-[14px]">{item.value}</p>
                    </div>
                    {item?.calc && (
                      <div
                        className="absolute w-full h-full top-0 left-0 rounded-2xl"
                        style={{
                          backgroundColor: `rgba(0,0,0,0.${item.calc})`,
                        }}
                      />
                    )}
                  </div>
                ),
              )}
            </div>
          </div>

          <button
            className="w-[302px] h-[53px] flex justify-center items-center bg-(--color-primary) rounded-[12px] cursor-pointer"
            onClick={() => setShowPopup(true)}
          >
            <p className="font-medium text-[24px]">Donner vie à mon IA</p>
          </button>
        </div>

        <AlertDialog open={showPopup}>
          <AlertDialogTitle className="hidden"></AlertDialogTitle>
          <AlertDialogContent
            className="max-w-none! w-full h-screen backdrop-blur-2xl border-none p-0 rounded-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
            }}
          >
            <div className="relative w-full h-full flex flex-col justify-between py-18">
              <Image
                src="/icons/close.svg"
                alt="Close"
                width={32}
                height={32}
                className="absolute top-4 right-4 cursor-pointer"
                onClick={() => setShowPopup(false)}
              />
              <div className="flex flex-col items-center gap-[41px]">
                <div className="w-[409px] h-[434px] flex justify-center items-center gap-16 bg-[#161616] rounded-4xl">
                  <h6 className="font-bold text-[26px]">
                    Processus de payement
                  </h6>
                </div>

                <div className="flex justify-center gap-8">
                  <button
                    type="reset"
                    onClick={() => setShowPopup(false)}
                    className="font-medium text-[20px] px-8 py-4 bg-[#575757] rounded-[12px] select-none cursor-pointer"
                  >
                    Annuler
                  </button>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="font-medium text-[20px] px-8 py-4 bg-(--color-primary) rounded-[12px] select-none cursor-pointer"
                  >
                    Payer
                  </button>
                </div>
              </div>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default ResultSection;
