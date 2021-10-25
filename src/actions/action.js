import * as types from "../constants/constant";

export const getUsersData = () => {
  return {
    type: types.GET_USERS_DATA,
  };
};

export const setUsersData = (data) => ({
  type: types.SET_USERS_DATA,
  payload: data,
});

export const handleDeleteModalVisisbility = (flag) => ({
  type: types.HANDLE_DELETE_MODAL_VISIBILITY,
  payload: flag,
});

export const deleteUser = (id) => ({
  type: types.DELETE_USER,
  payload: id,
});

export const handleAddModalVisisbility = (flag) => ({
  type: types.HANDLE_ADD_MODAL_VISIBILITY,
  payload: flag,
});

export const addUser = (data) => ({
  type: types.ADD_USER,
  payload: data,
});

export const handleUpdateModalVisisbility = (flag) => ({
  type: types.HANDLE_UPDATE_MODAL_VISIBILITY,
  payload: flag,
});

export const updateUser = (data) => ({
  type: types.UPDATE_USER,
  payload: data,
});
