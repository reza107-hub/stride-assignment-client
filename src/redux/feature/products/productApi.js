import { baseApi } from "../../api";

const productApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllProducts: build.query({
            query: () => ({
                url: `/get-products`,
                method: 'GET',
            }),
            providesTags: ['product']
        }),
    })
})

export const { useGetAllProductsQuery } = productApi