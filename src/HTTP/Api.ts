const headers = {
  Accept: 'application/json',
  'Content-type': 'application/json',
}

type HttpMethod = 'get' | 'post' | 'patch' | 'put' | 'delete'

interface ApiRequestArg {
  url: string
  method: HttpMethod
  data?: unknown
}

interface ApiGetArg {
  url: string
  data?: unknown
}

class Api {
  private static baseUrl = 'https://router.project-osrm.org/route/v1'

  private static joinUrl(url: string): string {
    return `${Api.baseUrl}/${url}`
  }

  private static request = ({ url, method, data }: ApiRequestArg): Promise<Response> => {
    const requestUrl = Api.joinUrl(url)
    const options = data ? { headers, method, body: JSON.stringify(data) } : { headers, method }

    return fetch(requestUrl, options)
  }
  static async get<R>({ url, data }: ApiGetArg): Promise<R> {
    const method: HttpMethod = 'get'
    const params = data ? new URLSearchParams([...Object.entries(data)]).toString() : ''
    const requestUrl = data ? `${url}?${params}` : url
    const response = await Api.request({
      url: requestUrl.toString(),
      method,
    })

    return response.json()
  }
}
export default Api
