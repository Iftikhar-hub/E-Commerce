import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath:'productApi',
    baseQuery: fetchBaseQuery({ baseUrl:'https://e-commerce-backend-production-6436.up.railway.app/api'}),
    endpoints: (builder) => ({
        getProductData: builder.query({
            query: (products) =>'/product/productDisplay'
            
        })

    })
})



export const { useGetProductDataQuery, useUpdateProductMutation } = productApi;