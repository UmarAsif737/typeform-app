import { fetchAPIWithToken } from 'hooks/useFetchSWR'
import { makeUrl } from 'utils/makeUrl'

export const fetchDashboardData = async (token: string): Promise<any> => {
  const response = await fetchAPIWithToken(makeUrl(`/dashboard`), token)
  console.log(response)
  const res = await response.json()

  if (!response.ok) {
    throw new Error(res.message)
  }

  return res
}