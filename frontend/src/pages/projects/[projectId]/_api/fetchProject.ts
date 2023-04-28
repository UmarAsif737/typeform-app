import { fetchAPIWithToken } from 'hooks/useFetchSWR'
import { makeGetUrlWithParams } from 'utils/makeUrl'

export const fetchProject= async (projectId: number, token: string): Promise<any> => {
  const url = makeGetUrlWithParams(`/projects/${projectId}`)
  const response = await fetchAPIWithToken(url, token)

  const res = await response.json()

  if (!response.ok) {
    throw new Error(res.message)
  }

  return res
}