import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '@/config/auth-config'

// ** Types
import { Post } from './type'


export const postApi = createApi({
  baseQuery,
  endpoints: (builder) => ({
    getPostEngagments: builder.query<Post[], void>({
        query: () => ({
          url: `/91ade3f7-d911-4ecd-b49d-4c2935fc6ad4`,
          method: 'GET',
        }),
      }),
  })
})

export const { useGetPostEngagmentsQuery } = postApi