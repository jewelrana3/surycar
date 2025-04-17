import { Navigate, useLocation } from 'react-router-dom';
import { useGetProfileQuery } from '../redux/profile/profile';

export default function PrivateRoute({ children }: { children: React.ReactNode }) {
    const location = useLocation();

    const { data: profile, isFetching, isLoading, isError } = useGetProfileQuery(undefined);

    if (isLoading || isFetching) {
        return <span>Loading...</span>;
    }

    if (isError || !profile?.data) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    if (profile?.data?.role === 'SUPER_ADMIN') {
        return children;
    }

    return <Navigate to="/login" />;
}

// import { Navigate, useLocation } from 'react-router-dom';
// import { useProfileQuery } from '../redux/apiSlices/profileSlice';

// const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
//     const location = useLocation();
//     const { data: profile, isLoading, isFetching, isError } = useProfileQuery(undefined);

//     if (isLoading || isFetching) {
//         return <div>Loading...</div>;
//     }
//     if (isError || !profile?.data) {
//         return <Navigate to="/login" state={{ from: location }} />;
//     }
//     if (profile?.data?.role === 'ADMIN' || profile?.data?.role === 'SUPER_ADMIN') {
//         return children;
//     }
//     return <Navigate to="/login" />;
// };
// export default PrivateRoute;
