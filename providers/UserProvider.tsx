'use client';

import React from 'react';
import qs from 'query-string';
import Loading from '@/app/loading';

import { jwtService } from '@/services/authService';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { getUserService } from '@/services/userService';
import { useDispatch } from 'react-redux';
import { setUserReducer } from '@/redux/slices/user.slice';
import { notLoggedRoutes, protectedRoutes, routes } from '@/lib/route';

interface CurrentQueryInterface {
  step?: string | number;
  cvMinute?: string | number;
  [key: string]: string | number | boolean | null | undefined;
}

interface UserProviderContextType {
  isLoading: boolean;
  handleRemoveQuery: (value: string) => void;
}

const UserContext = React.createContext<UserProviderContextType | undefined>(
  undefined,
);

export const useUser = (): UserProviderContextType => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const params = useSearchParams();
  const router = useRouter();

  const [currentQuery, setCurrentQuery] =
    React.useState<CurrentQueryInterface | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [userId, setUserId] = React.useState<string | number | null>(null);

  React.useEffect(() => {
    let isMounted = true;
    (async () => {
      const res = await jwtService();

      if (isMounted) {
        if (res.notAuthenticated && protectedRoutes.includes(pathname)) {
          window.location.href = notLoggedRoutes[0];
        } else if (res.user?.id) {
          if (notLoggedRoutes.includes(pathname)) {
            window.location.href = routes[0].href;
          }
          setUserId(res.user.id);
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [pathname]);

  React.useEffect(() => {
    let isMounted = true;

    if (userId) {
      (async () => {
        const res = await getUserService();

        if (isMounted) {
          if (res.user) {
            dispatch(setUserReducer({ user: res.user }));
          }
        }
      })();
    }

    return () => {
      isMounted = false;
    };
  }, [userId]);

  React.useEffect(() => {
    const updateQuery = qs.parse(params.toString());
    setCurrentQuery(updateQuery as CurrentQueryInterface);
  }, [params]);

  const handleRemoveQuery = (value: string) => {
    if (currentQuery) {
      const updateQuery = currentQuery;
      delete updateQuery[value];

      const url = qs.stringifyUrl({
        url: pathname,
        query: updateQuery,
      });
      router.push(url);
    }
  };

  return (
    <UserContext.Provider
      value={{
        isLoading,
        handleRemoveQuery,
      }}
    >
      {isLoading ? <Loading /> : children}
    </UserContext.Provider>
  );
}
