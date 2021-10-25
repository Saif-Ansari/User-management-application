import React from "react";
import { Modal, Button, Form, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { handleAddModalVisisbility, addUser } from "../../actions/action";
const AddUserModal = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(addUser(values));
    dispatch(handleAddModalVisisbility(false));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Modal
      footer={null}
      visible={true}
      onCancel={() => dispatch(handleAddModalVisisbility(false))}
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
        initialValues={{}}
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
              Submit
            </Button>
            <Button
              type="primary"
              onClick={() => dispatch(handleAddModalVisisbility(false))}
            >
              Cancel
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddUserModal;
