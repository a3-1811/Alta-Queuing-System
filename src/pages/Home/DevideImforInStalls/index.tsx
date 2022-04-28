import React from 'react';
import './style.scss';

const DevideImforInStalls = () => {
  return (
    <React.Fragment>
      <div
        className='flex flex-col items-center justify-center min-h-screen bg-white'
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        <h2 className='text-[40px] font-bold text-[#125CFF] mt-[52px] mb-[22px]'>
          Thông tin hiển thị thiết bị MHQ_01
        </h2>
        <div className='px-8 py-6 text-left bg-[#DADADA] w-[1280px] flex items-center justify-center'>
          <div className='w-[537px]'>
            <h3 className='text-3xl font-bold text-center mt-[10px] mb-[40px] '>
              Số thứ tự đang hiển thị trên thiết bị
            </h3>
            <div className='flex items-center justify-center'>
              <div className='col-item'>2010001</div>
            </div>
            <h3 className='text-3xl font-bold text-center mt-[30px] mb-[40px]'>
              Vị trí hiển thị thiết bị
            </h3>
            <div className='flex items-center justify-center mb-[50px]'>
              <div className='col-item'>Quầy dịch vụ số 1</div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center mt-[18px]'>
          <button className='btn-gray'>Đăng xuất</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DevideImforInStalls;
