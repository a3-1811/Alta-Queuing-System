import React from 'react';
import './style.scss';
const NumberOfDevide = () => {
  return (
    <React.Fragment>
      <div className='flex flex-col items-center justify-center min-h-screen bg-[#f6f6f6]'>
        <h2 className='text-[30px] font-bold text-[#FF7506] mt-[40px] mb-[6px]'>
          Thông tin hiển thị trên thiết bị KIO_01
        </h2>
        <div className='px-8 py-6 text-left'>
          <h3 className='text-xl font-bold text-left text-[#282739] mb-4'>
            Các lựa chọn cho khách hàng:
          </h3>
          <div className='row'>
            <div className='col'>
              <div className='col-content'>
                <div className='col-item flex justify-center items-center '>
                  <img
                    src='./images/Heart.png'
                    alt=''
                    className='object-cover mt-4'
                  />
                </div>
                <div className='col-title rounded-bl-xl rounded-br-xl bg-lightRed'>
                  <div className='title-name '>Khám tim mạch</div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='col-content'>
                <div className='col-item flex justify-center items-center '>
                  <img
                    src='./images/Frame.png'
                    alt=''
                    className='object-cover mt-4'
                  />
                </div>
                <div className='col-title rounded-bl-xl rounded-br-xl bg-lightPink'>
                  <div className='title-name'>Khám sản - Phụ khoa</div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='col-content'>
                <div className='col-item flex justify-center items-center '>
                  <img
                    src='./images/Ear.png'
                    alt=''
                    className='object-cover mt-4'
                  />
                </div>
                <div className='col-title rounded-bl-xl rounded-br-xl bg-lightOrange'>
                  <div className='title-name'>Khám tai mũi hong</div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='col-content'>
                <div className='col-item flex justify-center items-center '>
                  <img
                    src='./images/Teeth.png'
                    alt=''
                    className='object-cover mt-4'
                  />
                </div>
                <div className='col-title rounded-bl-xl rounded-br-xl bg-lightBlue'>
                  <div className='title-name'>Khám răng hàm mặt</div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='col-content'>
                <div className='col-item flex justify-center items-center '>
                  <img
                    src='./images/Lung.png'
                    alt=''
                    className='object-cover mt-4'
                  />
                </div>
                <div className='col-title rounded-bl-xl rounded-br-xl bg-lightGreen'>
                  <div className='title-name'>Khám hô hấp</div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='col-content'>
                <div className='col-item flex justify-center items-center '>
                  <img
                    src='./images/Doctor.png'
                    alt=''
                    className='object-cover mt-4'
                  />
                </div>
                <div className='col-title rounded-bl-xl rounded-br-xl bg-lightPurple'>
                  <div className='title-name'>Khám tổng quát</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NumberOfDevide;
