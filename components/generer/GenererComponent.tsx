'use client';

import qs from 'query-string';
import UserProfile from '../UserProfile';
import PostSection from './PostSection';
import AuFeelingSection from './AuFeelingSection';
import MesIASection from './MesIASection';

import { useEffect } from 'react';
import { useQuery } from '@/providers/QueryProvider';
import { genererMenu } from '@/lib/route';
import { usePathname, useRouter } from 'next/navigation';

const GenererComponent = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { currentQuery } = useQuery();

  useEffect(() => {
    if (
      !currentQuery?.filter ||
      (currentQuery?.filter && !genererMenu.includes(currentQuery.filter))
    ) {
      const url = qs.stringifyUrl({
        url: pathname,
        query: { ...currentQuery, filter: genererMenu[0] },
      });

      router.push(url);
    }
  }, [currentQuery]);

  return (
    <div className="p-8 flex flex-col gap-[47px]">
      <div className="flex justify-end">
        <UserProfile />
      </div>

      {currentQuery?.filter && (
        <>
          {currentQuery.filter === genererMenu[0] ? (
            <PostSection />
          ) : currentQuery.filter === genererMenu[1] ? (
            <AuFeelingSection />
          ) : (
            <MesIASection />
          )}
        </>
      )}
    </div>
  );
};

export default GenererComponent;
