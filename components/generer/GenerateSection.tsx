'use client';

import Image from 'next/image';
import SuggestionList from './SuggestionList';

import { Dispatch, SetStateAction } from 'react';
import { generateurMenu, suggestionMenu } from '@/lib/route';
import {
  accessoireOptions,
  actionOptions,
  imageOptions,
  poseOptions,
  sceneOptions,
  vetementOptions,
} from '@/lib/options';
import TopMenu from './TopMenu';

const GenerateSection = ({
  generateurType,
  setGenerateurType,
  suggestionType,
  setSuggestionType,
  description,
  setDescription,
  vetementType,
  setVetementType,
  actionType,
  setActionType,
  poseType,
  setPoseType,
  sceneType,
  setSceneType,
  accessoireType,
  setAccessoireType,
  imageNumber,
  setImageNumber,
  handleSubmit,
}: {
  generateurType: string;
  setGenerateurType: Dispatch<SetStateAction<string>>;
  suggestionType: string;
  setSuggestionType: Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  vetementType: string;
  setVetementType: Dispatch<SetStateAction<string>>;
  actionType: string;
  setActionType: Dispatch<SetStateAction<string>>;
  poseType: string;
  setPoseType: Dispatch<SetStateAction<string>>;
  sceneType: string;
  setSceneType: Dispatch<SetStateAction<string>>;
  accessoireType: string;
  setAccessoireType: Dispatch<SetStateAction<string>>;
  imageNumber: number;
  setImageNumber: Dispatch<SetStateAction<number>>;
  handleSubmit: () => void;
}) => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-8">
        <div className="flex items-end gap-20">
          <h1 className="font-bold text-[32px]">Générateur</h1>
          <div className="flex items-center gap-[50px]">
            <TopMenu
              type="simple"
              menu={generateurMenu}
              actualValue={generateurType}
              onClick={(value) => setGenerateurType(value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex gap-8">
            <div
              className="relative w-[320px] h-[303px] rounded-4xl"
              style={{
                background: 'url(/images/nowak.jpg) no-repeat center / cover',
              }}
            >
              <div className="relative z-10 w-full h-full flex items-end px-6 py-3.5">
                <p className="font-medium text-[24px]">Mila nowak</p>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/15 to-transparent"></div>
            </div>

            <div className="relative flex-1">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Mettre une description"
                className="w-full h-full font-medium text-[16px] bg-[#171717] ps-[103px] pe-9 py-[38px] rounded-4xl resize-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                className="absolute top-9 left-[45px]"
              >
                <path
                  d="M18.4673 2.28563L17.2313 3.52163L5.86999 14.8816C5.10066 15.6523 4.71533 16.0376 4.38466 16.4616C3.99452 16.9623 3.65968 17.5036 3.38599 18.0763C3.15533 18.5616 2.98333 19.079 2.63933 20.111L1.18066 24.4856L0.823327 25.555C0.739746 25.8042 0.727345 26.0719 0.787519 26.3278C0.847693 26.5837 0.978057 26.8178 1.16396 27.0037C1.34986 27.1896 1.58392 27.3199 1.83984 27.3801C2.09577 27.4403 2.3634 27.4279 2.61266 27.3443L3.68199 26.987L8.05666 25.5283C9.08999 25.1843 9.60599 25.0123 10.0913 24.7816C10.6664 24.5079 11.2047 24.175 11.706 23.783C12.13 23.4523 12.5153 23.067 13.2847 22.2976L24.646 10.9363L25.882 9.70029C26.8652 8.71705 27.4176 7.38348 27.4176 5.99296C27.4176 4.60244 26.8652 3.26887 25.882 2.28563C24.8987 1.30238 23.5652 0.75 22.1747 0.75C20.7841 0.75 19.4506 1.30238 18.4673 2.28563Z"
                  stroke="#8E8E8E"
                  strokeWidth="1.5"
                />
                <path
                  opacity="0.5"
                  d="M17.2313 3.51953C17.2313 3.51953 17.386 6.1462 19.7033 8.46353C22.0207 10.7809 24.646 10.9342 24.646 10.9342M3.682 26.9862L1.18066 24.4849"
                  stroke="#8E8E8E"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col gap-[26px]">
            <div className="flex flex-end gap-[54px]">
              <h2 className="font-medium text-[24px] mb-3">Suggestion</h2>
              <div className="flex items-center gap-[30px]">
                <TopMenu
                  type="simple"
                  menu={suggestionMenu}
                  actualValue={suggestionType}
                  onClick={(value) => setSuggestionType(value)}
                />
              </div>
            </div>

            {suggestionType === suggestionMenu[0] ? (
              <SuggestionList
                actualValue={vetementType}
                options={vetementOptions}
                onClick={(value) => setVetementType(value)}
              />
            ) : suggestionType === suggestionMenu[1] ? (
              <SuggestionList
                actualValue={actionType}
                options={actionOptions}
                onClick={(value) => setActionType(value)}
              />
            ) : suggestionType === suggestionMenu[2] ? (
              <SuggestionList
                actualValue={poseType}
                options={poseOptions}
                onClick={(value) => setPoseType(value)}
              />
            ) : suggestionType === suggestionMenu[3] ? (
              <SuggestionList
                actualValue={accessoireType}
                options={accessoireOptions}
                onClick={(value) => setAccessoireType(value)}
              />
            ) : (
              suggestionType === suggestionMenu[4] && (
                <SuggestionList
                  actualValue={sceneType}
                  options={sceneOptions}
                  onClick={(value) => setSceneType(value)}
                />
              )
            )}
          </div>

          {generateurType === generateurMenu[0] && (
            <div className="flex flex-col gap-8">
              <h2 className="font-medium text-[24px] mb-3">Nombre d'images</h2>
              <div className="flex items-center gap-6">
                {imageOptions.map((item) => (
                  <div
                    key={`image-number-${item.value}`}
                    className={`w-[83px] h-[43px] flex items-center justify-center gap-2.5 rounded-[12px] ${
                      imageNumber === item.value
                        ? 'bg-(--color-primary)'
                        : 'bg-[#575757] cursor-pointer'
                    }`}
                    onClick={() => setImageNumber(item.value)}
                  >
                    <div className="w-4 h-4">
                      <Image
                        src={item.src}
                        alt={`${item.value}`}
                        width={16}
                        height={16}
                        className="w-full h-full"
                      />
                    </div>
                    <p className="font-medium text-[15px]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            className="w-full h-14 flex justify-center items-center bg-(--color-primary) rounded-[12px] cursor-pointer"
            onClick={handleSubmit}
          >
            <p className="font-medium text-[24px]">Génerer</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateSection;
