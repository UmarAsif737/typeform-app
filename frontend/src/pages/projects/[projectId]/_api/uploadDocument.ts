import { fetchAPIWithToken } from "hooks/useFetchSWR";
import { makeUrl } from "utils/makeUrl";

export const uploadDocument = async (
    document: FormData,
    token: string,
    projectId: number,
  ) => {
    const response = await fetchAPIWithToken(makeUrl('/projects/:projectId/documents/', { projectId }), token, 'PUT', document)

    const res = await response.json()

    if (!response.ok) {
      throw new Error(res.message)
    }
  
    return res
  }