import React from 'react';
import { Route } from 'react-router-dom';

import Header from 'components/Header';
import Loading from 'components/Loading';

const Home = React.lazy(() => import('pages/Home'));
const Breed = React.lazy(() => import('pages/Breed'));

const Routes = () => {
  return (
    <>
      <React.Suspense fallback={<Loading />}>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/breed/:breedName" exact component={Breed} />
      </React.Suspense>
    </>
  );
};

export default Routes;
