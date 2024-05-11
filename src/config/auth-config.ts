import {  fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_BASE_URL}/v3`,
  prepareHeaders: (headers) => {
    return headers;
  },
});