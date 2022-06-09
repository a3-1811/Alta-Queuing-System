import React, { useEffect } from "react";
import { Form, Input, Layout } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import Swal from "sweetalert2";
import {
  updateUser,
  LoginAsync,
  selectUser,
  selectUserStatus
} from "../../../features/user/userSlice";
const { Sider, Content } = Layout;

const Login = () => {
  const statusLogin = useAppSelector(selectUserStatus);
  const user = useAppSelector(selectUser);

  const dispatch = useAppDispatch();
  const history = useNavigate();
  const onFinish = (value: any)=>{
    // Login
    dispatch(LoginAsync(value))
  }
  useEffect(() => {
    if(statusLogin === 'idle' && user){
      Swal.fire(
        {
          title: "Success!",
          text: "Đăng nhập thành công!",
          icon: "success",
          confirmButtonText: "Xác nhận",
        }
      )
      let temp = {...user}
      delete temp.matKhau
      localStorage.setItem('user',JSON.stringify(temp))
      setTimeout(()=>{
        history('/dashboard')
      },1000)
    }else if(statusLogin === 'failed'){
      Swal.fire(
        {
          title: "Eror!",
          text: "Đăng nhập thất bại!",
          icon: "error",
          confirmButtonText: "Xác nhận",
        }
      )
    }
  }, [statusLogin,user])
  
  return (
    <React.Fragment>
      <Layout className="h-screen bg-primary-light-gray">
        <Content className="w-[592px]">
          <div className="flex justify-center items-center w-full bg-primary-light-gray">
            <div className="flex flex-col justify-center items-center w-[400px]">
              <div className="w-[170px] h-[136px] mt-[60px] mb-[60px]">
                <img
                  src="./images/Logo_alta.png"
                  alt="Logo-Alta"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full">
                <Form className="w-full" onFinish={onFinish}>
                  <div>
                    <Form.Item
                      label="Tên đăng nhập"
                      name="tenDangNhap"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập tên đăng nhập",
                        },
                      ]}
                    >
                      <Input className="w-full h-11 rounded-lg  hover:border-primary" />
                    </Form.Item>
                  </div>
                  <div className="mt-4">
                    <Form.Item
                      label="Mật khẩu"
                      name="matKhau"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập mật khẩu",
                        },
                      ]}
                    >
                      <Input.Password className="w-full h-11 rounded-lg" />
                    </Form.Item>
                  </div>
                  <div className="text-center mt-[48px]">
                    <button type="submit" className="btn-primary">
                      Đăng nhập
                    </button>
                  </div>
                  <div className="flex justify-center items-center">
                    <Link
                      to="/resetpass"
                      className="text-primary-red mt-2 text-base font-normal text-center hover:text-primary-red"
                    >
                      Quên mật khẩu?
                    </Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Content>
        <Sider width={"848px"}>
          <div
            style={{
              height: "100vh",
              backgroundImage: "url(./images/poster01.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              objectFit: "cover",
            }}
          ></div>
        </Sider>
      </Layout>
    </React.Fragment>
  );
};

export default Login;
