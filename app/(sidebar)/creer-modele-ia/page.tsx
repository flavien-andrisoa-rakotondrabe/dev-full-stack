import CreerModeleIAComponent from '@/components/creer-modele-ia/CreerModeleIAComponent';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Créer un modèle IA',
  description: 'Créer un modèle IA',
};

const HomePage = () => {
  return <CreerModeleIAComponent />;
};

export default HomePage;
