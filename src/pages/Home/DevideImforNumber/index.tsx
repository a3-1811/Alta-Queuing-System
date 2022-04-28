import React from 'react';
import './style.scss';
import { Row, Col } from 'antd';

const DevideInforNumber = () => {
  return (
    <React.Fragment>
      <div
        className='flex flex-col items-center justify-center min-h-screen bg-white'
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        <h2 className='text-[40px] font-bold text-[#125CFF] mt-[22px] mb-[22px]'>
          Thông tin hiển thị trên thiết bị KIO_01
        </h2>
        <div className='px-8 py-6 text-left bg-[#DADADA] w-[1280px] '>
          <h3 className='text-2xl font-bold text-center mb-[50px]'>
            Các lựa chọn cho khách hàng
          </h3>
          <Row
            gutter={{ sm: 16, md: 24, lg: 32 }}
            style={{ marginBottom: '100px' }}
          >
            <Col className='gutter-row  mb-[40px]' span={8}>
              <div style={{fontSize: '20px'}} className='col-item'>Khám tim mạch</div>
            </Col>
            <Col className='gutter-row  ' span={8}>
              <div style={{fontSize: '20px'}} className='col-item'>Khám sản - Phụ khoa</div>
            </Col>
            <Col className='gutter-row  ' span={8}>
              <div style={{fontSize: '20px'}} className='col-item'>Khám tai mũi họng</div>
            </Col>
            <Col className='gutter-row' span={8}>
              <div style={{fontSize: '20px'}} className='col-item'>Khám răng hàm mặt</div>
            </Col>
            <Col className='gutter-row' span={8}>
              <div style={{fontSize: '20px'}} className='col-item'>Khám hô hấp</div>
            </Col>
            <Col className='gutter-row' span={8}>
              <div style={{fontSize: '20px'}} className='col-item'>Khám tổng quát</div>
            </Col>
          </Row>
        </div>
        <div className='flex items-center justify-center mt-[18px]'>
          <button className='btn-gray'>Đăng xuất</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DevideInforNumber;
