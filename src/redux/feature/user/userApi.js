import { baseApi } from "../../api";

const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
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

export const { useCreateUserMutation } = userApi