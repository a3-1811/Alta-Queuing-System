export default interface Device {
  maThietBi: string;
  tenThietBi: string;
  tenDangNhap: string;
  ip: string;
  trangThai: Boolean;
  matKhau: string;
  dichVuSD: string[];
  loaiThietBi: "Kiosk" | "Display Counter";
}
