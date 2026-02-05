import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utils/data";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/api`, credentials: 'include', }),
    endpoints: (builder) => ({
        getUserData: builder.query({
            query: (user) => `user/me`,
        }),

      
        
    }),
});

export const { useGetUserDataQuery, useUpdateUserMutation } = userApi;