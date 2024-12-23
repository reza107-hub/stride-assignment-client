import { baseApi } from "../../api";

const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getSingleUser: build.query({
            query: (email) => ({
                url: `/get-user/${email}`,
                method: 'GET',
            }),
            providesTags: ['user']
        }),
        createUser: build.mutation({
            query: (body) => ({
                url: '/create-user',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['user'],
        }),
        addToWishList: build.mutation({
            query: (body) => ({
                url: '/add-to-wishlist',
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['user'],
        }),
        addToCart: build.mutation({
            query: (body) => ({
                url: '/add-cart',
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['user'],
        })
    })
})

export const { useCreateUserMutation, useGetSingleUserQuery, useAddToWishListMutation, useAddToCartMutation } = userApi