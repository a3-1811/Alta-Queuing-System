import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';
import { RouteObject } from 'react-router-dom';
//Public Pages
//Admin Pages
import Dashboard from '../pages/CMS/Dashboard';
import Login from '../pages/Home/Login';
import ResetPassword from '../pages/Home/ResetPassword';
import ResetNewPassword from '../pages/Home/ResetNewPassword';
import GearLevelDevice from '../pages/User/GearLevelDevice';
import ViewDeviceCounte from '../pages/User/ViewDeviceCounte';
import ViewDeviceMain from '../pages/User/ViewDeviceMain';
import Page404 from '../components/Page404';
import DrawNumbers from '../pages/Interaction/DrawNumbers';
import FillImformation from '../pages/Interaction/PopupImformation';
import SettingGearDevice from '../pages/User/SettingGearLevelDevice';
import SettingViewDevice from '../pages/User/SettingViewDeviceCounte';
import SettingDisplayDevice from '../pages/User/SettingDisplayDevice';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <PublicRoute>
        <h2>Hello World</h2>
      </PublicRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: '/resetpass',
    element: (
      <PublicRoute>
        <ResetPassword />
      </PublicRoute>
    ),
  },
  {
    path: '/newpass',
    element: (
      <PublicRoute>
        <ResetNewPassword />
      </PublicRoute>
    ),
  },
  {
    path: '/leveldevice',
    element: (
      <PublicRoute>
        <GearLevelDevice />
      </PublicRoute>
    ),
  },
  {
    path: '/settinggear',
    element: (
      <PublicRoute>
        <SettingGearDevice />
      </PublicRoute>
    ),
  },
  {
    path: '/viewsettinggear',
    element: (
      <PublicRoute>
        <SettingViewDevice />
      </PublicRoute>
    ),
  },
  {
    path: '/displaydevice',
    element: (
      <PublicRoute>
        <SettingDisplayDevice />
      </PublicRoute>
    ),
  },
  {
    path: '/devicemain',
    element: (
      <PublicRoute>
        <ViewDeviceMain />
      </PublicRoute>
    ),
  },
  {
    path: '/viewdevice',
    element: (
      <PublicRoute>
        <ViewDeviceCounte />
      </PublicRoute>
    ),
  },
  {
    path: '/drawnumber',
    element: (
      <PublicRoute>
        <DrawNumbers />
      </PublicRoute>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: '*',
    element: (
      <PublicRoute>
        <Page404 />
      </PublicRoute>
    ),
  },
];

