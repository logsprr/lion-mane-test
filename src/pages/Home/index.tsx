import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Typography } from '@mui/material';

import FavoriteBreed from 'components/FavoriteBreed';
import ListBreeds from 'components/ListBreeds';
import Loading from 'components/Loading';
import NoData from 'components/NoData';

import { SelectorStateProps } from 'interfaces';

import { listAllBreeds } from 'store/modules/breed/actions';

import { Container } from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const { breeds, breed, isLoading } = useSelector(
    (state: SelectorStateProps) => state.breed
  );

  React.useEffect(() => {
    dispatch(listAllBreeds());
  }, [dispatch]);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Typography variant="h4">Favorite Breed</Typography>
          <FavoriteBreed breed={breed} />
          <Typography variant="h4">Breeds</Typography>
          {breeds.length ? (
            <ListBreeds breeds={breeds} isSub={false} />
          ) : (
            <NoData />
          )}
        </>
      )}
    </Container>
  );
};

export default Home;
