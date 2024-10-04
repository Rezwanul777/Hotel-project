import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const commentApi=createApi({
    reducerPath:'commentApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:5000/api/v1/comment',
        credentials:'include'
    }),
    tagTypes:['Comments'],
    endpoints:(builder)=>({
        postComment:builder.mutation({
            query:(commentData)=>({
                url:'/create-comment',
                method:'POST',
                body:commentData
            }),
            invalidatesTags: (result, error, { postId }) => [{ type: 'Comments', id: postId }],
        }),
        getComments: builder.query({
            query: () => ({
              url: '/total-comment',
            })
          })
    })
})

export const {usePostCommentMutation,useGetCommentsQuery}=commentApi;
export default commentApi