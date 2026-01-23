import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath:'productApi',
    baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:1673/api'}),
    endpoints: (builder) => ({
        getProductData: builder.query({
            query: (products) =>'/product/productDisplay'
            
        })

    })
})

export const { useGetProductDataQuery, useUpdateProductMutation } = productApi;