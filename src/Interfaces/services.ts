export interface RouteService {
  get: (url: string, data?: object) => Promise<Response>
}
