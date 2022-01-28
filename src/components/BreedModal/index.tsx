import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import {
  Dialog,
  DialogActions,
  DialogTitle,
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Button from '@mui/material/Button';

import { BreedModalProps, BreedParamsProps } from 'interfaces';

import { getAllImagesSubBreed } from 'services/imageBreed';

import { setFavoriteSubBreed } from 'store/modules/breed/actions';

import { capitalizeString } from 'utils';

const BreedModal = ({ subBreedName, isFavBreedName }: BreedModalProps) => {
  const { breedName }: BreedParamsProps = useParams();
  const dispatch = useDispatch();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = React.useState(false);
  const [images, setImages] = React.useState([process.env.REACT_APP_NO_IMAGE]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setFavorite = () => {
    if (isFavBreedName) {
      dispatch(setFavoriteSubBreed(isFavBreedName, subBreedName));
    } else {
      dispatch(setFavoriteSubBreed(breedName, subBreedName));
    }
    setOpen(false);
  };

  React.useEffect(() => {
    const getImages = async () => {
      const response = isFavBreedName
        ? await getAllImagesSubBreed(isFavBreedName, subBreedName)
        : await getAllImagesSubBreed(breedName, subBreedName);

      setImages(response.data.message);
    };

    if (subBreedName !== 'none') {
      getImages();
    }
    return () => {
      setImages([]);
    };
  }, [breedName, isFavBreedName, subBreedName]);

  return (
    <div>
      <Button size="small" onClick={handleOpen}>
        Learn More
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {capitalizeString(subBreedName)}
        </DialogTitle>
        <ImageList
          sx={{ width: 500, height: 450 }}
          cols={3}
          rowHeight={164}
          variant="quilted"
        >
          {images.map((item, index) => (
            <ImageListItem key={index}>
              <img src={item} alt={subBreedName} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
          <Button autoFocus onClick={setFavorite}>
            Set Favorites
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BreedModal;
