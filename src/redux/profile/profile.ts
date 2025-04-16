import { api } from '../api/baseApi';

const Profile = api.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query({
            query: () => ({
                url: '/user',
                method: 'GET',
            }),
        }),

        updateProfile: builder.mutation({
            query: (data) => ({
                url: '/user',
                method: 'PATCH',
                body: data,
            }),
        }),
    }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = Profile;
