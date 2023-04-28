import { fetchAPIWithToken } from "hooks/useFetchSWR"
import { makeUrl } from "utils/makeUrl"

export const createProject = async (
    token: string,
    body: any,
    ) => {
      const response = await fetchAPIWithToken(makeUrl('/projects'), token, 'POST', body)
      const res = await response.json()

      if (!response.ok) {
        throw new Error(res.message)
      }
    
      return res
  }