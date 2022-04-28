import React from 'react';
import { Input } from 'antd';
const ResetPassword = () => {
  return (
    <div className='flex justify-center items-center w-full'>
      <div className='flex flex-col justify-center items-center w-[400px]'>
        <div className='w-[170px] h-[137px] mt-[82px] mb-[75px]'>
          <img
            src='./images/Logo_alta.png'
            alt='Logo'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='login-form w-full'>
          <form className='w-full'>
            <h1 className='text-center font-bold text-[22px] leading-8'>
              Đặt lại mật khẩu
            </h1>
            <div className='form-group'>
              <label className='text-lg font-normal text-black'>
                Vui lòng nhập email để đăt lại mật khẩu của bạn *
              </label>
              <Input className='w-full h-11 rounded-lg' />
            </div>
            <div className='d-flex justify-content-center align-items-center mt-[48px] gap-x-[33px]'>
              <button type='submit' className='btn-primary btn-outline'>
                Hủy
              </button>
              <button type='submit' className='btn-primary'>
                Tiếp tục
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
