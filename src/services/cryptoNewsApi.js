import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://google-api31.p.rapidapi.com";

export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({
      baseUrl,
      prepareHeaders: (headers) => {
        headers.set("x-rapidapi-key", "30e7acc8d7msh503600b0222365ep117da1jsn1455e15c3c7e");
        headers.set("x-rapidapi-host", "google-api31.p.rapidapi.com");
        return headers;
      },
    }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({ newsCategory, count }) => ({
            url: '/imagesearch',
            method: 'POST',
            body: {
              text: newsCategory,
              max_results: count,
              safesearch: 'off',
              region: 'wt-wt',
              color: '',
              size: '',
              type_image: '',
              layout: '',
            },
          }),
      }),
    }),
  })

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

    

// const axios = require('axios');

// const options = {
//   method: 'POST',
//   url: 'https://google-api31.p.rapidapi.com/',
//   headers: {
//     'x-rapidapi-key': '30e7acc8d7msh503600b0222365ep117da1jsn1455e15c3c7e',
//     'x-rapidapi-host': 'google-api31.p.rapidapi.com',
//     'Content-Type': 'application/json'
//   },
//   data: {
//     text: 'Europe',
//     region: 'wt-wt',
//     max_results: 25
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }