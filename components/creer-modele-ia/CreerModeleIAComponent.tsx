'use client';

import TopMenu from '../TopMenu';
import OriginSection from './OriginSection';
import CheveuxSection from './CheveuxSection';
import CorpsSection from './CorpsSection';

import { useState } from 'react';
import {
  cheveuxColors,
  cheveuxTypes,
  corpsTypes,
  eyesColors,
  originOptions,
  poitrineTypes,
} from '@/lib/options';
import NameSection from './NameSection';

const steps = ['origin', 'cheveux', 'corps', 'name', 'generate'];

const CreerModeleIAComponent = () => {
  const [origin, setOrigin] = useState(originOptions[0]);
  const [age, setAge] = useState(22);

  const [cheveuxType, setCheveuxType] = useState(cheveuxTypes[0]);
  const [cheveuxColor, setCheveuxColor] = useState(cheveuxColors[0]);
  const [eyesColor, setEyesColor] = useState(eyesColors[0]);

  const [corpsType, setCorpsType] = useState(corpsTypes[0]);
  const [poitrineType, setPoitrineType] = useState(poitrineTypes[0]);

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
              corpsType={corpsType}
              setCorpsType={setCorpsType}
              poitrineType={poitrineType}
              setPoitrineType={setPoitrineType}
              handleNext={handleNext}
            />
          )
        )}
      </div>
    </div>
  );
};

export default CreerModeleIAComponent;
