import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Input, Select, TimePicker, Button } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import './style.scss';
import DeviceServices from "../../../../db/services/device.services";
import IDevice from "../../../../db/types/device.type";
import ServiceServices from "../../../../db/services/service.services";
import IService from "../../../../db/types/service.type";
import Swal from "sweetalert2";
import { useAppSelector} from "../../../../app/hooks";
import { selectUser } from "../../../../features/user/userSlice";
import LogServices from "../../../../db/services/log_system.services";
import { fetchIP } from "../../../../db/others/ipaddress";
import { useNavigate, useParams } from 'react-router-dom';
const UpdateDevice = () => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const [devices, setDevices] = useState<IDevice[]>([])
  const [services, setServices] = useState<IService[]>([])
  const [deviceUpdate, setDeviceUpdate] = useState<IService>()
  const {id} = useParams()
  const history = useNavigate()
  const me = useAppSelector(selectUser)
  useEffect(() => {
    //Data demo
    (async()=>{
      let data = await DeviceServices.getDevices()
      let index = data.findIndex(item=>item.id === id)
      if(index===-1){
        history('/devices-management')
      }else{
        setDevices(data)
        let services = await ServiceServices.getServices()
        setServices(services)
        let temp = {...data[index]}
        setDeviceUpdate(temp as any)
        form.setFieldsValue({
          maThietBi : temp.maThietBi,
          tenThietBi : temp.tenThietBi,
          tenDangNhap : temp.tenDangNhap,
          ip : temp.ip,
          loaiThietBi : temp.loaiThietBi,
          matKhau: temp.matKhau,
          dichVuSuDung : temp.dichVuSuDung
        });
      } 
    })()
  }, []);
  
  function handleChange(value: any) {
    console.log(`Selected: ${value}`);
  }
  const deciceList = ['Kiosk','Display counter'];
  const children = [];
  for (let i = 0; i < deciceList.length; i++) {
    children.push(<Option key={deciceList[i]}>{deciceList[i]}</Option>);
  }
  const onFinish = async(values: any) => {
    let device : IDevice = {
      ...values,
      trangThaiHoatDong: true,
      trangThaiKetNoi :true,
      id:id
    }
    let index = devices?.filter(item=>item.id !== deviceUpdate?.id ).findIndex(item=>item.maThietBi === device.maThietBi)
    if(index !== -1){
      Swal.fire({
        title: "Error!",
        text: "M?? thi???t b??? ???? t???n t???i",
        icon: "error",
        confirmButtonText: "X??c nh???n",
      });
      return
    }
    DeviceServices.updateDevice(device)
    Swal.fire({
      title: "Success!",
      text: "C???p nh???t thi???t b??? th??nh c??ng",
      icon: "success",
      confirmButtonText: "X??c nh???n",
    });
  let ipv4 = await fetchIP()
    LogServices.addNewLog({
      action : `C???p nh???t thi???t b??? ${device.tenThietBi}`,
      actionTime : new Date(),
      ip :ipv4.IPv4,
      tenDangNhap : me ?  me.tenDangNhap : 'Unknown'
    })
  }
  const handleCancel = ()=>{
    history('/devices-management')
  }
    return (
      <div className='content pl-[24px] pt-[29px] pr-[100px] relative'>
        <div className='path text-primary-gray-light-400 font-bold text-xl leading-[30px] mb-4'>
          Thi???t b??? &gt; Danh s??ch thi???t b??? &gt;{' '}
          <span className='text-primary-500 text-xl leading-[30px] font-bold'>
            C???p nh???t thi???t b???
          </span>
        </div>
        <h2 className='text-primary-500 text-2xl font-bold'>Qu???n l?? thi???t b???</h2>
        <div className='py-2 px-6 rounded-2xl add-device shadow-[2px_2px_8px_rgba(232, 239, 244, 0.8)]'>
          <h3 className='text-xl font-bold leading-[30px] text-primary'>
            Th??ng tin thi???t b???
          </h3>
          <Form
           name="nest-messages"
            onFinish={onFinish}
            form={form}>
            <Row gutter={{ lg: 32 }} >
              <Col span={12} xs={24} xl={12} >
                <Form.Item
                  label='M?? thi???t b???'
                  name='maThietBi'
                  rules={[
                    {
                      required: true,
                      message: 'Vui l??ng nh???p m?? thi???t b???!',
                    },
                    {
                      pattern: new RegExp(/^KIO_[0-9]{3}$/),
                      message : "M?? thi???t b??? c?? ?????nh d???ng KIO_xxx vd: KIO_001"
                    }
                  ]}
                >
                  <Input
                    className='w-full h-11 rounded-lg hover:border-primary'
                    placeholder='Nh???p m?? thi???t b???'
                  />
                </Form.Item>
              </Col>
              <Col span={12} xs={24} xl={12} >
                <Form.Item
                  label='Lo???i thi???t b???'
                  name='loaiThietBi'
                  rules={[
                    {
                      required: true,
                      message: 'Vui l??ng ch???n lo???i thi???t b???!',
                    },
                  ]}
                >
                  <Select
                    suffixIcon={<CaretDownOutlined />}
                    size={'large'}
                    placeholder='Ch???n lo???i thi???t b???'
                    onChange={handleChange}
                    className='w-full h-11'
                  >
                    {children}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12} xs={24} xl={12} >
                <Form.Item
                  label='T??n thi???t b???'
                  name='tenThietBi'
                  rules={[
                    {
                      required: true,
                      message: 'Vui l??ng nh???p t??n thi???t b???!',
                    },
                  ]}
                >
                  <Input
                    className='w-full h-11 rounded-lg hover:border-primary'
                    placeholder='Nh???p t??n thi???t b???'
                  />
                </Form.Item>
              </Col>
              <Col span={12} xs={24} xl={12} >
                <Form.Item
                  label='T??n ????ng nh???p'
                  name='tenDangNhap'
                  rules={[
                    {
                      required: true,
                      message: 'Vui l??ng nh???p t??n ????ng nh???p!',
                    },
                  ]}
                >
                  <Input
                    className='w-full h-11 rounded-lg hover:border-primary'
                    placeholder='Nh???p t??i kho???n'
                  />
                </Form.Item>
              </Col>
              <Col span={12} xs={24} xl={12} >
                <Form.Item
                  label='?????a ch??? IP'
                  name='ip'
                  rules={[
                    {
                      required: true,
                      message: 'Vui l??ng nh???p ?????a ch??? Ip c???a thi???t b???!',
                    },
                    {
                      pattern: new RegExp(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gm),
                      message : 'Ip sai ?????nh d???ng!'
                    }
                  ]}
                >
                  <Input
                    className='w-full h-11 rounded-lg hover:border-primary'
                    placeholder='Nh???p ?????a ch??? IP'
                  />
                </Form.Item>
              </Col>
              <Col span={12} xs={24} xl={12} >
                <Form.Item
                  label='M???t kh???u'
                  name='matKhau'
                  rules={[
                    {
                      required: true,
                      message: 'Vui l??ng nh???p m???t kh???u!',
                    },
                  ]}
                >
                  <Input
                    className='w-full h-11 rounded-lg hover:border-primary'
                    placeholder='Nh???p m???t kh???u'
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label='D???ch v??? s??? d???ng'
                  name='dichVuSuDung'
                  rules={[
                    {
                      required: true,
                      message: 'Please input your current service!',
                    },
                  ]}
                >
                  <Select
                    mode='multiple'
                    size='large'
                    className='w-full'
                  >
                    {services &&  services.map(item=>{
                      return <Option key={item.maDichVu}>{item.tenDichVu}</Option>
                    })}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <span className='text-sm font-normal leading-5 text-primary-gray-300'>
              <strong className='text-primary-red'>* </strong>
              L?? tr?????ng th??ng tin b???t bu???c
            </span>
            <div className='flex justify-center items-center mt-6 gap-x-8'>
            <Button
                    className='custom w-[147px] text-primary rounded-lg font-bold text-base outline-none border border-solid border-primary-400 bg-white btn-cancel'
                    onClick={handleCancel}
                  >
                    H???y b???
                  </Button>
                  <Button
                    htmlType='submit'
                    className='custom w-[147px] text-white rounded-lg font-bold text-base outline-none border border-solid border-primary-400 bg-primary-400 '
                  >
                    C???p nh???t
                  </Button>
            </div>
          </Form>
        </div>
      </div>
    );
};

export default UpdateDevice;
