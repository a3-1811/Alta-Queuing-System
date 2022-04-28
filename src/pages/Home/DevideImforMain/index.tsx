import React from 'react';
import './style.scss';

const DevideImforMain = () => {
  return (
    <React.Fragment>
      <div
        className='flex flex-col items-center justify-center min-h-screen bg-white'
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        <h2 className='text-[40px] font-bold text-[#125CFF] mt-[22px] mb-[22px]'>
          Thông tin hiển thị trên thiết bị MHTT_01
        </h2>
        <div className='px-8 py-6 text-left bg-[#DADADA] w-[1280px] '>
          <h3 className='text-2xl font-bold text-center mb-[40px]'>
            Số thứ tự đang hiển thị trên thiết bị
          </h3>
          <div className='row'>
            <div className='col'>
              <div className='col-content'>
                <div className='col-item'>201001</div>
                <div className='col-title'>
                  <div className='title-name'>Quầy dịch vụ số 1</div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='col-content'>
                <div className='col-item'>202001</div>
                <div className='col-title'>
                  <div className='title-name'>Quầy dịch vụ số 2</div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='col-content'>
                <div className='col-item'>203001</div>
                <div className='col-title'>
                  <div className='title-name'>Quầy dịch vụ số 3</div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='col-content'>
                <div className='col-item'>204001</div>
                <div className='col-title'>
                  <div className='title-name'>Quầy dịch vụ số 4</div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='col-content'>
                <div className='col-item'>205001</div>
                <div className='col-title'>
                  <div className='title-name'>Quầy dịch vụ số 5</div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='col-content'>
                <div className='col-item'>206001</div>
                <div className='col-title'>
                  <div className='title-name'>Quầy dịch vụ số 6</div>
                </div>
              </div>
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

export default DevideImforMain;
