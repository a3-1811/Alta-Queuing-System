import React from 'react';
import './style.scss';
const LoginViewProfile = () => {
  return (
    <React.Fragment>
      <div className='flex items-center justify-center min-h-screen bg-[#E5E5E5] '>
        <div className='px-8 py-6 text-left bg-[#E5E5E5] w-[680px] mt-[60px]'>
          <h3 className='text-2xl font-bold text-left'>Đăng nhập</h3>
          <form>
            <div className='mt-[38px]'>
              <div className='text-field'>
                <label htmlFor='userName'>Tên đăng nhập *</label>
                <input
                  autoComplete='off'
                  type='text'
                  id='username'
                  placeholder='Nhập tên đăng nhập'
                />
              </div>
              <div className='text-field mt-5 mb-[100px]'>
                <label htmlFor='passWord'>Mật khẩu *</label>
                <input
                  autoComplete='off'
                  type='password'
                  id='password'
                  placeholder='Typing something'
                />
              </div>
              <div className='flex items-baseline justify-between'>
                <a href='#!' className='text-sm text-blue-600 hover:underline'>
                  Quên mật khẩu?
                </a>
                <button className='px-3 py-3 text-white bg-blue-600 rounded-sm hover:bg-blue-600'>
                  Đăng nhập
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginViewProfile;
