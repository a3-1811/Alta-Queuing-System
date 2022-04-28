import React from 'react';
import './style.scss';
const NumberOfDevideNow = () => {
  return (
    <React.Fragment>
      <div className='flex flex-col items-center justify-center min-h-screen bg-[#f6f6f6]'>
        <h2 className='text-[32px] leading-[48px] font-bold text-[#FF7506] mb-[112px]'>
          Thông tin hiển thị trên thiết bị MHTT_01
        </h2>
        <div className='px-8 py-6'>
          <div className='row'>
            <div className='col'>
              <div className='col-content'>
                <div className='col-item text-primary'>
                  <div className='item-image bg-blue flex items-center justify-center mt-8 mb-2 ml-[43%]'>
                    <img
                      src='./images/icon01.png'
                      alt=''
                      className='object-cover'
                    />
                  </div>
                  <div className='item-name'>201001</div>
                </div>
                <div className='col-title rounded-bl-xl rounded-br-xl bg-primary'>
                  <div className='title-name'>
                    Số thứ tự hiển thị trên thiết bị
                  </div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='col-content'>
                <div className='col-item text-primary'>
                  <div className='item-image bg-orange flex items-center justify-center mt-8 mb-2 ml-[43%]'>
                    <img
                      src='./images/icon02.png'
                      alt=''
                      className='object-cover'
                    />
                  </div>
                  <div className='item-name text-lightOrange'>
                    Quầy dịch vụ số 1
                  </div>
                </div>
                <div className='col-title rounded-bl-xl rounded-br-xl bg-lightOrange'>
                  <div className='title-name'>Vị trí hiển thị thiết bị</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NumberOfDevideNow;
