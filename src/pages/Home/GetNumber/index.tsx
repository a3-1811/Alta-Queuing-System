import React from 'react';
import { Button, Layout, Menu, Select } from 'antd';
import { DropboxOutlined, CaretDownOutlined } from '@ant-design/icons';
import './style.scss';
const { Content, Sider } = Layout;
const GetNumber = () => {
  const { Option } = Select;
  function handleChange(value: any) {
    console.log(`Selected: ${value}`);
  }
  const doctor = [
    'Khám tim mach',
    'Khám phụ khoa',
    'Khám răng',
    'Khám mắt',
    'Khám tai mũi họng',
    'Khám da liễu',
    'Khám tiết niệu',
    'Khám thần kinh',
  ];
  const children = [];
  for (let i = 0; i < doctor.length; i++) {
    children.push(<Option key={i}>{doctor[i]}</Option>);
  }
  return (
    <React.Fragment>
      <Layout>
        <Sider
          breakpoint='lg'
          collapsedWidth='0'
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className='w-[80px] h-[64px] mr-auto ml-auto mt-8 mb-14'>
            <img
              src='./images/Logo_alta.png'
              alt=''
              className='w-full h-full object-cover'
            />
          </div>
          <Menu
            defaultSelectedKeys={['1']}
            items={[DropboxOutlined].map((icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: `Cấp số`,
            }))}
          />
        </Sider>
        <Layout>
          <Content style={{ margin: '24px 16px 0' }}>
            <div className='site-layout-background p-6 font-bold text-xl leading-9 text-lightOrange'>
              Quản lý cấp số
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='text-2xl font-bold leading-9 text-[#0A0A0E] mt-[74px] mb-9'>
                CẤP SỐ MỚI
              </h2>
              <span className='text-xl font-bold text-[#535261] mb-3'>
                Dịch vụ khách hàng lựa chọn
              </span>
              <Select
                suffixIcon={<CaretDownOutlined />}
                size={'large'}
                placeholder='Chọn dịch vụ'
                onChange={handleChange}
                style={{ width: 400, marginBottom: 80 }}
              >
                {children}
              </Select>
              <Button type='primary' size={'large'}>
                Xác nhận
              </Button>
            </div>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default GetNumber;
