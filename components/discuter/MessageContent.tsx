'use client';

import Image from 'next/image';

const discussionData: {
  group?: string;
  values: { src?: string; isOwn?: boolean; message: string }[];
}[] = [
  {
    values: [
      {
        src: '/images/elizabeth.png',
        message: 'Hello',
      },
      {
        isOwn: true,
        message: 'Hi',
      },
      {
        src: '/images/elizabeth.png',
        message: 'How are you',
      },
      {
        isOwn: true,
        message: "I'm fine and u ?",
      },
      {
        src: '/images/elizabeth.png',
        message: "I'm fine too",
      },
    ],
  },
  {
    group: '11:00',
    values: [
      {
        isOwn: true,
        message: 'Hello',
      },
    ],
  },
];

const MessageContent = () => {
  return (
    <div className="min-w-[500px] w-[500px] h-[566px] flex flex-col gap-10 border border-[#252525] rounded-4xl">
      <div className="w-full h-[88px] flex items-center justify-between p-6 border-b border-[#242424]">
        <div className="flex items-center gap-2">
          <Image
            src="/images/elizabeth.png"
            alt="Elizabeth"
            width={40}
            height={40}
            className="max-w-10 max-h-10 min-w-10 min-h-10 object-cover rounded-full"
          />
          <h3 className="font-bold text-[16px]">Elizabeth Garcia</h3>
        </div>
        <div className="flex items-center gap-8">
          <div className="w-6 h-6 flex justify-center items-centercursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                d="M6.5025 3.6L4.0025 5L5.4025 2.5L4.0025 0L6.5025 1.4L9.0025 0L7.6025 2.5L9.0025 5L6.5025 3.6ZM18.5025 13.4L21.0025 12L19.6025 14.5L21.0025 17L18.5025 15.6L16.0025 17L17.4025 14.5L16.0025 12L18.5025 13.4ZM21.0025 0L19.6025 2.5L21.0025 5L18.5025 3.6L16.0025 5L17.4025 2.5L16.0025 0L18.5025 1.4L21.0025 0ZM12.3425 10.78L14.7825 8.34L12.6625 6.22L10.2225 8.66L12.3425 10.78ZM13.3725 5.29L15.7125 7.63C16.1025 8 16.1025 8.65 15.7125 9.04L4.0425 20.71C3.6525 21.1 3.0025 21.1 2.6325 20.71L0.2925 18.37C-0.0975 18 -0.0975 17.35 0.2925 16.96L11.9625 5.29C12.3525 4.9 13.0025 4.9 13.3725 5.29Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="w-6 h-6 flex justify-center items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="17"
              viewBox="0 0 4 17"
              fill="none"
            >
              <path
                d="M3.7356 1.8672C3.73568 2.11248 3.68745 2.35538 3.59365 2.58202C3.49986 2.80866 3.36234 3.01461 3.18896 3.18811C3.01557 3.36161 2.80971 3.49925 2.58313 3.59319C2.35655 3.68713 2.11368 3.73552 1.8684 3.7356C1.62312 3.73568 1.38022 3.68745 1.15358 3.59365C0.926936 3.49986 0.720987 3.36234 0.54749 3.18896C0.373993 3.01557 0.236347 2.80971 0.142408 2.58313C0.0484696 2.35655 7.88844e-05 2.11368 9.64968e-08 1.8684C-0.000159023 1.37303 0.196474 0.897883 0.546642 0.54749C0.89681 0.197097 1.37183 0.000159226 1.8672 9.65096e-08C2.36257 -0.000159033 2.83772 0.196474 3.18811 0.546642C3.5385 0.89681 3.73544 1.37183 3.7356 1.8672Z"
                fill="#CACACA"
              />
              <path
                d="M1.86842 10.1446C2.89965 10.1446 3.73562 9.30858 3.73562 8.27736C3.73562 7.24613 2.89965 6.41016 1.86842 6.41016C0.837194 6.41016 0.0012207 7.24613 0.0012207 8.27736C0.0012207 9.30858 0.837194 10.1446 1.86842 10.1446Z"
                fill="#CACACA"
              />
              <path
                d="M1.86842 16.5547C2.89965 16.5547 3.73562 15.7187 3.73562 14.6875C3.73562 13.6563 2.89965 12.8203 1.86842 12.8203C0.837194 12.8203 0.0012207 13.6563 0.0012207 14.6875C0.0012207 15.7187 0.837194 16.5547 1.86842 16.5547Z"
                fill="#CACACA"
              />
            </svg>
          </div>
          <div className="w-6 h-6 flex justify-center items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
            >
              <path
                d="M14 0H0V2H14V0ZM10 7H0V9H10V7ZM14 14H0V16H14V14ZM12.99 4.814L14.404 3.4L19 7.996L14.404 12.592L12.99 11.178L16.172 7.996L12.99 4.814Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[13px] p-6">
        {discussionData.map((item, index) => (
          <div key={`group-${index}`}>
            {item.group && (
              <div className="flex justify-center items-center">
                <p className="font-400 text-[16px] text-[#E6E6E6]">
                  {item.group}
                </p>
              </div>
            )}

            {item.values.map((value, idx) =>
              value.isOwn ? (
                <div
                  key={`${value.message}-${idx}`}
                  className="flex justify-end"
                >
                  <div className="w-max bg-[#171717] py-[5px] px-2.5 rounded-4xl ms-12">
                    <p className="font-400 text-[14px]">{value.message}</p>
                  </div>
                </div>
              ) : (
                value.src && (
                  <div key={`${value.message}-${idx}`} className="flex gap-4">
                    <Image
                      src={value.src}
                      alt="Profile"
                      width={32}
                      height={32}
                      className="max-w-8 max-h-8 min-w-8 min-h-8 object-cover rounded-full"
                    />
                    <div className="w-max bg-[#626262] py-[5px] px-2.5 rounded-4xl">
                      <p className="font-400 text-[14px]">{value.message}</p>
                    </div>
                  </div>
                )
              ),
            )}
          </div>
        ))}
      </div>

      <div className="py-6 px-8">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Votre message"
            className="w-full h-16 px-[18px] py-[22px] rounded-full font-400 text-[16px] backdrop-blur-2xl"
            style={{
              background:
                'linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.08) 100%)',
            }}
          />
          <Image
            src="/icons/send.svg"
            alt="Send"
            width={24}
            height={32}
            className="absolute right-4 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default MessageContent;
