import React from 'react'
import { useNavigate,NavLink,Link, LinkProps } from 'react-router-dom'

type Props = {
  children?: JSX.Element | JSX.Element[],
}

const PrivateTemplate = (props: Props) => {
  return (
    <div className={`overflow-hidden h-screen w-full max-h-screen md:p-1 flex relative`}>
      {/* Navbar */}
      <nav className="dashboard bg-transparent border-gray-200 sm:px-4 py-2.5 z-10 w-[200px] h-full">
          <div className="left-nav w-full h-full flex flex-col items-center">
            <div className="logo flex justify-center items-center h-[100px] w-full ">
              <Link to="/" className="flex items-center h-1/3 w-1/3 object-cover">
                <img src="./images/Logo_alta.png" alt="" />
              </Link>
            </div>
            <ul className="flex flex-col items-center w-full h-full">
              <NavLink className="block w-full" to="/dashboard">
              <li className="px-[17px] py-[10px] text-sm font-medium text-gray-500 hover:text-white hover:bg-primary">
                <i className="fa fa-table mr-[8px]"></i>Dashboard
              </li>
                </NavLink>
                <NavLink className="block w-full" to="/manager-chanllenge" >
              <li className="px-[17px] py-[10px] text-sm font-medium text-gray-500 hover:text-white hover:bg-primary">
              <i className="fa fa-desktop mr-[8px]"></i>Thiết bị
              </li>
                </NavLink>
                <NavLink className="block w-full" to="/manager-difficult" >
              <li className="px-[17px] py-[10px] text-sm font-medium text-gray-500 hover:text-white hover:bg-primary flex gap-x-1">
              <div className="h-[20px] w-[20px]"><img src="./images/svgs/icon-group.svg" alt="" /></div>Dịch vụ
              </li>
                </NavLink>
                <NavLink className="block w-full" to="/manager-notification" >
              <li className="px-[17px] py-[10px] text-sm font-medium text-gray-500 hover:text-white hover:bg-primary flex gap-x-1">
              <div className="h-[20px] w-[20px]"><img src="./images/svgs/icon-layers.svg" alt="" /></div>Cấp số
              </li>
                </NavLink>
                <NavLink className="block w-full"  to="/manager-user" >
              <li className="px-[17px] py-[10px] text-sm font-medium text-gray-500 hover:text-white hover:bg-primary flex gap-x-1">
              <div className="h-[20px] w-[20px]"><img src="./images/svgs/icon-frame.svg" alt="" /></div>Báo cáo
              </li>
                </NavLink>
                <NavLink className="block w-full" to="/statistic" >
              <li className="px-[17px] py-[10px] text-sm font-medium text-gray-500 hover:text-white hover:bg-primary flex gap-x-1">
              <div className="h-[20px] w-[20px]"><img src="./images/svgs/icon-setting.svg" alt="" /></div>cài đặt hệ thống
              </li>
                </NavLink>
              <button className="block text-left w-full mt-auto bg-primary bg-opacity-10 " >
                <li className="px-[17px] py-[10px] text-sm font-medium text-primary hover:text-white hover:bg-primary">
                <i className="fa fa-sign-out-alt mr-[8px] text-primary"></i>Đăng xuất
                </li>
              </button>
            </ul>
          </div>
      </nav>
      {/* Content redering */}
      <div className="md:p-5 main__content px-5 w-full">{props.children}</div>
      <div className="user fixed top-[10px] right-[48px] flex items-center">
        <div className="iconBox bg-yellow-500 bg-opacity-10 rounded-full h-9 w-9 flex justify-center items-center">
          <i className="fa fa-bell text-yellow-400"></i>
        </div>
          <div className="info flex items-center gap-x-2">
            <div className="imgBox h-10 w-10 ml-6 rounded-full">
              <img src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg" className="rounded-full h-full w-full" alt="useraLT" />
            </div>
            <div className="flex flex-col items-start ">
              <span className="text-xs">Hello</span>
              <span className="text-sm font-bold">Dương Quốc Nam</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default PrivateTemplate