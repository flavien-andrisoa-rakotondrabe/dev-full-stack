import HomeComponent from '@/components/home/HomeComponent';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home',
};

const HomePage = () => {
  return <HomeComponent />;
};

export default HomePage;
