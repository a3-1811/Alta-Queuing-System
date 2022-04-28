import React from 'react';
type Props = {
  children: JSX.Element | JSX.Element[]
}
const NumberOfDevideTemplated = ({children}:Props) => {
  return (
    <React.Fragment>
      <div className='fixed top-2 left-12'>
        <div className='w-[60px] h-[48px]'>
          <img
            src='./images/Logo_alta.png'
            alt=''
            className='w-full h-full object-cover'
          />
        </div>
      </div>
      {children}
      {/* <NumberOfDevide /> */}
      {/* <NumberOfDevideMain /> */}
      {/* <NumberOfDevideNow /> */}
    </React.Fragment>
  );
};

export default NumberOfDevideTemplated;
