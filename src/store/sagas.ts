import { takeLatest, all, put } from 'redux-saga/effects';

function* fetchUser() {
  try {
    const res = yield fetch('/api/hello');
    const userData = yield res.json();

    yield put({ type: 'UPDATE_USER_DATA', payload: userData });
  } catch (err) {
    console.warn(err, '<<<<<< ERROR FROM SAGA');
  }
}

function* userWatcher() {
  yield takeLatest('GET_USER', fetchUser);
}
export default function* rootSaga() {
  yield all([userWatcher()]);
}
