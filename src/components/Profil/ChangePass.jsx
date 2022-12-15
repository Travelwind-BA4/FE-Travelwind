import { Form, Input } from 'antd';
import React from 'react';
import { useState } from 'react';
import { VscKey } from 'react-icons/vsc';
import useUsers from '../../services/api/useUsers';

const ChangePass = () => {
  const { ChangePassword } = useUsers();
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleChange = (value) => {
    // const password = value.password;
    ChangePassword(value)
    
  }
  return (
    <div className="bg-[#f1f5f5] px-10 py-4 rounded-lg ">
      <div>
        <h1 className="flex items-center text-2xl ">
          <VscKey className="mr-4" /> Change Password
        </h1>
        <hr className="my-4" />
        <Form
        layout='vertical'
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={handleChange}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      requiredMark={false}
      
    >
      {/* <Form.Item
        className="border-b border-black mr-[300px]"
        label="Fullname"
        name="Fullname"
        rules={[
          {
            required: true,
            message: 'Please input new password',
          },
        ]}
      >
        <Input bordered={false} />
      </Form.Item> */}

      <Form.Item
      className="border-b border-black mr-[300px]"
        label="New Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input confirm password',
          },
        ]}
      >
        <Input.Password bordered={false}  />
        
      </Form.Item>

      <button type='submit' className='mt-4 bg-[#3e5cb8] px-4 py-1 text-white text-base font-medium rounded-md '>Submit</button>
      
    </Form>
      </div>
    </div>
  )
}

export default ChangePass;