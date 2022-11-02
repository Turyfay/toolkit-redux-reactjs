import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
    }),
    getTodo: builder.query({
        query: (todoId) => `/todos/${todoId}`
    }),
    addNewTodo: builder.mutation({
        query: (payload)=>({
            url: '/todos',
            method: 'post',
            body: payload,
            headers: {}
        }),
        invalidatesTags:['Todos']
    })
  }),
});

export const { useGetTodosQuery,useAddNewTodoMutation, useGetTodoQuery } = todosApi;
