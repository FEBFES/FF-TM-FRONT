import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { serverString } from '../../../config';

export const projectsApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: fetchBaseQuery({ baseUrl: serverString }),
  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: () => '/projects',
    }),
  }),
});

export const { useGetAllProjectsQuery } = projectsApi;
