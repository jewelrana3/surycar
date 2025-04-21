import { api } from '../api/baseApi';

const Customer = api.injectEndpoints({
    endpoints: (builder) => ({
        getCutomers: builder.query({
            query: () => ({
                url: '/admin/customers',
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetCutomersQuery } = Customer;
