import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/v1/user`,
  }),
  endpoints: (builder) => ({
    fetchUserProfile: builder.query({
      query: () => "/get-me",
    }),
    fetchUsers: builder.query({
      query: ({ token }) => {
        return {
          url: "/get-users",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    updateUserProfile: builder.mutation({
      query: (payload) => ({
        url: "/update-me",
        method: "POST",
        body: { ...payload },
      }),
    }),
  }),
});

export const {
  useFetchUserProfileQuery,
  useUpdateUserProfileMutation,
  useFetchUsersQuery,
} = userApi;

export default userApi;
