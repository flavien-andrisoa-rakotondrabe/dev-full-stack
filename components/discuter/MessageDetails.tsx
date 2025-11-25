'use client';

import Image from 'next/image';

const userInfos = [
  [
    { label: 'Age', value: '23 ans' },
    { label: 'Ethnicité', value: 'Asiatique' },
  ],
  [
    { label: 'Corps', value: 'Mince' },
    { label: 'Profession', value: 'Étudiante' },
  ],
  [
    { label: 'Relation', value: 'Célibataire' },
    { label: 'Personnalité', value: 'Soumise' },
  ],
  [
    { label: '', value: '' },
    { label: 'Kinks', value: 'Flirt timide' },
  ],
];

const MessageDetails = () => {
  return (
    <div className="flex flex-col gap-[21px] w-[400px]">
      <div className="relative flex items-center">
        <Image
          src="/images/elizabeth.png"
          alt="Elizabeth"
          width={400}
          height={420}
          className="max-h-[420px] max- min-h-[420px] object-cover rounded-4xl"
        />
        <div className="absolute w-full flex justify-between">
          <Image
            src="/icons/arrow-left.svg"
            alt="Left"
            width={40}
            height={40}
            className="cursor-pointer"
          />
          <Image
            src="/icons/play-video.svg"
            alt="Play"
            width={40}
            height={40}
            className="cursor-pointer"
          />
          <Image
            src="/icons/arrow-right.svg"
            alt="Right"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-[24px]">Elizabeth Garcia</h1>
          <p className="font-400 text-[16px] text-justify">
            Katarina Sommerfeld est une étudiante en médecine allemande connue
            pour son charme et son sourire. Sociable et intelligente, c'est le
            centre d'attention de toutes les fêtes, surtout quand il y a de la
            bière ! Katarina aime rencontrer du monde et essaie toujours de
            laisser une impression durable.
          </p>
        </div>
        <div className="flex flex-col gap-[17px] text-[14px]">
          <p className="font-bold text-[#3D3D3D]">À propos de moi:</p>

          <div className="flex gap-8">
            {userInfos.map((tab, index) => (
              <div key={`tab-${index}`} className="flex flex-col gap-8">
                {tab.map((item) =>
                  item.label === '' ? (
                    <div key={item.label} className="h-[50px]" />
                  ) : (
                    <div key={item.label} className="flex flex-col gap-2">
                      <h6 className="font-400 text-[#3D3D3D]">{item.label}</h6>
                      <p className="font-bold whitespace-nowrap">
                        {item.value}
                      </p>
                    </div>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageDetails;
