import { put, call, takeLatest, select } from "redux-saga/effects";
import * as types from "../../constants/constant";
import * as api from "./api";
import { message } from "antd";

export function* getUsersData() {
  let { response } = yield call(api.getUsersData);
  yield put({ type: types.SET_USERS_DATA, payload: response.data });
}

export function* addUser(action) {
  let { response } = yield call(api.addUser, action.payload);
  if (Object.keys(response).length) {
    let { username, id, email } = response;
    let userData = yield select((state) => state.userData);
    let newuserData = [
      ...userData,
      {
        first_name: username,
        id: Number(id),
        email,
      },
    ];
    yield put({ type: types.SET_USERS_DATA, payload: newuserData });
    message.success("Added user successfully");
  } else {
    message.error("Something went wrong");
  }
}

export default function* usersSaga() {
  yield takeLatest(types.GET_USERS_DATA, getUsersData);
  yield takeLatest(types.ADD_USER, addUser);
}
