export interface HeaderProps {
  title?: string;
}

export interface ActionProps {
  type: string;
  payload?: any;
}

export interface InitialStateBreedProps {
  isLoading: boolean;
  breeds: [];
  breed: {};
}
