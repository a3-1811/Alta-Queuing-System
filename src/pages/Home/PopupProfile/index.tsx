import React, { useState } from 'react';
import { Modal, Button, Input } from 'antd';
import './style.scss';

const PopupProfile = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className='flex justify-center items-center'>
      <Button type='primary' onClick={showModal}>
        Click me
      </Button>
      <Modal
        title='Điền thông tin của bạn'
        closable={false}
        visible={isModalVisible}
        footer={null}
      >
        <div className='flex justify-center items-center w-full'>
          <div className='flex flex-col justify-center items-center w-[499px]'>
            <div className='login-form w-full'>
              <form className='w-full'>
                <div className='form-group'>
                  <label className='text-lg font-normal text-black'>
                    Họ và tên <span className='text-red-600'>*</span>
                  </label>
                  <Input
                    className='w-full h-11 '
                    placeholder='Nhập họ và tên của bạn'
                  />
                </div>
                <div className='form-group'>
                  <label className='text-lg font-normal text-black'>
                    Số điện thoại <span className='text-red-600'> *</span>
                  </label>
                  <Input
                    className='w-full h-11'
                    placeholder='Nhập số điện thoại của bạn'
                  />
                </div>
                <div className='form-group'>
                  <label className='text-lg font-normal text-black'>
                    Email <span className='text-red-600'> *</span>
                  </label>
                  <Input
                    className='w-full h-11 '
                    placeholder='Nhập email của bạn'
                  />
                </div>
                <span className='text-sm font-normal leading-5'>
                  <strong className='text-red-600'>* </strong>
                  Là trường thông tin bắt buộc
                </span>
                <div className='d-flex justify-content-center align-items-center mt-[20px] gap-x-[33px]'>
                  <button
                    type='submit'
                    className='btn-primary btn-outline'
                    onClick={handleCancel}
                  >
                    Hủy bỏ
                  </button>
                  <button
                    type='submit'
                    className='btn-primary'
                    onClick={handleOk}
                  >
                    Xác nhận
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PopupProfile;
