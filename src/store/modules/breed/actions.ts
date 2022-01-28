export function listAllBreeds() {
  return {
    type: '@breed/LIST_ALL',
  };
}

export function listAllSubBreeds(breedName: string) {
  return {
    type: '@breed/LIST_ALL_SUB',
    payload: { breedName },
  };
}

export function setFavoriteSubBreed(breedName: string, subBreedName: string) {
  return {
    type: '@breed/SET_FAVORITE_SUB',
    payload: { breedName, subBreedName },
  };
}
