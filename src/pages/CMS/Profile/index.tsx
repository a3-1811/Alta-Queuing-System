import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Input, Upload, Button } from 'antd';
import { CameraOutlined } from '@ant-design/icons';
import './style.scss';
type LayoutType = Parameters<typeof Form>[0]['layout'];

const Profile = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('vertical');
  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  useEffect(() => {
    form.setFieldsValue({
      username: 'Lê Quỳnh Ái Vân',
      phoneNumber: '0767375921',
      email: 'adminSS01@gmail.com',
      loginName: 'lequynhaivan01',
      password: '311940211',
      role: 'Kế toán',
    });
  }, []);
  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };
  return (
    <div className='profile content pl-[24px] pt-[29px] pr-[100px] relative'>
      <div className='path text-primary-400 font-bold text-lg mb-20'>
        Thông tin cá nhân
      </div>
      <div className='py-10 px-4 rounded-2xl shadow-[2px_2px_8px_rgba(232, 239, 244, 0.8)] bg-white'>
        <Form
          layout={formLayout}
          form={form}
          initialValues={{ layout: formLayout }}
          onValuesChange={onFormLayoutChange}
        >
          <Row gutter={{ sm: 16, md: 24, lg: 32 }}>
            <Col className='gutter-row' span={8}>
              <div className='relative flex flex-col justify-center items-center'>
                <div className='w-[248px] h-[248px] text-center'>
                  <img
                    className='w-full h-full object-cover rounded-[318px]'
                    src='https://i.pinimg.com/236x/57/dc/75/57dc75dde00479a9668945fa251ba92b.jpg'
                    alt='avatar'
                  />
                </div>
                <h2 className='mt-5 text-center text-2xl font-bold leading-9 text-primary-gray-500'>
                  Lê Quỳnh Ái Vân
                </h2>
                <div className='absolute w-11 h-11 bg-primary border-2 border-solid border-white flex justify-center items-center rounded-full top-52 left-48 cursor-pointer'>
                  <Form.Item
                    name='upload'
                    valuePropName='fileList'
                    getValueFromEvent={normFile}
                  >
                    <Upload name='logo' action='/upload.do' listType='picture'>
                      <Button icon={<CameraOutlined />}></Button>
                    </Upload>
                  </Form.Item>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <Form.Item
                label='Tên người dùng'
                className='text-base font-semibold leading-6 text-primary-gray-500'
                name='username'
              >
                <Input placeholder='username'  disabled/>
              </Form.Item>
              <Form.Item
                label='Số điện thoại'
                className='text-base font-semibold leading-6 text-primary-gray-500'
                name='phoneNumber'
              >
                <Input placeholder='0779382202'  disabled/>
              </Form.Item>
              <Form.Item
                label='Email'
                className='text-base font-semibold leading-6 text-primary-gray-500'
                name='email'
              >
                <Input placeholder='example@gmail.com'  disabled/>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label='Tên đăng nhập'
                className='text-base font-semibold leading-6 text-primary-gray-500'
                name='loginName'
              >
                <Input placeholder='ádads' disabled />
              </Form.Item>
              <Form.Item
                label='Mật khẩu'
                className='text-base font-semibold leading-6 text-primary-gray-500'
                name='password'
              >
                <Input placeholder='32127189' className=''  disabled/>
              </Form.Item>
              <Form.Item
                label='Vai trò'
                className='text-base font-semibold leading-6 text-primary-gray-500'
                name='role'
              >
                <Input placeholder='Tester'  disabled/>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
