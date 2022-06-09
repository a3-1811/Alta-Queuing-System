import React, { useEffect, useState } from 'react';
import { Form, Input, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch,useAppSelector } from "../../../app/hooks";
import { forgotEmail,setForgotEmail } from "../../../features/user/userSlice";
import Swal from "sweetalert2";
import UserServices from "../../../db/services/user.services";
import IUser  from "../../../db/types/user.type";

const { Sider, Content } = Layout;

const ResetNewPassword = () => {
  const emailForgot = useAppSelector(forgotEmail)
  const [users ,setUsers] = useState<IUser[]>([])
  const dispatch = useAppDispatch()
  const history = useNavigate()
  useEffect(() => {
    (async ()=>{
      if(!emailForgot){
        history('/resetpass')
      }else{
        let data = await UserServices.getUsers()
        setUsers(data)
      }
    })()
  }, [])
  
  const onFinish = async(values : any)=>{
    let {matKhau, nhapLaiMatKhau} =values
    if(!emailForgot){
      history('/resetpass')
    }else{
      if(matKhau !== nhapLaiMatKhau){
        Swal.fire( {
          title: "Eror!",
          text: "Hai mật khẩu không trùng khớp!",
          icon: "error",
          confirmButtonText: "Xác nhận",
        })
        return;
      }else{
        let index = users.findIndex(item=>item.email === emailForgot)
        if(index !== -1){
          let temp = {...users[index],matKhau : matKhau}
          await UserServices.updateUser(temp)
          Swal.fire( {
            title: "Success!",
            text: "Cập nhật mật khẩu mới thành công!",
            icon: "success",
            confirmButtonText: "Xác nhận",
          })
          dispatch(setForgotEmail(''))
          setTimeout(() => {
            history('/login')
          }, 700);
        }
      }
    }
  }
  return (
    <React.Fragment>
      <Layout className='h-screen'>
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
                  <h1 className='text-center text-primary-gray-500 font-bold text-[22px] leading-8 mb-3'>
                    Đặt lại mật khẩu mới
                  </h1>
                  <div className=''>
                  <Form.Item
                      label="Mật khẩu"
                      name="matKhau"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập mật khẩu",
                        },
                      ]}
                    >
                      <Input.Password className='w-full h-11 rounded-lg  hover:border-primary' />
                    </Form.Item>
                  </div>
                  <div className='mt-4'>
                  <Form.Item
                      label="Nhập lại mật khẩu"
                      name="nhapLaiMatKhau"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập mật khẩu",
                        },
                      ]}
                    >
                      <Input.Password className='w-full h-11 rounded-lg  hover:border-primary' />
                    </Form.Item>
                  </div>
                  <div className='text-center mt-[48px] '>
                    <button type='submit' className='btn-primary text-base'>
                      Xác nhận
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

export default ResetNewPassword;
