import { fetchAPIWithoutToken } from "hooks/useFetchSWR";
import { makeUrl } from "utils/makeUrl";

type SignUpBody = {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    companyName: string
}

export const createAccount = async (body: SignUpBody) => {
    const response = await fetchAPIWithoutToken(makeUrl('/auth/sign-up'), 'POST', body)
    const res = await response.json()

    if (!response.ok) {
      throw new Error(res.message)
    }
  
    return res
}