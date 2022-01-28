import { Grid } from '@mui/material';

import { ListBreedsProps } from 'interfaces';

import BreedCard from '../Breed';

const ListBreeds = ({ breeds, isSub }: ListBreedsProps) => {
  return (
    <Grid container spacing={2} alignItems="center">
      {breeds.map((item) => (
        <Grid
          item
          md={4}
          xs={12}
          sm={6}
          alignItems="center"
          justifyContent="center"
          display="flex"
          key={item.name}
        >
          <BreedCard name={item.name} isSub={isSub} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListBreeds;
