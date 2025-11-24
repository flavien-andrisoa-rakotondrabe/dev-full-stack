import UserProfile from '@/components/UserProfile';

import { ReactNode } from 'react';

const TopProfilLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-8 flex flex-col gap-[47px]">
      <div className="flex justify-end">
        <UserProfile />
      </div>
      {children}
    </div>
  );
};

export default TopProfilLayout;
