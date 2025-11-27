import Image from 'next/image';
import TopMenu from '../generer/TopMenu';
import UserProfile from '../UserProfile';

const mesIAData = [{ name: 'Elizabeth Garcia', src: '/images/elizabeth.png' }];

const MesIAComponent = () => {
  return (
    <div className="p-8 flex flex-col gap-[47px]">
      <div className="flex justify-end">
        <UserProfile />
      </div>

      <div className="flex flex-col gap-[50px]">
        <h1 className="font-bold text-[40px]">
          Mon <span className="text-(--color-primary)">IA</span>
        </h1>

        <div className="flex flex-wrap gap-x-7 gap-y-[42px]">
          <div className="relative w-[320px] h-[336px] bg-(--color-primary) rounded-4xl">
            <div className="w-full h-full flex justify-center items-center p-4 cursor-pointer">
              <div className="flex flex-col justify-center items-center gap-8">
                <Image
                  src="/icons/plus.svg"
                  alt="Plus"
                  width={48}
                  height={48}
                  className=""
                />
                <h5 className="font-bold text-[20px]">Créer une nouvelle IA</h5>
              </div>
            </div>
          </div>

          {mesIAData.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="relative w-[320px] h-[336px] rounded-4xl"
              style={{
                background: `url(${item.src}) no-repeat center / cover`,
              }}
            >
              <div className="w-12 h-12 absolute z-10 top-4 right-4 cursor-pointer">
                <Image
                  src="/icons/discuter.svg"
                  alt="Discuter"
                  width={48}
                  height={48}
                  className="w-full h-full"
                />
              </div>
              <div className="relative w-full h-full z-10 flex items-end p-4">
                <div className="w-[245px] flex flex-col gap-4 py-[5px]">
                  <h6 className="font-bold text-[20px]">{item.name}</h6>
                  <p className="font-medium text-[14px]">22 ans</p>
                  <p className="font-medium text-[14px]">
                    Etudiante passionné de séries, amatrice de soirées et férue
                    de voiture.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MesIAComponent;
