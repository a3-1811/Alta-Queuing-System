import React from 'react';
import DevideImforMain from '../pages/Home/DevideImforMain';
// import DevideImforInStalls from '../pages/Home/DevideImforInStalls';
// import DevideInforNumber from '../pages/Home/DevideImforNumber';
// import LoginViewProfile from '../pages/Home/LoginViewProfile';
type Props = {
  children: JSX.Element | JSX.Element[]
}
const DevideImformationTemplate = ({children}:Props) => {
  return (
    <>
      <div className='fixed w-full h-[50px] bg-primary'>
        <div className='flex items-center h-full ml-[220px]'>
          <div className='w-[68px] h-[28px]'>
            <img
              src='./images/logo.png'
              alt=''
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
      {children}
      {/* <LoginViewProfile /> */}
      {/* <DevideInforNumber /> */}
      {/* <DevideImforInStalls /> */}
      {/* <DevideImforMain /> */}
    </>
  );
};

export default DevideImformationTemplate;
