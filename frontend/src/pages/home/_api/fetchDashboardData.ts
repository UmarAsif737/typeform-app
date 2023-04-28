import { fetchAPIWithToken } from 'hooks/useFetchSWR'
import { makeGetUrlWithParams } from 'utils/makeUrl'

export const fetchDashboardData = async (token: string): Promise<any> => {
  const url = makeGetUrlWithParams('/dashboard')
  const response = await fetchAPIWithToken(url, token)

  const res = await response.json()

  if (!response.ok) {
    throw new Error(res.message)
  }

  return res
}