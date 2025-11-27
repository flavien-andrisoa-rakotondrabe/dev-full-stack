import GenererComponent from '@/components/generer/GenererComponent';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Generer',
  description: 'Generer',
};

const GenererPage = () => {
  return <GenererComponent />;
};

export default GenererPage;
