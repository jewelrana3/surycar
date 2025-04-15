import { api } from '../api/baseApi';

const Profile = api.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query({
            query: () => ({
                url: '/user',
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetProfileQuery } = Profile;
