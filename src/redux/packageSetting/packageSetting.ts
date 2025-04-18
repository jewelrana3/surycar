import { api } from '../api/baseApi';

const PackageSetting = api.injectEndpoints({
    endpoints: (builder) => ({
        getPackage: builder.query({
            query: () => ({
                url: '/plan/admin',
                method: 'GET',
            }),
        }),

        updatePackage: builder.mutation({
            query: ({ id, data }) => {
                return {
                    url: `/plan/${id}`,
                    method: 'PATCH',
                    body: data,
                };
            },
        }),
    }),
});

export const { useGetPackageQuery, useUpdatePackageMutation } = PackageSetting;
