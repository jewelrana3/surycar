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
import TermsCondition from '../pages/dashboard/TermsCondition';
import Customers from '../pages/dashboard/customers/Customers';
import CustomerDetails from '../pages/dashboard/customers/CustomerDetails';
import PostList from '../pages/dashboard/postList/PostList';
import PostDetails from '../pages/dashboard/postList/PostDetails';
import BuyerRegistration from '../pages/dashboard/buyerRegistration/BuyerRegistration';
import AllDetails from '../pages/dashboard/buyerRegistration/AllDetails';
import AllDetailsSeller from '../pages/dashboard/sellerTransection/AllDetails';
import SellerTransection from '../pages/dashboard/sellerTransection/SellerTransection';
import PackageSetting from '../pages/dashboard/pacekageSetting/PackageSetting';
import Slider1 from '../pages/dashboard/slider1/Slider1';
import WorkFunction from '../pages/dashboard/WorkFunction';
import AboutUS from '../pages/dashboard/AboutUs';
import ManageAdmin from '../pages/dashboard/admin/ManageAdmin';
import Slider2 from '../pages/dashboard/slider2/Slider2';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <PrivateRoute>
                <App />
            </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
        children: [
            { path: '', element: <Dashboard /> },
            { path: 'customers', element: <Customers /> },
            { path: 'customer-details', element: <CustomerDetails /> },
            { path: 'post-list', element: <PostList /> },
            { path: 'post-details', element: <PostDetails /> },
            { path: 'buyer-registration', element: <BuyerRegistration /> },
            { path: 'all-details', element: <AllDetails /> },
            { path: 'seller-transection', element: <SellerTransection /> },
            { path: 'transection-details', element: <AllDetailsSeller /> },
            { path: 'package', element: <PackageSetting /> },
            { path: 'slider1', element: <Slider1 /> },
            { path: 'promotion', element: <Slider2 /> },
            { path: 'manage-admin', element: <ManageAdmin /> },

            { path: 'work-functionality', element: <WorkFunction /> },
            { path: 'about-us', element: <AboutUS /> },
            { path: 'privacy-policy', element: <PrivacyPolicy /> },
            { path: 'terms-condition', element: <TermsCondition /> },
            { path: 'notifications', element: <Notification /> },
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
