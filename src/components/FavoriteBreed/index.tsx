import { Grid } from '@mui/material';

import { FavoriteBreedProps } from 'interfaces';

import BreedCard from '../Breed';

const FavoriteBreed = ({ breed }: FavoriteBreedProps) => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid
        item
        xs={12}
        alignItems="center"
        justifyContent="center"
        display="flex"
      >
        {breed && (
          <BreedCard
            name={breed?.subBreedName || breed?.name}
            subBreedName={breed?.name}
          />
        )}
        {!breed && <BreedCard name="none" />}
      </Grid>
    </Grid>
  );
};

export default FavoriteBreed;
