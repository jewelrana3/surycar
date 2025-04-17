import { api } from '../api/baseApi';

const PostList = api.injectEndpoints({
    endpoints: (builder) => ({
        getPostList: builder.query({
            query: () => ({
                url: '/vehicle/admin-vehicle',
                method: 'GET',
            }),
        }),

        createPost: builder.mutation({
            query: (data) => ({
                url: '/vehicle',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useGetPostListQuery, useCreatePostMutation } = PostList;
