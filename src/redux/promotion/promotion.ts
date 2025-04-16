import { api } from '../api/baseApi';

const Promotion = api.injectEndpoints({
    endpoints: (builder) => ({
        getPromotion: builder.query({
            query: () => ({
                url: '/promotion',
                method: 'GET',
            }),
        }),

        updatePromotion: builder.mutation({
            query: ({ _id, data }) => ({
                url: `/promotion/${_id}`,
                method: 'PATCH',
                body: data,
            }),
        }),

        deletePromotion: builder.mutation({
            query: (id) => ({
                url: `/promotion/${id}`,
                method: 'DELETE',
            }),
        }),

        createPromotion: builder.mutation({
            query: (data) => {
                console.log(data);
                return {
                    url: '/promotion',
                    method: 'POST',
                    body: data,
                };
            },
        }),
    }),
});

export const {
    useGetPromotionQuery,
    useUpdatePromotionMutation,
    useDeletePromotionMutation,
    useCreatePromotionMutation,
} = Promotion;
