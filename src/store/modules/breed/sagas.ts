import { toast } from 'react-toastify';

import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { ActionProps } from 'interfaces';

import api from 'services/api';

export function* findAllEffect() {
  try {
    const response: AxiosResponse = yield call(api.get, `/breeds/list/all`);
    yield put({
      type: '@breed/LIST_ALL_SUCCESS',
      payload: { breeds: response.data },
    });
  } catch (error) {
    toast.error('Error in get breeds!');
    yield put({ type: '@breed/LIST_ALL_ERROR' });
  }
}

export function* findAllSubEffect(action: ActionProps) {
  const { breedName } = action.payload;
  try {
    const response: AxiosResponse = yield call(
      api.get,
      `/breed/${breedName}/list`
    );
    yield put({
      type: '@breed/LIST_ALL_SUCCESS_SUB',
      payload: { breeds: response.data },
    });
  } catch (error) {
    toast.error('Error in get breeds!');
    yield put({ type: '@breed/LIST_ALL_ERROR' });
  }
}

export default all([
  takeLatest('@breed/LIST_ALL', findAllEffect),
  takeLatest('@breed/LIST_ALL_SUB', findAllSubEffect),
]);
