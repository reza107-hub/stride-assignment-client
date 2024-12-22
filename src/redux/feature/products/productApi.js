import { baseApi } from "../../api";

const productApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllProducts: build.query({
            query: (query) => ({
                url: `/get-products`,
                method: 'GET',
                params: query
            }),
            providesTags: ['product']
        }),
        getSingleProduct: build.query({
            query: (productId) => ({
                url: `/get-single-product/${productId}`,
                method: 'GET',
            }),
            providesTags: ['product']
        }),
    })
})

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productApi