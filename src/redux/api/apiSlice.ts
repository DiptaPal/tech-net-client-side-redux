import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://tech-net-server-git-main-diptapal.vercel.app'}),
    tagTypes: ['comments'],
    endpoints: () => ({

    }),
})