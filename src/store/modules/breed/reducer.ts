/* eslint-disable no-param-reassign */
import produce from 'immer';

import { ActionProps, InitialStateBreedProps } from 'interfaces';

const INITIAL_STATE: InitialStateBreedProps = {
  isLoading: false,
  breeds: [],
  breed: {},
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
        draft.breeds = action.payload.breeds;
        break;
      }
      case '@breed/LIST_ALL_ERROR': {
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
        draft.breed = {};
        break;
      }
      default:
    }
  });
}
