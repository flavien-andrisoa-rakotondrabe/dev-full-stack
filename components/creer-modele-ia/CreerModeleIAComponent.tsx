'use client';

import Link from 'next/link';
import qs from 'query-string';
import TopMenu from '../generer/TopMenu';
import UserProfile from '../UserProfile';
import OriginSection from '../generer/OriginSection';
import CheveuxSection from '../generer/CheveuxSection';
import CorpsSection from '../generer/CorpsSection';
import NameSection from './NameSection';
import ResumeSection from './ResumeSection';

import { useEffect, useState } from 'react';
import {
  cheveuxColors,
  cheveuxOptions,
  corpsOptions,
  eyesColors,
  originOptions,
  penchantOptions,
  personalityOptions,
  poitrineOptions,
  professionOptions,
  relationOptions,
  voixOptions,
} from '@/lib/options';
import { createSteps } from '@/lib/steps';
import { genreMenu } from '@/lib/route';
import { usePathname, useRouter } from 'next/navigation';
import { useQuery } from '@/providers/QueryProvider';

const CreerModeleIAComponent = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { currentQuery } = useQuery();

  const [origin, setOrigin] = useState(originOptions[0]);
  const [age, setAge] = useState(22);

  const [cheveuxType, setCheveuxType] = useState(cheveuxOptions[0]);
  const [cheveuxColor, setCheveuxColor] = useState(cheveuxColors[0]);
  const [eyesColor, setEyesColor] = useState(eyesColors[0]);

  const [corpsType, setCorpsType] = useState(corpsOptions[0]);
  const [poitrineType, setPoitrineType] = useState(poitrineOptions[0]);

  const [personality, setPersonality] = useState(personalityOptions[2]);
  const [relation, setRelation] = useState(relationOptions[2].title);
  const [profession, setProfession] = useState(professionOptions[2]);
  const [penchant, setPenchant] = useState(penchantOptions[2]);
  const [voix, setVoix] = useState(voixOptions[2].title);

  const [actualStep, setActualStep] = useState(createSteps[0]);

  useEffect(() => {
    if (
      !currentQuery?.genre ||
      (currentQuery?.genre && !genreMenu.includes(currentQuery.genre))
    ) {
      const url = qs.stringifyUrl({
        url: pathname,
        query: { ...currentQuery, genre: genreMenu[0] },
      });

      router.push(url);
    }
  }, [currentQuery]);

  const handleNext = () => {
    const actualIndex = createSteps.findIndex((item) => item === actualStep);

    if (actualIndex < createSteps.length - 1) {
      setActualStep(createSteps[actualIndex + 1]);
    }
  };

  return (
    <div className="p-8 flex flex-col gap-[47px]">
      <div className="flex justify-between">
        <div className="flex items-center gap-[72px]">
          {actualStep === createSteps[0] && (
            <TopMenu
              queryKey="genre"
              type="link"
              menu={genreMenu}
              actualValue={currentQuery?.genre || genreMenu[0]}
            />
          )}
        </div>
        <UserProfile />
      </div>

      <div className="flex flex-col gap-[50px]">
        {actualStep === createSteps[0] && (
          <h1 className="font-bold text-[40px] text-(--color-primary)">
            Créer ma copine IA
          </h1>
        )}

        <div className="flex flex-col gap-[50px]">
          {actualStep === createSteps[0] ? (
            <OriginSection
              origin={origin}
              setOrigin={setOrigin}
              age={age}
              setAge={setAge}
              handleNext={handleNext}
            />
          ) : actualStep === createSteps[1] ? (
            <CheveuxSection
              cheveuxType={cheveuxType}
              setCheveuxType={setCheveuxType}
              cheveuxColor={cheveuxColor}
              setCheveuxColor={setCheveuxColor}
              eyesColor={eyesColor}
              setEyesColor={setEyesColor}
              handleNext={handleNext}
            />
          ) : actualStep === createSteps[2] ? (
            <CorpsSection
              corpsType={corpsType}
              setCorpsType={setCorpsType}
              poitrineType={poitrineType}
              setPoitrineType={setPoitrineType}
              handleNext={handleNext}
            />
          ) : actualStep === createSteps[3] ? (
            <NameSection
              personality={personality}
              setPersonality={setPersonality}
              relation={relation}
              setRelation={setRelation}
              profession={profession}
              setProfession={setProfession}
              penchant={penchant}
              setPenchant={setPenchant}
              voix={voix}
              setVoix={setVoix}
              handleNext={handleNext}
            />
          ) : (
            actualStep === createSteps[4] && <ResumeSection />
          )}
        </div>
      </div>
    </div>
  );
};

export default CreerModeleIAComponent;
