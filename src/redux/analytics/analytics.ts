import { api } from '../api/baseApi';

const Earning = api.injectEndpoints({
    endpoints: (builder) => ({
        getAnalytics: builder.query({
            query: () => ({
                url: '/admin/summary',
                method: 'GET',
            }),
        }),
        getEarning: builder.query({
            query: () => ({
                url: '/admin/earning',
                method: 'GET',
            }),
        }),
        getUser: builder.query({
            query: () => ({
                url: '/admin/user',
                method: 'GET',
            }),
        }),
        getPost: builder.query({
            query: () => ({
                url: '/admin/user',
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetAnalyticsQuery, useGetEarningQuery, useGetUserQuery, useGetPostQuery } = Earning;
