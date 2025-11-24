'use client';

import UserCard from './UserCard';

const launchData = [
  { name: 'Regina', src: '/images/regina.jpg' },
  { name: 'Esther', src: '/images/esther.jpg' },
  { name: 'Colleen', src: '/images/colleen.jpg' },
  { name: 'Dianne', src: '/images/dianne.jpg' },
];

const myModeleData: {
  name: string;
  src: string;
  description?: string;
  status?: ('play' | 'record')[];
}[] = [
  {
    name: 'Kristin',
    src: '/images/kristin.jpg',
    description:
      'Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Donec pretium f',
  },
  {
    name: 'Arlene',
    src: '/images/arlene.jpg',
    description:
      'Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Donec pretium f',
  },
  {
    name: 'Jane',
    src: '/images/jane.jpg',
    description:
      'Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Donec pretium f',
    status: ['play', 'record'],
  },
  {
    name: 'Priscilla',
    src: '/images/priscilla.jpg',

    description:
      'Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Donec pretium f',
  },
  {
    name: 'Serenity',
    src: '/images/serenity.jpg',
    description:
      'Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Donec pretium f',
    status: ['record'],
  },
  {
    name: 'Bessie',
    src: '/images/bessie.jpg',
    description:
      'Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Donec pretium f',
  },
  {
    name: 'Audrey',
    src: '/images/audrey.jpg',
    description:
      'Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Donec pretium f',
    status: ['play'],
  },
  {
    name: 'Connie',
    src: '/images/connie.jpg',
    description:
      'Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Donec pretium f',
  },
  {
    name: 'Lily',
    src: '/images/lily.jpg',
    description:
      'Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Donec pretium f',
  },
  {
    name: 'Brandie',
    src: '/images/brandie.jpg',
    description:
      'Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Donec pretium f',
  },
  {
    name: 'Bessie',
    src: '/images/bessie-1.jpg',
    description:
      'Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Donec pretium f',
    status: ['play'],
  },
  {
    name: 'Theresa',
    src: '/images/theresa.jpg',
    description:
      'Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Donec pretium f',
  },
];

const HomeComponent = () => {
  return (
    <div className="flex flex-col gap-[72px]">
      <div className="flex flex-col gap-[42px]">
        <h2 className="font-bold text-[40px] flex items-center gap-4">
          <span className="text-(--color-primary)">Se lancer dans</span>
          <span className="inline-flex items-center justify-center px-5 py-2.5 text-[20px] border-2 border-[#FFFFFF] rounded-2xl">
            EN DIRECT
          </span>
          <span>Action</span>
        </h2>

        <div className="flex gap-6 flex-wrap">
          {launchData.map((item, index) => (
            <UserCard
              key={`${item.name}-${index}`}
              name={item.name}
              src={item.src}
              online={true}
              status={['play']}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-[42px]">
        <h2 className="font-bold text-[40px] flex items-center gap-4">
          <span className="text-(--color-primary)">Personnages</span>
          <span>myModele AI</span>
        </h2>

        <div className="flex gap-x-6 gap-y-10 flex-wrap">
          {myModeleData.map((item, index) => (
            <UserCard
              key={`${item.name}-${index}`}
              name={item.name}
              src={item.src}
              description={item.description}
              status={item.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
