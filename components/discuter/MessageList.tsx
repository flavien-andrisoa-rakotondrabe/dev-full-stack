'use client';

import Image from 'next/image';

const messageData = [
  {
    name: 'Elizabeth Gracia',
    src: '/images/elizabeth.png',
    message: 'Hello',
    isOwn: true,
    online: true,
  },
  {
    name: 'Nelly rn',
    src: '/images/nelly.jpg',
    message: 'Hi honey 🥰',
  },
  {
    name: 'Nelly rn',
    src: '/images/nelly-1.jpg',
    message: 'Hello girl',
    isOwn: true,
  },
];

const MessageList = () => {
  return (
    <div className="min-w-[320px] w-[320px] h-[566px] flex flex-col gap-10 p-6 border border-[#252525] rounded-4xl">
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Rechercher"
          className="w-full h-11 rounded-4xl px-5 py-3 text-[16px] font-400 text-[#968C8C] backdrop-blur-2xl -z-1"
          style={{
            background:
              'linear-gradient(90deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
          }}
        />
        <Image
          src="/icons/search.svg"
          alt="Search"
          width={24}
          height={24}
          className="absolute right-5"
        />
      </div>

      <div className="flex flex-col gap-4">
        {messageData.map((item, index) => (
          <div key={`${item.name}-${index}`} className="flex gap-4">
            <Image
              src={item.src}
              alt={item.name}
              width={56}
              height={56}
              className="rounded-full object-cover max-w-14 max-h-14 min-w-14 min-h-14"
            />
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-[16px]">{item.name}</h4>
              <p
                className={`font-400 text-[14px] ${
                  item.isOwn ? 'text-[#636363]' : 'font-bold'
                }`}
              >
                {item.isOwn ? 'Vous: ' : ''} {item.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
