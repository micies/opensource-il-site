
// import { useState, useEffect } from 'react';

// export type TApiResponse = {
//   status: Number;
//   statusText: String;
//   data: any;
//   error: any;
//   loading: Boolean;
// };

// export const useFetch = (url: string): TApiResponse => {
//   const [status, setStatus] = useState<Number>(0);
//   const [statusText, setStatusText] = useState<String>('');
//   const [data, setData] = useState<any>();
//   const [error, setError] = useState<any>();
//   const [loading, setLoading] = useState<boolean>(false);

//   const getAPIData = async () => {
//     setLoading(true);
//     try {
//       const apiResponse = await fetch(url);
//       const json = await apiResponse.json();
//       setStatus(apiResponse.status);
//       setStatusText(apiResponse.statusText);
//       setData(json);
//     } catch (error) {
//       setError(error);
//     }
//     setLoading(false);
//   };

//   // useEffect(() => {
//   //   getAPIData();
//   // }, []);

//   return { status, statusText, data, error, loading };
// };

import axios from 'axios'

export async function get(BaseUrl: string): Promise<any> {
  return axios
    .get(BaseUrl)
    .then((res) => {
      if (!res.data) {
        return ('Not found')
      } else {
        return res.data
      }
    })
    .catch((error) => {
      return(error)
    })
}