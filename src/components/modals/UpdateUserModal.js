import React from "react";
import { Modal, Button, Form, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { handleUpdateModalVisisbility, updateUser } from "../../actions/action";
const UpdateUserModal = ({ id, email, first_name, last_name, avatar }) => {
  const dispatch = useDispatch();
  const onFinish = ({ username, email }) => {
    dispatch(updateUser({ first_name: username, email, id, avatar }));
    dispatch(handleUpdateModalVisisbility(false));
  };
  let username = last_name ? `${first_name} ${last_name}` : first_name;
  let initialValuesData = {
    username,
    email,
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Modal
      footer={null}
      visible={true}
      onCancel={() => dispatch(handleUpdateModalVisisbility(false))}
      title="Add User"
    >
      <Form
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 14,
        }}
        initialValues={initialValuesData}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please enter valid email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <div
            style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
          >
            <Button type="primary" htmlType="submit">
              Update
            </Button>
            <Button
              type="primary"
              onClick={() => dispatch(handleUpdateModalVisisbility(false))}
            >
              Cancel
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpdateUserModal;
