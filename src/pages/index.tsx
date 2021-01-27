import * as React from 'react';
import { PageProps } from 'gatsby';

import Title from '@/components/Title';

const Home: React.FC<PageProps> = () => (
  <main>
    <Title />
    <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
  </main>
);

export default Home;
