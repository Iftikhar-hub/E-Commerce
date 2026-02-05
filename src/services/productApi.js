import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../utils/data';

export const productApi = createApi({
    reducerPath:'productApi',
    baseQuery: fetchBaseQuery({ baseUrl:`${BASE_URL}/api`}),
    endpoints: (builder) => ({
        getProductData: builder.query({
            query: (products) =>'/product/productDisplay'
            
        })

    })
})



export const { useGetProductDataQuery, useUpdateProductMutation } = productApi;