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
    })
})

export const { useCreateUserMutation, useGetSingleUserQuery } = userApi