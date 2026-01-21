import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1673/api', credentials: 'include', }),
    endpoints: (builder) => ({
        getUserData: builder.query({
            query: (user) => `user/me`,
        }),

      
        
    }),
});

export const { useGetUserDataQuery, useUpdateUserMutation } = userApi;