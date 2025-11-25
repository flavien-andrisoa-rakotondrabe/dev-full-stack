import MesIAComponent from '@/components/mes-ia/MesIAComponent';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mes IA',
  description: 'Mes IA',
};

const MesIAPage = () => {
  return <MesIAComponent />;
};

export default MesIAPage;
