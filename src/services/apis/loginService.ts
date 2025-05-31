import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from '../../config';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({ baseUrl: Config.API_BASE_URI }),
  endpoints: (builder) => ({
    login: builder.mutation<any, { data: string; ipAddress: string }>({
      query({ data, ipAddress }) {
        return {
          url: `user/userLogin?ip=${ipAddress}`,
          method: 'POST',
          body: data,
          headers: {
            Authorization: 'Basic YXBwbGljYXRpb246c2VjcmV0',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        };
      },
    }),
    register: builder.mutation<any, any>({
      query(data) {
        return {
          url: 'user/register',
          method: 'POST',
          body: data,
          headers: {
            Authorization: 'Basic YXBwbGljYXRpb246c2VjcmV0',
            'Content-Type': 'application/json',
          },
        };
      },
    }),
    sendOtp: builder.mutation<any, string>({
      query(data) {
        return {
          url: 'whatsapp/send-code',
          method: 'POST',
          body: data,
          headers: {
            Authorization: 'Basic YXBwbGljYXRpb246c2VjcmV0',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        };
      },
    }),
    resendOtp: builder.mutation<any, string>({
      query(data) {
        return {
          url: 'whatsapp/re-send',
          method: 'POST',
          body: data,
          headers: {
            Authorization: 'Basic YXBwbGljYXRpb246c2VjcmV0',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        };
      },
    }),
    verifyOtp: builder.mutation<any, string>({
      query(data) {
        return {
          url: 'whatsapp/verify',
          method: 'POST',
          body: data,
          headers: {
            Authorization: 'Basic YXBwbGljYXRpb246c2VjcmV0',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        };
      },
    }),
    logout: builder.mutation<any, void>({
      query() {
        return {
          url: 'user/logout',
          method: 'post',
          headers: {
            Authorization: `Bearer `,
          },
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useSendOtpMutation,
  useResendOtpMutation,
  useVerifyOtpMutation,
  useLogoutMutation,
} = loginApi;
