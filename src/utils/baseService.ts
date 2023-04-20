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