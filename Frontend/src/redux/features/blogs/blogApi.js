import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({
    reducerPath: 'blogsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1',  credentials: 'include'}),
    endpoints: (builder) => ({

        fetchBlogs: builder.query({
          query: ({ search = '', category = '', location='' }) => `blog?search=${search}&category=${category}&location=${location}`
        }),
        fetchBlogById: builder.query({
          query: (id) => `blog/${id}`
        }),
        fetchRelatedBlogs: builder.query({
          query: (id) => `blog/related/${id}`,
        }),
    
  })
})
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { useFetchBlogsQuery,useFetchBlogByIdQuery,useFetchRelatedBlogsQuery  } = blogApi