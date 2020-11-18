import React from 'react';
import { HomebaseProvider } from 'homebase-react'
import Layout from '../components/layout';


import '../css/tailwind.css';

const config = {
  initialData: [
    {
      userPreferences: {
        id: 1,
        gender: 'everyone',
        size: 78,
        selected: new Set(),
      },
    },
  ],
};

const MyApp = ({Component, pageProps}) => (
  <HomebaseProvider config={config}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </HomebaseProvider>
);

export default MyApp;
