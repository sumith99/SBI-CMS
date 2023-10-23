import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import Cookies from 'universal-cookie'

export const wogdApi = createApi({
  reducerPath: "wogdApi",
  tagTypes: (result, error, arg) => (arg.tag ? [arg.tag] : []),
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.GATSBY_API_URL}`,
    prepareHeaders: (headers) => {
      const cookies = new Cookies()
      const token = cookies.get('accessToken')
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: builder => ({
    getSimpleRecords: builder.query({
      query: ({ entity }) => {
        return {
          url: `${entity}`,
          method: "GET",
          headers: {
            'content-type': `application/json;odata=verbose`,
          },
        }
      },
      providesTags: (result, error, arg) => (arg.tag ? [arg.tag] : []),
    }),
    getRecords: builder.query({
      query: ({ entity,
        filter = "",
        expand = "",
        query = "" }) => {
        let finalUrl = `${entity}`;
        let filterQuery = "$filter=IsDeleted ne true";
        if (filter !== "") {
          filterQuery += ` and (${filter})`;
        }
        finalUrl += `?${filterQuery}${expand ? `&${expand}` : ""}${query ? `&${query}` : ""}`;
        return {
          url: `${finalUrl}`,
          method: "GET",
          headers: {
            'content-type': `application/json;odata=verbose`,
          },
        }
      },
      providesTags: (result, error, arg) => (arg.tag ? [arg.tag] : []),
    }),
    addRecord: builder.mutation({
      query: params => ({
        url: `${params.entity}`,
        method: "POST",
        body: params.data,
        headers: {
          'content-type': `application/json;odata=verbose`,
        },
      }),
      invalidatesTags: (result, error, arg) => (arg.tag ? [arg.tag] : []),
    }),
    addUserRecord: builder.mutation({
      query: ({ entity, subEntity }) => {
        return ({
          url: `${entity}/${subEntity}`,
          method: 'POST',
          headers: {
            'content-type': `application/json;odata=verbose`,
          }
        })
      },
      invalidatesTags: (result, error, arg) => (arg.tag ? [arg.tag] : []),
    }),
    addFormDataRecord: builder.mutation({
      query: params => ({
        url: `${params.entity}`,
        method: "POST",
        body: params.data,
      }),
      invalidatesTags: (result, error, arg) => (arg.tag ? [arg.tag] : []),
    }),
  }),
})

export const { useGetSimpleRecords, useLazyGetSimpleRecordsQuery, useLazyGetRecordsQuery, useAddRecordMutation, useAddUserRecordMutation, useAddFormDataRecordMutation } = wogdApi
