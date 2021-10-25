import React from "react";
import { Modal, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { handleDeleteModalVisisbility, deleteUser } from "../../actions/action";
const DeleteUserModal = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <Modal
      title="Delete User"
      visible={true}
      onCancel={() => dispatch(handleDeleteModalVisisbility(false))}
      footer={[
        <Button
          key="back"
          onClick={() => {
            dispatch(deleteUser(id));
            dispatch(handleDeleteModalVisisbility(false));
          }}
        >
          Delete
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={() => dispatch(handleDeleteModalVisisbility(false))}
        >
          Cancel
        </Button>,
      ]}
    >
      <p>Are you sure you want to delete this user?</p>
    </Modal>
  );
};

export default DeleteUserModal;
