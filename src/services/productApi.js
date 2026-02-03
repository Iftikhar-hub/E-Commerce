import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath:'productApi',
    baseQuery: fetchBaseQuery({ baseUrl:'https://e-commerce-nu-five-82.vercel.app/api'}),
    endpoints: (builder) => ({
        getProductData: builder.query({
            query: (products) =>'/product/productDisplay'
            
        })

    })
})



export const { useGetProductDataQuery, useUpdateProductMutation } = productApi;