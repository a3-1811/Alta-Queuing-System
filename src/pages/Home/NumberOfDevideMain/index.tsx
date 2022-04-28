import React from 'react';
import './style.scss';
const NumberOfDevideMain = () => {
  return (
    <React.Fragment>
      <div className='flex flex-col items-center justify-center min-h-screen bg-[#f6f6f6]'>
        <h2 className='text-[30px] font-bold text-[#FF7506] mt-[40px] mb-[20px]'>
          Thông tin hiển thị trên thiết bị MHTT_01
        </h2>
        <div className='px-8 py-6 text-left'>
          <h3 className='text-xl font-bold text-left text-[#282739] mb-5'>
            Số thứ tự đang hiển thị trên thiết bị
          </h3>
          <div className='row'>
            <div className='col'>
              <div className='col-content'>
                <div className='col-item text-lightRed'>201001</div>
                <div className='col-title rounded-bl-xl rounded-br-xl bg-lightRed'>
                  <div className='title-name'>Quầy dịch vụ số 1</div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='col-content'>
                <div className='col-item text-lightPink'>202001</div>
                <div className='col-title rounded-bl-xl rounded-br-xl bg-lightPink'>
                  <div className='title-name'>Quầy dịch vụ số 2</div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='col-content'>
                <div className='col-item text-lightOrange'>203001</div>
                <div className='col-title rounded-bl-xl rounded-br-xl bg-lightOrange'>
                  <div className='title-name'>Quầy dịch vụ số 3</div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='col-content'>
                <div className='col-item text-lightBlue'>204001</div>
                <div className='col-title rounded-bl-xl rounded-br-xl bg-lightBlue'>
                  <div className='title-name'>Quầy dịch vụ số 4</div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='col-content'>
                <div className='col-item text-lightGreen'>205001</div>
                <div className='col-title rounded-bl-xl rounded-br-xl bg-lightGreen'>
                  <div className='title-name'>Quầy dịch vụ số 5</div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='col-content'>
                <div className='col-item text-lightPurple'>206001</div>
                <div className='col-title rounded-bl-xl rounded-br-xl bg-lightPurple'>
                  <div className='title-name'>Quầy dịch vụ số 6</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NumberOfDevideMain;
