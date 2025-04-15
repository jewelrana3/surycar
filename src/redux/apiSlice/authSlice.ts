import { api } from '../api/baseApi';

const authSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => {
                return {
                    url: '/auth/login',
                    method: 'POST',
                    body: data,
                };
            },
        }),

        resetPassword: builder.mutation({
            query: (value) => {
                const resetToken = localStorage.getItem('resetToken');
                console.log(resetToken);
                return {
                    url: '/auth/reset-password',
                    method: 'POST',
                    body: value,
                    headers: {
                        Authorization: `${resetToken}`,
                    },
                };
            },
        }),

        forgetPassowrd: builder.mutation({
            query: (data) => {
                return {
                    url: '/auth/forgot-password',
                    method: 'POST',
                    body: data,
                };
            },
        }),

        verifyEmail: builder.mutation({
            query: (data) => ({
                url: '/auth/verify-email',
                method: 'POST',
                body: data,
            }),
        }),

        resendOtp: builder.mutation({
            query: (data) => ({
                url: '/auth/resend-otp',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useResetPasswordMutation,
    useForgetPassowrdMutation,
    useVerifyEmailMutation,
    useResendOtpMutation,
} = authSlice;
