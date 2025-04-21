import { api } from '../api/baseApi';

const Buyer = api.injectEndpoints({
    endpoints: (builder) => ({
        getBuyer: builder.query({
            query: () => ({
                url: '/registration/admin-registration',
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetBuyerQuery } = Buyer;
