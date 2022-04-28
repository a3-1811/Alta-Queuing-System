import React from 'react';
import { Input } from 'antd';
const ResetNewPassword = () => {
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
              Đặt lại mật khẩu mới
            </h1>
            <div className='form-group'>
              <label className='text-lg font-normal text-black'>Mật khẩu</label>
              <Input.Password className='w-full h-11' />
            </div>
            <div className='form-group'>
              <label className='text-lg font-normal text-black'>
                Nhập lại mật khẩu
              </label>
              <Input.Password className='w-full h-11' />
            </div>
            <div className='d-flex justify-content-center align-items-center mt-[48px] '>
              <button type='submit' className='btn-primary'>
                Xác nhận
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetNewPassword;
