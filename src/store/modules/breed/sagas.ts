import { toast } from 'react-toastify';

import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { ActionProps } from 'interfaces';

import api from 'services/api';

export function* findAllEffect() {
  try {
    const response: AxiosResponse = yield call(api.get, `/breeds/list/all`);
    yield put({
      type: '@pedidos/BROWSE_SUCCESS',
      payload: { items: response.data },
    });
  } catch (error) {
    toast.error('Error in get breeds!');
    yield put({ type: '@breed/LIST_ALL_SUCCESS' });
  }
}

export default all([takeLatest('@breed/LIST_ALL', findAllEffect)]);
