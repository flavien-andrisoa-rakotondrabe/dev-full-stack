import CollectionComponent from '@/components/collection/CollectionComponent';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Collection',
  description: 'Collection',
};

const CollectionPage = () => {
  return <CollectionComponent />;
};

export default CollectionPage;
