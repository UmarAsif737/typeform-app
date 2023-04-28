import { fetchAPIWithToken } from "hooks/useFetchSWR";
import { makeUrl } from "utils/makeUrl";

export const updateProject = async (
    projectId: number,
    token: string,
    body: any,
  ) => {
    const response = await fetchAPIWithToken(makeUrl('/projects/:projectId', { projectId }), token, 'PUT', body)

    const res = await response.json()

    if (!response.ok) {
      throw new Error(res.message)
    }
  
    return res
  }