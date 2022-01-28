import * as React from 'react';
import { useHistory, useParams } from 'react-router';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import BreedModal from 'components/BreedModal';

import { BreedCardProps, BreedParamsProps } from 'interfaces';

import { getImageBreed, getImageSubBreed } from 'services/imageBreed';

import { capitalizeString } from 'utils';

const BreedCard = ({ name, isSub, subBreedName }: BreedCardProps) => {
  const history = useHistory();
  const { breedName }: BreedParamsProps = useParams();
  const [image, setImage] = React.useState(process.env.REACT_APP_NO_IMAGE);

  React.useEffect(() => {
    const getImage = async () => {
      if (subBreedName) {
        const response = await getImageSubBreed(subBreedName, name);

        setImage(response.data.message);
      } else {
        const response = !isSub
          ? await getImageBreed(name)
          : await getImageSubBreed(breedName, name);

        setImage(response.data.message);
      }
    };

    if (name !== 'none') {
      getImage();
    }
  }, [breedName, isSub, name, subBreedName]);

  return (
    <Card sx={{ width: '100%' }}>
      <CardMedia component="img" height="300" image={image} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name !== 'none' ? capitalizeString(name) : 'No favorites selected!'}
        </Typography>
      </CardContent>
      {name !== 'none' && (
        <CardActions>
          {isSub || subBreedName ? (
            <BreedModal subBreedName={name} isFavBreedName={subBreedName} />
          ) : (
            <Button size="small" onClick={() => history.push(`/breed/${name}`)}>
              Learn More
            </Button>
          )}
        </CardActions>
      )}
    </Card>
  );
};

export default BreedCard;
