import React, { useEffect, useState } from 'react';
import { Form, Input, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from "../../../app/hooks";
import UserServices from "../../../db/services/user.services";
import IUser from "../../../db/types/user.type";
import {  setForgotEmail } from "../../../features//user/userSlice";

import Swal from "sweetalert2";
const { Sider, Content } = Layout;

const ResetPassword = () => {
  const dispatch = useAppDispatch()
  const history = useNavigate()
  const [users, setUsers] = useState<IUser[]>([])
  const cancel = ()=>{
    history('/login')
  }
  useEffect(() => {
   (async()=>{
    let users = await UserServices.getUsers()
    setUsers(users)
   })()
  }, [])
  
  const onFinish = (values : any)=>{
    let index = users.findIndex((user)=>user.email === values.email)
    if(index !== -1){
      dispatch(setForgotEmail(users[index].email))
      setTimeout(() => {
        history('/newpass')
      }, 700);
    }else{
      Swal.fire( {
        title: "Eror!",
        text: "Email không tồn tại!",
        icon: "error",
        confirmButtonText: "Xác nhận",
      })
    }
  }
  return (
    <React.Fragment>
      <Layout className='h-screen bg-primary-light-gray'>
        <Content className='w-[592px]'>
          <div className='flex justify-center items-center w-full bg-primary-light-gray'>
            <div className='flex flex-col justify-center items-center w-[400px]'>
              <div className='w-[170px] h-[137px] mt-[60px] mb-[60px]'>
                <img
                  src='./images/Logo_alta.png'
                  alt='Logo'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='w-full'>
                <Form className="w-full" onFinish={onFinish}>
                  <h1 className='text-center text-primary-gray-500 font-bold text-[22px] leading-8'>
                    Đặt lại mật khẩu
                  </h1>
                  <div className='mt-4'>
                  <Form.Item
                      label="Vui lòng nhập email để đăt lại mật khẩu của bạn"
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập email",
                        },
                        {
                          type: 'email',
                          message: 'Vui lòng nhập đúng định dạng'
                        }
                      ]}
                    >
                      <Input className="w-full h-11 rounded-lg  hover:border-primary" />
                    </Form.Item>
                  </div>
                  <div className='flex justify-center mt-[48px] gap-x-[33px]'>
                    <button
                      className='btn-primary btn-outline text-base'
                      onClick={cancel}
                    >
                      Hủy
                    </button>
                    <button type='submit' className='btn-primary text-base'>
                      Tiếp tục
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Content>
        <Sider width={'848px'}>
          <div
            style={{
              height: '100vh',
              backgroundImage: 'url(./images/poster02.png)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              objectFit: 'cover',
            }}
          ></div>
        </Sider>
      </Layout>
    </React.Fragment>
  );
};

export default ResetPassword;
