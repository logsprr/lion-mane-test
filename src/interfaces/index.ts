export interface HeaderProps {
  title?: string;
}

export interface ActionProps {
  type: string;
  payload?: any;
}

export interface Breed {
  name: string;
  subBreedName?: string;
}

export interface StateBreedProps {
  isLoading: boolean;
  breeds: Breed[];
  subBreeds: Breed[];
  breed: Breed | null;
}

export interface SelectorStateProps {
  breed: StateBreedProps;
}

export interface BreedCardProps extends Breed {
  name: string;
  isSub?: boolean;
}

export interface BreedModalProps {
  subBreedName: string;
}

export interface ListBreedsProps {
  breeds: Breed[];
  isSub: boolean;
}

export interface FavoriteBreedProps {
  breed: Breed | null;
}

export interface BreedParamsProps {
  breedName: string;
}
