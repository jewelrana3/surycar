import { api } from '../api/baseApi';

const Work = api.injectEndpoints({
    endpoints: (builder) => ({
        getWork: builder.query({
            query: () => ({
                url: '/rule/work',
                method: 'GET',
            }),
        }),

        createWork: builder.mutation({
            query: (data) => ({
                url: '/rule/work',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useGetWorkQuery, useCreateWorkMutation } = Work;
