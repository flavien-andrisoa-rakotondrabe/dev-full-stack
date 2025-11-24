'use client';

import Image from 'next/image';

const MessageDetails = () => {
  return (
    <div className="">
      <Image
        src="/images/elizabeth.png"
        alt="Elizabeth"
        width={300}
        height={350}
        className="max-h-[350px] max-w-[300px] min-h-[350px] min-w-[300px] object-cover rounded-4xl"
      />
      <div className="">
        {/* <h1>Elizabeth Garcia</h1>
        <p>
          Katarina Sommerfeld est une étudiante en médecine allemande connue
          pour son charme et son sourire. Sociable et intelligente, c'est le
          centre d'attention de toutes les fêtes, surtout quand il y a de la
          bière ! Katarina aime rencontrer du monde et essaie toujours de
          laisser une impression durable.
        </p>
        <p>À propos de moi:</p> */}
      </div>
    </div>
  );
};

export default MessageDetails;
