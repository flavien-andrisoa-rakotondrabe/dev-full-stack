import Image from 'next/image';

import { OptionType } from '@/types/optionType';

const SuggestionList = ({
  actualValue,
  options,
  onClick,
}: {
  actualValue: string;
  options: OptionType[];
  onClick: (value: string) => void;
}) => {
  return (
    <div className="flex gap-8">
      {options.map((item) => (
        <div
          key={`vetement-${item.title}`}
          className="flex flex-col items-center gap-4"
          onClick={() => onClick(item.title)}
        >
          <div
            className="relative w-40 h-40 cursor-pointer rounded-3xl"
            style={{
              background: `url(${item.src}) no-repeat center / cover`,
            }}
          >
            {item.title !== actualValue && (
              <div className="absolute top-0 left-0 w-full h-full bg-[#000000]/63"></div>
            )}
          </div>
          <p className="font-400 text-[16px] cursor-default">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default SuggestionList;
