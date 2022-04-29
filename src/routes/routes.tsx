import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import { RouteObject } from "react-router-dom";
//Public Pages
//Admin Pages
import Dashboard from "../pages/CMS/Dashboard";

export const publicRoutes : RouteObject[] = [
    {
        path : '/dasda',
        element : <PublicRoute><h2>ưqd</h2></PublicRoute>
    },
    {
        path : '/login',
        element : <PublicRoute><h2>ưqd</h2></PublicRoute>
    },
    // {
    //     path : '*',
    //     element : <PublicRoute><h2>404 Page</h2></PublicRoute>
    // },
]

export const privateRoutes : RouteObject[] = [
    {
        path : '/',
        element : <PrivateRoute><Dashboard/></PrivateRoute>
    },
]