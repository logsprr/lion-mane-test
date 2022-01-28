import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { capitalize, Typography } from '@mui/material';

import FavoriteBreed from 'components/FavoriteBreed';
import ListBreeds from 'components/ListBreeds';
import Loading from 'components/Loading';

import { BreedParamsProps, SelectorStateProps } from 'interfaces';

import { listAllSubBreeds } from 'store/modules/breed/actions';

import { Container } from './styles';

const Breed = () => {
  const dispatch = useDispatch();
  const { breedName }: BreedParamsProps = useParams();
  const { subBreeds, isLoading } = useSelector(
    (state: SelectorStateProps) => state.breed
  );

  React.useEffect(() => {
    dispatch(listAllSubBreeds(breedName));
  }, [breedName, dispatch]);

  return (
    <Container>
      <Typography variant="h4">{`${capitalize(breedName)} Breeds`}</Typography>
      {isLoading ? <Loading /> : <ListBreeds breeds={subBreeds} isSub />}
    </Container>
  );
};

export default Breed;
