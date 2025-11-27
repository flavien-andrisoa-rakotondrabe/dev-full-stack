'use client';

import qs from 'query-string';

import { QueryInterface } from '@/types/QueryInterface';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface QueryProviderContextType {
  currentQuery: QueryInterface | null;
  handleRemoveQuery: (value: string) => void;
}

const QueryContext = createContext<QueryProviderContextType | undefined>(
  undefined,
);

export const useQuery = (): QueryProviderContextType => {
  const context = useContext(QueryContext);

  if (context === undefined) {
    throw new Error('useQuery must be used within a QueryProvider');
  }

  return context;
};

const QueryProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const params = useSearchParams();
  const router = useRouter();

  const [currentQuery, setCurrentQuery] = useState<QueryInterface | null>(null);

  useEffect(() => {
    const updateQuery = qs.parse(params.toString());
    setCurrentQuery(updateQuery as QueryInterface);
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
    <QueryContext.Provider value={{ currentQuery, handleRemoveQuery }}>
      {children}
    </QueryContext.Provider>
  );
};

export default QueryProvider;
