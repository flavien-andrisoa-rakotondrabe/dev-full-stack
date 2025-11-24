import DiscuterComponent from '@/components/discuter/DiscuterComponent';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Discuter',
  description: 'Discuter',
};

const DiscuterPage = () => {
  return <DiscuterComponent />;
};

export default DiscuterPage;
