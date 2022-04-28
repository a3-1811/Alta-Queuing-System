import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import './style.scss';
const PopupPrintNumber = () => {
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
    <>
      {/* <Button type='primary' onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title=''
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >

      </Modal> */}
    </>
  );
};

export default PopupPrintNumber;
