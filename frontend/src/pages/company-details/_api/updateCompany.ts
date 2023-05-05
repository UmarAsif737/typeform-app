import { fetchAPIWithToken } from 'hooks/useFetchSWR'
import { UpdateCompanyDto } from 'types/company'
import { makeUrl } from 'utils/makeUrl'

export const updateCompany = async (token: string, body: UpdateCompanyDto) => {
  const response = await fetchAPIWithToken(makeUrl('/company/'), token, 'PUT', body)
  const res = await response.json()

  if (!response.ok) {
    throw new Error(res.message)
  }

  return res
}
