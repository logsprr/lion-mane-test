/* eslint-disable no-param-reassign */
import produce from 'immer';

import { ActionProps, StateBreedProps } from 'interfaces';

const INITIAL_STATE: StateBreedProps = {
  isLoading: false,
  breeds: [],
  subBreeds: [],
  breed: null,
};

export default function breed(state = INITIAL_STATE, action: ActionProps) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@breed/LIST_ALL': {
        draft.isLoading = true;
        break;
      }
      case '@breed/LIST_ALL_SUCCESS': {
        draft.isLoading = false;
        draft.breeds = Object.entries(action.payload.breeds.message).map(
          (breed: any) => {
            return {
              name: breed[0],
            };
          }
        );
        break;
      }
      case '@breed/LIST_ALL_ERROR': {
        draft.isLoading = false;
        draft.breeds = [];
        break;
      }
      case '@breed/LIST_ALL_SUB': {
        draft.isLoading = true;
        break;
      }
      case '@breed/LIST_ALL_SUCCESS_SUB': {
        draft.isLoading = false;
        draft.subBreeds = action.payload.breeds.message.map((breed: any) => {
          return {
            name: breed,
          };
        });
        break;
      }
      case '@breed/LIST_ALL_ERROR_SUB': {
        draft.isLoading = false;
        draft.breeds = [];
        break;
      }
      case '@breed/LIST_BREED': {
        draft.isLoading = true;
        break;
      }
      case '@breed/LIST_BREED_SUCCESS': {
        draft.isLoading = false;
        draft.breed = action.payload.breed;
        break;
      }
      case '@breed/LIST_BREED_ERROR': {
        draft.isLoading = false;
        draft.breed = null;
        break;
      }
      case '@breed/SET_FAVORITE_SUB': {
        draft.breed = {
          name: action.payload.breedName,
          subBreedName: action.payload.subBreedName,
        };
        break;
      }
      default:
    }
  });
}
