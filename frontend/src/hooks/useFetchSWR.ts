import useSWR from 'swr'

import settings from 'config/settings'
import { SWRHookResponse } from 'config/types'

const headers = { 'content-type': 'application/json;charset=UTF-8' }

export const fetchAPI = (url: string) => fetch(`${settings.baseURL}${url}`)

export const fetchAPIWithToken = (url: string, token: string, method = 'GET', body?: any) =>
  fetch(`${settings.baseURL}${url}`, {
    method,
    headers: { ...headers, Authorization: `Bearer ${token}` },
    body: JSON.stringify(body),
  })

  export const fetchAPIWithoutToken = (url: string, method = 'GET', body?: any) =>
  fetch(`${settings.baseURL}${url}`, {
    method,
    headers: { ...headers },
    body: JSON.stringify(body),
})

export default function useFetchSWR(url: string): SWRHookResponse {
  const { data, error } = useSWR(url, fetchAPI)

  return {
    data,
    isLoading: !error && data === undefined,
    error,
    hasError: !!error,
  }
}
