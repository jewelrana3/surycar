import { api } from '../api/baseApi';

const Setting = api.injectEndpoints({
    endpoints: (builder) => ({
        getSlider: builder.query({
            query: () => ({
                url: '/banner',
                method: 'GET',
            }),
        }),

        updateSlider: builder.mutation({
            query: ({ _id, data }) => {
                console.log(data);
                return {
                    url: `/banner/${_id}`,
                    method: 'PATCH',
                    body: data,
                };
            },
        }),

        deleteSlider: builder.mutation({
            query: (id) => ({
                url: `/banner/${id}`,
                method: 'DELETE',
            }),
        }),

        createSlider: builder.mutation({
            query: (data) => {
                console.log(data);
                return {
                    url: '/banner',
                    method: 'POST',
                    body: data,
                };
            },
        }),
    }),
});

export const { useGetSliderQuery, useUpdateSliderMutation, useDeleteSliderMutation, useCreateSliderMutation } = Setting;
