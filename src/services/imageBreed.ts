import api from './api';

export const getImageBreed = (breed: string) => {
  return api.get(`/breed/${breed}/images/random`);
};

export const getImageSubBreed = (breed: string, subBreed: string) => {
  return api.get(`/breed/${breed}/${subBreed}/images/random`);
};

export const getAllImagesSubBreed = (breed: string, subBreed: string) => {
  return api.get(`/breed/${breed}/${subBreed}/images`);
};
