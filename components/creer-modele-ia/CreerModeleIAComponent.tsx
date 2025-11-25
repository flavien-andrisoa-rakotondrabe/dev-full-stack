'use client';

import TopMenu from '../TopMenu';
import OriginSection from './OriginSection';
import CheveuxSection from './CheveuxSection';
import CorpsSection from './CorpsSection';
import NameSection from './NameSection';

import { useState } from 'react';
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

const steps = ['origin', 'cheveux', 'corps', 'name', 'generate'];

const CreerModeleIAComponent = () => {
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

  const [actualStep, setActualStep] = useState(steps[0]);

  const handleNext = () => {
    const actualIndex = steps.findIndex((item) => item === actualStep);

    if (actualIndex < steps.length - 1) {
      setActualStep(steps[actualIndex + 1]);
    }
  };

  return (
    <div className="flex flex-col gap-[50px]">
      {actualStep === steps[0] && (
        <h1 className="font-bold text-[40px] text-(--color-primary)">
          Créer une personnage IA
        </h1>
      )}

      <div className="flex flex-col gap-[50px]">
        {actualStep === steps[0] && <TopMenu />}

        {actualStep === steps[0] ? (
          <OriginSection
            origin={origin}
            setOrigin={setOrigin}
            age={age}
            setAge={setAge}
            handleNext={handleNext}
          />
        ) : actualStep === steps[1] ? (
          <CheveuxSection
            cheveuxType={cheveuxType}
            setCheveuxType={setCheveuxType}
            cheveuxColor={cheveuxColor}
            setCheveuxColor={setCheveuxColor}
            eyesColor={eyesColor}
            setEyesColor={setEyesColor}
            handleNext={handleNext}
          />
        ) : actualStep === steps[2] ? (
          <CorpsSection
            corpsType={corpsType}
            setCorpsType={setCorpsType}
            poitrineType={poitrineType}
            setPoitrineType={setPoitrineType}
            handleNext={handleNext}
          />
        ) : (
          actualStep === steps[3] && (
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
          )
        )}
      </div>
    </div>
  );
};

export default CreerModeleIAComponent;
