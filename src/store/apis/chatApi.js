import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export default createApi({
  reducerPath: "chatApi",

  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}/chat`,
    credentials: "include",
  }),

  endpoints(builder) {
    return {
      getChatRooms: builder.query({
        query: () => ({
          url: "/chatRooms",
          method: "GET",
        }),
      }),

      getChatRoom: builder.query({
        query: ({ chatRoomId }) => ({
          url: `/chatRoom/${chatRoomId}`,
          method: "GET",
        }),
      }),

      search: builder.query({
        query: ({ q }) => ({
          url: `/search?${q}`,
          method: "GET",
        }),
      }),

      getFriendRequests: builder.query({
        query: () => ({
          url: "/friend-requests",
          method: "GET",
        }),
      }),

      createFriendRequest: builder.mutation({
        query: ({ userId }) => ({
          url: `/friend-request/${userId}`,
          method: "POST",
        }),
      }),

      acceptFriendRequest: builder.mutation({
        query: ({ userId }) => ({
          url: `/friend-request/${userId}`,
          method: "PATCH",
        }),
      }),

      cancelFriendRequest: builder.mutation({
        query: ({ userId }) => ({
          url: `/friend-request/${userId}`,
          method: "DELETE",
        }),
      }),
    }
  },
})
