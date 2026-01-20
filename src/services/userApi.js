import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1673/api' }),
    endpoints: (builder) => ({
        getUserData: builder.query({
            query: (user) => `user/me/${user}`,
        }),

      
        
    }),
});

export const { useGetUserDataQuery, useUpdateUserMutation } = userApi;