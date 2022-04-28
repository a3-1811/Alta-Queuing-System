import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import { RouteObject } from "react-router-dom";
//Public Pages
import Login from "../pages/Home/Login";
//Admin Pages
import Dashboard from "../pages/CMS/Dashboard";
import GetNumber from "../pages/Home/GetNumber";
import UserLoginTemplated from "../Template/UserLoginTemplated";
import ResetPasswordTemplate from "../Template/ResetPasswordTemplate";
import ResetNewPasswordTemplate from "../Template/ResetNewPasswordTemplate";
import LoginViewProfile from "../pages/Home/LoginViewProfile";
import DevideImformationTemplate from "../Template/DevideImformationTemplate";
import DevideInforNumber from "../pages/Home/DevideImforNumber";
import DevideImforInStalls from "../pages/Home/DevideImforInStalls";
import DevideImforMain from "../pages/Home/DevideImforMain";
import NumberOfDevideTemplated from "../Template/NumberOfDevideTemplated";
import NumberOfDevide from "../pages/Home/NumberOfDevide";
import NumberOfDevideMain from "../pages/Home/NumberOfDevideMain";
import NumberOfDevideNow from "../pages/Home/NumberOfDevideNow";

/** 
   * Links : login, reset-password, reset-new-password, 
   * Devices : LoginViewProfile DevideInforNumber DevideImforInStalls DevideImforMain
   * Numbers: NumberOfDevide NumberOfDevideMain NumberOfDevideNow
   * GetNumber
   */

export const publicRoutes : RouteObject[] = [
    {
        path : '/',
        element : <PublicRoute><UserLoginTemplated></UserLoginTemplated></PublicRoute>
    },
    {
        path : '/reset-password',
        element : <PublicRoute><ResetPasswordTemplate></ResetPasswordTemplate></PublicRoute>
    },
    {
        path : '/reset-new-password',
        element : <PublicRoute><ResetNewPasswordTemplate/></PublicRoute>
    },
    {
        path : '/LoginViewProfile',
        element : <PublicRoute><DevideImformationTemplate><LoginViewProfile/></DevideImformationTemplate></PublicRoute>
    },
    {
        path : '/DevideImforInStalls',
        element : <PublicRoute><DevideImformationTemplate><DevideImforInStalls/></DevideImformationTemplate></PublicRoute>
    },
    {
        path : '/GetNumber',
        element : <PublicRoute><GetNumber/></PublicRoute>
    },
    {
        path : '*',
        element : <PublicRoute><h2>404 Page</h2></PublicRoute>
    },
]

export const privateRoutes : RouteObject[] = [
    {
        path : '/dashboard',
        element : <PrivateRoute isAuth={false}><Dashboard/></PrivateRoute>
    },
]