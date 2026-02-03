import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://e-commerce-nu-five-82.vercel.app/api', credentials: 'include', }),
    endpoints: (builder) => ({
        getUserData: builder.query({
            query: (user) => `user/me`,
        }),

      
        
    }),
});

export const { useGetUserDataQuery, useUpdateUserMutation } = userApi;