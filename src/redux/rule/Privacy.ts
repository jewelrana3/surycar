import { api } from '../api/baseApi';

const Privacy = api.injectEndpoints({
    endpoints: (builder) => ({
        getPrivacy: builder.query({
            query: () => ({
                url: '/rule/privacy-policy',
                method: 'GET',
            }),
        }),

        createPrivacy: builder.mutation({
            query: (data) => ({
                url: '/rule/privacy-policy',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useGetPrivacyQuery, useCreatePrivacyMutation } = Privacy;
