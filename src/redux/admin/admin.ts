import { api } from '../api/baseApi';

const Admin = api.injectEndpoints({
    endpoints: (builder) => ({
        getAdmin: builder.query({
            query: () => ({
                url: '/admin',
                method: 'GET',
            }),
        }),

        deleteAdmin: builder.mutation({
            query: (id) => ({
                url: `/admin/${id}`,
                method: 'DELETE',
            }),
        }),

        createAdmin: builder.mutation({
            query: (data) => ({
                url: '/admin',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useGetAdminQuery, useDeleteAdminMutation, useCreateAdminMutation } = Admin;
