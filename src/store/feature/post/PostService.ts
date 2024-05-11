import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '@/config/auth-config'

// ** Types
import { Post } from '../../../type/type'


export const postApi = createApi({
  baseQuery,
  endpoints: (builder) => ({
    getPostEngagments: builder.query<Post[], void>({
        query: () => ({
          url: `/bf6b8081-f035-4ed9-a2ac-f60cb6f1655c`,
          method: 'GET',
        }),
      }),
  })
})

export const { useGetPostEngagmentsQuery } = postApi