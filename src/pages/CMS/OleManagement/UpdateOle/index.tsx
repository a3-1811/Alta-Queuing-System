import React, { useEffect, useState } from "react";
import { Form, Input, Row, Col, Checkbox } from "antd";
import "./style.scss";
import RoleServices from "../../../../db/services/role.services";
import IRole from "../../../../db/types/role.type";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
type Props = {};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
};

const UpdateOle = (props: Props) => {
  const { id } = useParams();
  const history = useNavigate();
  const [form] = Form.useForm();
  const [roles, setRoles] = useState<IRole[]>([]);
  useEffect(() => {
    (async () => {
      let data = await RoleServices.getRoles();
      setRoles(data);
      let index = data.findIndex((item) => item.id === id);
      if (index === -1) {
        history("/ole-management");
      }
      form.setFieldsValue({
        tenVaiTro: data[index].tenVaiTro,
        moTa: data[index].moTa,
      });
    })();
  }, []);
  const onFinish = (values: any) => {
    console.log(values);
    let { tenVaiTro, moTa } = values;
    RoleServices.updateRole({
      id,
      tenVaiTro,
      moTa,
    });
    Swal.fire({
      title: "Success!",
      text: "Đã cập nhật vai trò",
      icon: "success",
      confirmButtonText: "Xác nhận",
    });
  };
  return (
    <div className="content pl-[24px] pt-[29px] pr-[100px] lg:pr-2 md:mt-3 relative ole-update">
      <div className="path text-gray-600 font-bold text-lg mb-9">
        Cài đặt hệ thống &gt; Quản lý vai trò &gt;{" "}
        <span className="text-primary font-bold">Cập nhật vai trò</span>
      </div>
      <h2 className="text-primary text-2xl font-bold mb-3">
        Danh sách vai trò
      </h2>
      <div className="w-full h-full update-content">
        <h3 className="text-primary text-lg font-bold mb-2">
          Thông tin vai trò
        </h3>
        <Form
          form={form}
          name="nest-messages"
          validateMessages={validateMessages}
          onFinish={onFinish}
        >
          <Row gutter={[16, 16]}>
            <Col span={12} xs={24} lg={12} className="flex flex-col">
              <Form.Item
                name={"tenVaiTro"}
                label="Tên vai trò"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên vai trò",
                  },
                ]}
              >
                <Input
                  className="w-full h-11 rounded-lg hover:border-primary"
                  placeholder="Nhập tên vai trò"
                />
              </Form.Item>
              <Form.Item name={"moTa"} label="Mô tả:" className="textarea">
                <Input.TextArea rows={8} placeholder="Nhập thông tin mô tả" />
              </Form.Item>
              <span>
                <span className="text-primary">*</span>Là trường thông tin bắt
                buộc
              </span>
            </Col>
            <Col
              span={12}
              xs={24}
              lg={12}
              className="bg-primary-organe-50 rounded-lg overflow-y-scroll max-h-[300px]"
            >
              <h3 className="text-primary text-lg font-bold mb-3">
                Nhóm chức năng A
              </h3>
              <Form.Item>
                <Row gutter={[12, 12]}>
                  <Col span={24}>
                    <Checkbox
                      checked={true}
                      className="text-base font-semibold leading-6"
                    >
                      Tất cả
                    </Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox
                      checked={true}
                      className="text-base font-semibold leading-6"
                    >
                      Chức năng x
                    </Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox
                      checked={true}
                      className="text-base font-semibold leading-6"
                    >
                      Chức năng y
                    </Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox
                      checked={true}
                      className="text-base font-semibold leading-6"
                    >
                      Chức năng z
                    </Checkbox>
                  </Col>
                </Row>
              </Form.Item>
              <h3 className="text-primary text-lg font-bold mb-3">
                Nhóm chức năng B
              </h3>
              <Form.Item>
                <Row gutter={[12, 12]}>
                  <Col span={24}>
                    <Checkbox className="text-base font-semibold leading-6">
                      Tất cả
                    </Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox className="text-base font-semibold leading-6">
                      Chức năng x
                    </Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox className="text-base font-semibold leading-6">
                      Chức năng y
                    </Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox className="text-base font-semibold leading-6">
                      Chức năng z
                    </Checkbox>
                  </Col>
                </Row>
              </Form.Item>
              <h3 className="text-primary text-lg font-bold mb-3">
                Nhóm chức năng B
              </h3>
              <Form.Item>
                <Row gutter={[12, 12]}>
                  <Col span={24}>
                    <Checkbox className="text-base font-semibold leading-6">
                      Tất cả
                    </Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox className="text-base font-semibold leading-6">
                      Chức năng x
                    </Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox className="text-base font-semibold leading-6">
                      Chức năng y
                    </Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox className="text-base font-semibold leading-6">
                      Chức năng z
                    </Checkbox>
                  </Col>
                </Row>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <div className="flex justify-center items-center mt-3 gap-x-8">
              <button
                type="submit"
                className="w-[147px] text-primary px-6 py-[10px] rounded-lg font-bold text-base outline-none border border-solid border-primary-400 bg-white leading-[22px]"
              >
                Hủy bỏ
              </button>
              <button
                type="submit"
                className="w-[147px] text-white px-6 py-[10px] rounded-lg font-bold text-base outline-none border border-solid border-primary-400 bg-primary-400 leading-[22px]"
              >
                Cập nhật
              </button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default UpdateOle;
