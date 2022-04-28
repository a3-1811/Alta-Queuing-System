import React from 'react';
import { Layout } from 'antd';
import ResetPassword from '../pages/Home/ResetPassword';
const { Sider, Content } = Layout;
type Props = {
  children?: JSX.Element | JSX.Element[]
}
const ResetPasswordTemplate = ({children}:Props) => {
  return (
    <React.Fragment>
      <Layout style={{ height: '100vh' }}>
        <Content style={{ width: '592px', backgroundColor: '#E5E5E5' }}>
          <ResetPassword></ResetPassword>
        </Content>
        <Sider width={'848px'}>
          <div
            style={{
              height: '100vh',
              backgroundImage: 'url(./images/poster02.png)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              objectFit: 'cover',
            }}
          ></div>
        </Sider>
      </Layout>
    </React.Fragment>
  );
};

export default ResetPasswordTemplate;
