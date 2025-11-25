import Image from 'next/image';
import TopMenu from '../TopMenu';

const postData = [
  { name: 'Serenity', src: '/images/serenity.jpg' },
  { name: 'Bessie', src: '/images/bessie.jpg' },
  { name: 'Connie', src: '/images/connie.jpg' },
  { name: 'Kristin', src: '/images/kristin.jpg' },
  { name: 'Savannah', src: '/images/savannah.jpg' },
  { name: 'Audrey', src: '/images/audrey.jpg' },
  { name: 'Kathryn', src: '/images/kathryn.jpg' },
  { name: 'Irma', src: '/images/irma.jpg' },
];

const GenererComponent = () => {
  return (
    <div className="flex flex-col gap-[50px]">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-[40px]">Générateur d'Images et vidéos</h1>
        <p className="font-medium text-[16px]">Choisir un personnage</p>
      </div>

      <div className="flex flex-col gap-[50px]">
        <TopMenu />
        <div className="flex flex-wrap gap-x-7 gap-y-[42px]">
          {postData.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="relative w-[235px] h-[280px]"
            >
              <Image
                src={item.src}
                alt={item.name}
                width={235}
                height={280}
                className="max-w-[235px] max-h-[280px] min-w-[235px] min-h-[280px] object-cover rounded-4xl"
              />
              <div className="absolute bottom-0 left-0 w-full p-4">
                <div
                  className="flex justify-center items-center py-[5px] backdrop-blur-2xl rounded-full"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
                  }}
                >
                  <p className="font-medium text-[16px]">{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenererComponent;
