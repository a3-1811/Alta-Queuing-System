import React from 'react';
import { Input } from 'antd';
const Login = () => {
  return (
        <div className='flex justify-center items-center w-full'>
      <div className='flex flex-col justify-center items-center w-[400px] bg-[#E5E5E5]'>
        <div className='w-[170px] h-[137px] mt-[82px] mb-[75px]'>
          <img
            src='./images/Logo_alta.png'
            alt='Logo'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='login-form w-full'>
          <form className='w-full'>
            <div className='form-group'>
              <label className='text-lg font-normal text-black'>
                Tên Đăng Nhập *
              </label>
              <Input className='w-full h-11' />
            </div>
            <div className='form-group'>
              <label className='text-lg font-normal text-black'>
                Mật Khẩu *
              </label>
              <Input.Password className='w-full h-11' />
            </div>
            <div className='d-flex justify-content-center align-items-center mt-[48px]'>
              <button type='submit' className='btn-primary'>
                Đăng nhập
              </button>
            </div>
            <div className='flex justify-center items-center'>
              <a
                href='./'
                className='text-danger mt-2 text-base font-normal text-center hover:text-danger'
              >
                Quên mật khẩu?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
