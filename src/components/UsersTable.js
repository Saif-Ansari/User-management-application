import React, { useState } from "react";
import { Table, Avatar, Input, Button, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { EditOutlined, DeleteOutlined, UserOutlined } from "@ant-design/icons";
import {
  handleAddModalVisisbility,
  handleDeleteModalVisisbility,
  handleUpdateModalVisisbility,
} from "../actions/action";
import DeleteUserModal from "./modals/DeleteUserModal";
import AddUserModal from "./modals/AddUserModal";
import UpdateUserModal from "./modals/UpdateUserModal";
const UsersTable = () => {
  const [searchUser, setSearchUser] = useState("");
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [updateUserData, setUpdateUserData] = useState(null);
  const userData = useSelector((state) => state.userData);
  const { isDeleteUser, isAddUser, isUpdateUser } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  const columns = [
    {
      title: "User details",
      dataIndex: "userDetails",
      key: "userDetails",
      width: "40%",
      render: (data, row) => {
        return (
          <div className="userDetails-wrap">
            {row.avatar ? (
              <img src={row.avatar} alt="user image" />
            ) : (
              <Avatar size={80} icon={<UserOutlined />} />
            )}

            <h3>
              {row.first_name} {row.last_name}
            </h3>
          </div>
        );
      },
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
      width: "30%",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      width: "30%",
      render: (data, row) => {
        return (
          <div className="actions-wrapper">
            <EditOutlined
              style={{ fontSize: "20px", color: "dodgerblue" }}
              title="Edit user"
              onClick={() => {
                setUpdateUserData(row);
                dispatch(handleUpdateModalVisisbility(true));
              }}
            />
            <DeleteOutlined
              onClick={() => {
                setDeleteUserId(row.id);
                dispatch(handleDeleteModalVisisbility(true));
              }}
              style={{ fontSize: "20px", color: "dodgerblue" }}
              title="Delete user"
            />
          </div>
        );
      },
    },
  ];
  const filteredUsers = userData.filter(({ first_name, last_name }) => {
    let fullName = `${first_name} ${last_name}`;
    return fullName.toLowerCase().includes(searchUser.toLowerCase());
  });
  return (
    <div className="user__TableWrap">
      <div style={{ display: "flex" }}>
        <Input
          onChange={(e) => setSearchUser(e.target.value)}
          placeholder="Search users"
        />
        <Button
          onClick={() => dispatch(handleAddModalVisisbility(true))}
          style={{ width: "25%" }}
          type="primary"
        >
          Add User
        </Button>
      </div>
      <Table
        dataSource={filteredUsers}
        columns={columns}
        rowKey="id"
        size="small"
        bordered
        scroll={{ y: 500 }}
      />
      {isDeleteUser && <DeleteUserModal id={deleteUserId} />}
      {isAddUser && <AddUserModal />}
      {isUpdateUser && <UpdateUserModal {...updateUserData} />}
    </div>
  );
};

export default UsersTable;
