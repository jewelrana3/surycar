import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.0.80.75:5000/api/v1',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken');

            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),

    endpoints: () => ({}),
});

export const imgUrl = 'http://10.0.80.75:5000';
