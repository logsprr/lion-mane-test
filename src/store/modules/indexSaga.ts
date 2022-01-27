import { all } from 'redux-saga/effects';

import breed from 'store/modules/breed/sagas';

export default function* rootSaga() {
  yield all([breed]);
}
