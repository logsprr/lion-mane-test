import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { capitalize, Typography } from '@mui/material';

import ListBreeds from 'components/ListBreeds';
import Loading from 'components/Loading';
import NoData from 'components/NoData';

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
      {isLoading ? (
        <Loading />
      ) : subBreeds.length ? (
        <ListBreeds breeds={subBreeds} isSub />
      ) : (
        <NoData />
      )}
    </Container>
  );
};

export default Breed;
