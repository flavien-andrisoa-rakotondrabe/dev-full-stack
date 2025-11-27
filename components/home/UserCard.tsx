'use client';

import Image from 'next/image';

const UserCard = ({
  name,
  src,
  description,
  status = [],
  online = false,
}: {
  name: string;
  src: string;
  status?: ('play' | 'record')[];
  online?: boolean;
  description?: string;
}) => {
  return (
    <div
      className="relative w-[235px] h-[295px] rounded-2xl"
      style={{ background: `url(${src}) no-repeat center / cover` }}
    >
      {online && (
        <Image
          src="/icons/online.svg"
          alt="Online"
          width={27}
          height={27}
          className="absolute top-[22px] right-[15px]"
        />
      )}
      <div className="relative w-full h-full z-10 flex flex-col justify-end gap-2 p-6">
        <h2 className="font-bold text-[20px]">{name}</h2>
        {description && (
          <p className="text-[#989898] font-400 text-[14px] line-clamp-1">
            {description}
          </p>
        )}
        {status.length > 0 && (
          <div className="flex items-center gap-2">
            {status.includes('play') && (
              <Image
                src="/icons/play.svg"
                alt="Manette"
                width={48}
                height={48}
                className=""
              />
            )}
            {status.includes('record') && (
              <Image
                src="/icons/record.svg"
                alt="Record"
                width={48}
                height={48}
                className=""
              />
            )}
          </div>
        )}
      </div>
      <div className="z-5 absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
    </div>
  );
};

export default UserCard;
