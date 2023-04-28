import { Button, Flex } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextSeo } from 'next-seo'
import { useEffect, useState } from 'react'
import { Company } from 'types/company'
import { fetchCompanyDetails } from './_api/fetchCompanyDetails'
import { useTranslation } from 'react-i18next'
import { RiEdit2Fill } from 'react-icons/ri'
import CompanyData from 'components/share/company/CompanyData'
import { useRouter } from 'next/router'
import { UserRole } from 'types/user'

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
  const router = useRouter()
  const { t } = useTranslation()

  const [company, setCopmany] = useState<Company>()

  const userRole = session?.user.role

  useEffect(() => {
    fetchCompanyDetails(session?.accessToken as string).then((res) => {
      setCopmany(res)
    })
  }, [session?.accessToken])

  return (
    <Flex direction="column" justifyContent="flex-start" minHeight="70vh" mb={8} w="100%">
      <NextSeo title="Company Details" />
      {userRole === UserRole.TAX_COUNSELLOR ||
        (userRole === UserRole.CFO && (
          <Flex mt="5" justify="flex-end">
            <Button leftIcon={<RiEdit2Fill />} variant="solid" onClick={() => router.push('/company-details/edit')}>
              {t('buttons.edit')}
            </Button>
          </Flex>
        ))}

      {company && <CompanyData company={company} isEdit={false} />}
    </Flex>
  )
}

export default Page
