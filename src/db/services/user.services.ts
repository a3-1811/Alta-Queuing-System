// USER MODEL
/** Schema --->
 * tenDangNhap: String (key)
	hoTen: String
	soDienThoai: String VietNamese Phone
	email: Email (unique)
  matKhau: String
	vaiTro: id reference from Role
	trangThai: Boolean
 */
import { doc,updateDoc,setDoc, collection, getDocs, query, where } from "firebase/firestore";
import firebase from "../firebase";
import IUser from "../types/user.type";

const db = collection(firebase,'user')

class UserServices{
  addNewUser = async (user: IUser) => {
    await setDoc(doc(db), user);
  };
  
  getUsers = async () => {
    let users : IUser[] = []
    const querySnapshot = await getDocs(db);
    querySnapshot.forEach((doc: any) => {
      let temp = doc.data()
      let user : IUser= {
        id: doc.id,
        tenDangNhap :temp.tenDangNhap,
        hoTen :temp.hoTen,
        email :temp.email,
        matKhau :temp.matKhau,
        soDienThoai :temp.soDienThoai,
        trangThai :temp.trangThai,
        vaiTro :temp.vaiTro
      }
      users.push(user)
    });
    return users
  };
   updateUser = async (user: IUser) => {
    const docRef = doc(db,user.id)
    let temp = {...user}
    delete temp.id
    const updated = await updateDoc(docRef,{
      ...temp  
    });
    return updated
  };
  login = async(tenDangNhap:string, matKhau:string)=>{
    const q = query(db, where("tenDangNhap", "==", tenDangNhap));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let temp = {
       ...doc.data()
     };
     return {
      id: doc.id,
      tenDangNhap :temp.tenDangNhap,
      hoTen :temp.hoTen,
      email :temp.email,
      matKhau :temp.matKhau,
      soDienThoai :temp.soDienThoai,
      trangThai :temp.trangThai,
      vaiTro :temp.vaiTro
    }
    });
  }
}
export default new UserServices()
