import { takeLatest, put, delay } from 'redux-saga/effects';

function* callApiAsync() {
  yield delay(4000);

  yield put({ type: 'CALL_API_ASYNC' });
}

export function* watchApiCall() {
  yield takeLatest('CALL_API', callApiAsync);
}
