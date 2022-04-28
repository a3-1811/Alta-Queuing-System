import { useNavigate } from "react-router-dom";
import AdminTemplate from "../templates/AdminTemplate";

interface Props{
    isAuth : boolean,
    children : JSX.Element | JSX.Element[],
}

const PrivateRoute = ({isAuth,children} : Props) : JSX.Element=>{
  const history = useNavigate()
  if(!isAuth){
    history("/login")
  }
      return (
        <AdminTemplate>{children}</AdminTemplate>
      )
  };
  
  export default PrivateRoute
