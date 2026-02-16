import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../utils/data';


export const productApi = createApi({
    reducerPath:'productApi',
    baseQuery: fetchBaseQuery({ baseUrl:`${BASE_URL}/api/user`}),
    endpoints: (builder) => ({
        getProductData: builder.query({
            query: ( category) => {
                if (category) {
                    return `/productDisplay?category=${encodeURIComponent(category)}`;
                }

                return '/productDisplay';
                
            },
        }),

        searchProduct: builder.query({
            query: (query) => `/search-products?q=${encodeURIComponent(query)}`,
        }),
        
        

    })
})



export const { useGetProductDataQuery, useUpdateProductMutation, useSearchProductQuery } = productApi;