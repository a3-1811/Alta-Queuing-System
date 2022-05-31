enum TinhTrang {
  PENDING = "pending",
  USED = "used",
  REMOVE = "remove",
}
enum NguonCap {
  KIOSK = "Kiosk",
  SYSTEM = "Hệ thống",
}
export default interface Progression {
  stt: string;
  hoTen: string;
  soDienThoai: string;
  email: string | null;
  dichVu: string;
  thoiGianCap: Date;
  hanSuDung: Date;
  tinhTrang: TinhTrang;
  nguonCap: NguonCap;
}
