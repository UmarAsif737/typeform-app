import { fetchAPIWithToken } from "hooks/useFetchSWR";
import { makeUrl } from "utils/makeUrl";

export const uploadDocument = async (
    formData: any,
    token: string,
    projectId: number,
  ) => {
    const url = makeUrl('/projects/:projectId/documents/', { projectId })
    const response = await fetchAPIWithToken(url, token, 'POST', formData)

    const res = await response.json()

    if (!response.ok) {
      throw new Error(res.message)
    }
  
    return res
  }