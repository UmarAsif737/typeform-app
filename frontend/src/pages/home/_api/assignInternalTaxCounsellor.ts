import { fetchAPIWithToken } from 'hooks/useFetchSWR'
import { makeUrl } from 'utils/makeUrl'


export const assignInternalTaxCounsellor = async (
    token: string,
    companyId: number,
    body: any,
    ) => {
      const response = await fetchAPIWithToken(makeUrl(`/company/${companyId}/assign-user`), token, 'PUT', body)
      const res = await response.json()

      if (!response.ok) {
        throw new Error(res.message)
      }
    
      return res
  }