import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/authentication/Login';
import ErrorPage from '../pages/error/ErrorPage';
import Notification from '../pages/dashboard/Notification';
import ForgetPassword from '../pages/authentication/ForgetPassword';
import VerifyOtp from '../pages/authentication/VerifyOtp';
import NewPassword from '../pages/authentication/NewPassword';
import Dashboard from '../pages/dashboard/dasboard/Dashboard';
import PrivacyPolicy from '../pages/dashboard/PrivacyPolicy';
import EditProfile from '../pages/dashboard/profile/EditProfile';
import ChangePassword from '../pages/dashboard/profile/ChangePassword';
import Profile from '../pages/dashboard/profile/Profile';
import Earning from '../pages/dashboard/earing/Earning';
import TermsCondition from '../pages/dashboard/TermsCondition';
import Category from '../pages/dashboard/category/Category';
import Subscription from '../pages/dashboard/subscripton/Subscription';
import Customers from '../pages/dashboard/customers/Customers';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '', element: <Dashboard /> },
            { path: 'customers', element: <Customers /> },
            { path: 'earning', element: <Earning /> },
            { path: 'category', element: <Category /> },
            { path: 'subscription', element: <Subscription /> },
            { path: 'privacy-policy', element: <PrivacyPolicy /> },
            { path: 'terms-condition', element: <TermsCondition /> },
            { path: 'notification', element: <Notification /> },
            { path: 'profile', element: <Profile /> },
            { path: 'edit-profile', element: <EditProfile /> },
            { path: 'change-password', element: <ChangePassword /> },
        ],
    },
    { path: '/login', element: <Login /> },
    { path: '/forget-password', element: <ForgetPassword /> },
    { path: '/verify-otp', element: <VerifyOtp /> },
    { path: '/new-password', element: <NewPassword /> },
]);

export default router;
