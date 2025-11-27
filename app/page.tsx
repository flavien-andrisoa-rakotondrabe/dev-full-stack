import LandingComponent from '@/components/landing/LandingComponent';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landing',
  description: 'Landing',
};

export default function LandingPage() {
  return <LandingComponent />;
}
