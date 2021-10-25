import * as types from "../constants/constant";
import { message } from "antd";
const initialState = {
  userData: [],
  isDeleteUser: false,
  isAddUser: false,
  isUpdateUser: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_USERS_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    case types.HANDLE_DELETE_MODAL_VISIBILITY:
      return {
        ...state,
        isDeleteUser: action.payload,
      };
    case types.DELETE_USER:
      let filteredUser = state.userData.filter(
        (data) => data.id !== action.payload
      );
      message.success("Deleted user successfully");
      return {
        ...state,
        userData: filteredUser,
      };
    case types.HANDLE_ADD_MODAL_VISIBILITY:
      return {
        ...state,
        isAddUser: action.payload,
      };
    case types.HANDLE_UPDATE_MODAL_VISIBILITY:
      return {
        ...state,
        isUpdateUser: action.payload,
      };
    case types.UPDATE_USER:
      let modifiedUserData = state.userData.map((data) => {
        if (data.id === action.payload.id) {
          return action.payload;
        }
        return data;
      });
      message.success("Updated user successfully");
      return {
        ...state,
        userData: modifiedUserData,
      };
    default:
      return state;
  }
}
