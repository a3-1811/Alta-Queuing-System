import React from 'react'
import { Link } from 'react-router-dom';

type Props = {
  children?: JSX.Element | JSX.Element[];
}

const HomeTemplate = (props: Props) => {
  /** 
   * Links : login, reset-password, reset-new-password, 
   * Devices : LoginViewProfile DevideInforNumber DevideImforInStalls DevideImforMain
   * Numbers: NumberOfDevide NumberOfDevideMain NumberOfDevideNow
   * GetNumber
   */
  const links = [
    "login", "reset-password","reset-new-password","LoginViewProfile","DevideImforInStalls",
  "GetNumber"
  ]
  return (
    <div className='relative'>
      <nav className='flex items items-center fixed top-0 left-0 w-full h-[80px] z-50 bg-black text-white bg-opacity-40'>
        {links.map((link)=>{
          return <Link className='text-white  px-2 py-1 bg-primary ml-2 rounded-md' key={link} to={`/${link === "login" ? "" : link}`}>{link}</Link>
        })}
      </nav>
       {props.children}
    </div>
  )
}

export default HomeTemplate