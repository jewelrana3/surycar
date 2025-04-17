import { api } from '../api/baseApi';

const TermsCondition = api.injectEndpoints({
    endpoints: (builder) => ({
        getTermsCondition: builder.query({
            query: () => ({
                url: '/rule/terms-and-conditions',
                method: 'GET',
            }),
        }),

        createTermsCondition: builder.mutation({
            query: (data) => ({
                url: '/rule/terms-and-conditions',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useGetTermsConditionQuery, useCreateTermsConditionMutation } = TermsCondition;
