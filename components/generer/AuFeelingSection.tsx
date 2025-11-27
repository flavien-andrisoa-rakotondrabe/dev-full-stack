'use client';

import TopMenu from './TopMenu';
import OriginSection from './OriginSection';
import CheveuxSection from './CheveuxSection';
import CorpsSection from './CorpsSection';
import GenerateSection from './GenerateSection';

import { useState } from 'react';
import {
  accessoireOptions,
  actionOptions,
  cheveuxColors,
  cheveuxOptions,
  corpsOptions,
  eyesColors,
  imageOptions,
  originOptions,
  poitrineOptions,
  poseOptions,
  sceneOptions,
  vetementOptions,
} from '@/lib/options';
import { generateSteps } from '@/lib/steps';
import { generateurMenu, genererMenu, suggestionMenu } from '@/lib/route';
import { useQuery } from '@/providers/QueryProvider';
import ResultSection from './ResultSection';

const AuFeelingSection = () => {
  const { currentQuery } = useQuery();

  const [origin, setOrigin] = useState(originOptions[0]);
  const [age, setAge] = useState(22);

  const [cheveuxType, setCheveuxType] = useState(cheveuxOptions[0]);
  const [cheveuxColor, setCheveuxColor] = useState(cheveuxColors[0]);
  const [eyesColor, setEyesColor] = useState(eyesColors[0]);

  const [corpsType, setCorpsType] = useState(corpsOptions[0]);
  const [poitrineType, setPoitrineType] = useState(poitrineOptions[0]);

  const [generateurType, setGenerateurType] = useState(generateurMenu[0]);
  const [suggestionType, setSuggestionType] = useState(suggestionMenu[0]);
  const [description, setDescription] = useState('');
  const [vetementType, setVetementType] = useState(vetementOptions[0].title);
  const [actionType, setActionType] = useState(actionOptions[0].title);
  const [poseType, setPoseType] = useState(poseOptions[0].title);
  const [accessoireType, setAccessoireType] = useState(
    accessoireOptions[0].title,
  );
  const [sceneType, setSceneType] = useState(sceneOptions[0].title);
  const [imageNumber, setImageNumber] = useState(imageOptions[0].value);

  const [actualStep, setActualStep] = useState(generateSteps[0]);

  const handleNext = () => {
    const actualIndex = generateSteps.findIndex((item) => item === actualStep);

    if (actualIndex < generateSteps.length - 1) {
      setActualStep(generateSteps[actualIndex + 1]);
    }
  };

  const handleSubmit = async () => {
    const actualIndex = generateSteps.findIndex((item) => item === actualStep);

    if (actualIndex === generateSteps.length - 1) {
      setActualStep(generateSteps[actualIndex + 1]);
    }
  };

  return (
    <div className="flex flex-col gap-[50px]">
      {actualStep === generateSteps[0] && (
        <h1 className="font-bold text-[40px] text-(--color-primary)">
          Créer une personnage IA
        </h1>
      )}

      <div className="flex flex-col gap-[50px]">
        {actualStep === generateSteps[0] && (
          <div className="px-7">
            <TopMenu
              queryKey="filter"
              type={'link'}
              menu={genererMenu}
              actualValue={currentQuery?.filter || genererMenu[0]}
            />
          </div>
        )}

        <div className="w-full flex justify-center">
          {actualStep === generateSteps[0] ? (
            <OriginSection
              origin={origin}
              setOrigin={setOrigin}
              age={age}
              setAge={setAge}
              handleNext={handleNext}
            />
          ) : actualStep === generateSteps[1] ? (
            <CheveuxSection
              cheveuxType={cheveuxType}
              setCheveuxType={setCheveuxType}
              cheveuxColor={cheveuxColor}
              setCheveuxColor={setCheveuxColor}
              eyesColor={eyesColor}
              setEyesColor={setEyesColor}
              handleNext={handleNext}
            />
          ) : actualStep === generateSteps[2] ? (
            <CorpsSection
              corpsType={corpsType}
              setCorpsType={setCorpsType}
              poitrineType={poitrineType}
              setPoitrineType={setPoitrineType}
              handleNext={handleNext}
            />
          ) : actualStep === generateSteps[3] ? (
            <GenerateSection
              generateurType={generateurType}
              setGenerateurType={setGenerateurType}
              suggestionType={suggestionType}
              setSuggestionType={setSuggestionType}
              description={description}
              setDescription={setDescription}
              vetementType={vetementType}
              setVetementType={setVetementType}
              actionType={actionType}
              setActionType={setActionType}
              poseType={poseType}
              setPoseType={setPoseType}
              sceneType={sceneType}
              setSceneType={setSceneType}
              accessoireType={accessoireType}
              setAccessoireType={setAccessoireType}
              imageNumber={imageNumber}
              setImageNumber={setImageNumber}
              handleSubmit={handleSubmit}
            />
          ) : (
            actualStep === generateSteps[4] && <ResultSection />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuFeelingSection;
