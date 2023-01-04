import { RouteService } from '../Interfaces/services'

const headers = {
  Accept: 'application/json',
  'Content-type': 'application/json',
}

type HttpMethod = 'get' | 'post' | 'patch' | 'put' | 'delete'

function joinUrl(baseUrl: string, url: string): string {
  return `${baseUrl}/${url}`
}

const routeService: RouteService = (() => {
  const domain = 'https://router.project-osrm.org/route/v1'

  const request = (url: string, method: HttpMethod, data: unknown = null): Promise<Response> => {
    const requestUrl = joinUrl(domain, url)
    const options = data ? { headers, method, body: JSON.stringify({ ...data }) } : { headers, method }

    return fetch(requestUrl, options).then()
  }
  const get = (url: string, data?: object): Promise<Response> => {
    const method: HttpMethod = 'get'
    const params = data ? new URLSearchParams([...Object.entries(data)]).toString() : ''
    const requestUrl = data ? `${url}?${params}` : url

    return request(requestUrl.toString(), method)
  }
  return {
    get,
  }
})()
export default routeService
