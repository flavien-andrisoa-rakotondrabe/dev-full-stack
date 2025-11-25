import Image from 'next/image';

const collectionData = [
  {
    name: 'Luna moreno',
    src: '/images/lunah.png',
    gallery: '/images/lunah-moreno.png',
  },
  { name: 'Mila Mah', src: '/images/mila.jpg', gallery: '/images/mila.jpg' },
];

const CollectionComponent = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold text-[40px]">Ma collection</h1>
      <div className="flex gap-[42px]">
        {collectionData.map((item) => (
          <div key={item.name} className="flex flex-col gap-[34px]">
            <div className="flex gap-4 items-center">
              <Image
                src={item.src}
                alt={item.name}
                width={80}
                height={80}
                className="max-w-20 max-h-20 min-w-20 min-h-20 object-cover rounded-2xl"
              />

              <div className="flex flex-col gap-2 font-bold">
                <h6 className="text-[16px]">{item.name}</h6>
                <div className="flex items-center gap-4 text-[14px]">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/icons/generer.svg"
                      alt="Généré"
                      width={16}
                      height={16}
                      className=""
                    />
                    <p>1</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/icons/play-simple.svg"
                      alt="Généré"
                      width={16}
                      height={16}
                      className=""
                    />
                    <p>1</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <Image
                src={item.gallery}
                alt={item.name}
                width={203}
                height={240}
                className="max-w-[203px] max-h-60 min-w-[203px] min-h-60 z-10 object-cover rounded-2xl"
              />
              <div className="absolute -top-3.5 w-[173px] h-full bg-[#434242] rounded-2xl"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionComponent;
