import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coinranking1.p.rapidapi.com";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", "30e7acc8d7msh503600b0222365ep117da1jsn1455e15c3c7e");
      headers.set("x-rapidapi-host", "coinranking1.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => `/coins?limit=${count}`,
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/stats',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl'
//     },
//     headers: {
//       'x-rapidapi-key': '30e7acc8d7msh503600b0222365ep117da1jsn1455e15c3c7e',
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
//     }
//   };
