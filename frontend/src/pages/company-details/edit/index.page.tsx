import { Flex } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextSeo } from 'next-seo'
import { useEffect, useState } from 'react'
import { Company } from 'types/company'
import CompanyData from 'components/share/company/CompanyData'
import { fetchCompanyDetails } from '../_api/fetchCompanyDetails'

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const locale = context.locale as string

    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

const Page = () => {
  const { data: session } = useSession()
  const [company, setCopmany] = useState<Company>()

  useEffect(() => {
    fetchCompanyDetails(session?.accessToken as string).then((res) => {
      setCopmany(res)
    })
  }, [session?.accessToken])

  return (
    <Flex direction="column" justifyContent="flex-start" minHeight="70vh" w="100%">
      <NextSeo title="Company Details" />

      <CompanyData company={company} isEdit={true} />
    </Flex>
  )
}

export default Page
