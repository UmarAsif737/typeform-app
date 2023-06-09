import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Box, Heading, VStack } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import SignInForm from './SignInForm'
import CustomDivider from '../sign-up/CustomDivider'
import SignUpLayout from 'pages/sign-up/layout'
import { HeadingVariants } from 'theme'
// import useRedirectLoggedUser from './useRedirectLoggedUser'

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
}

const Page = () => {
  return <SignIn />
}

Page.getLayout = (page: React.ReactNode) => {
  return <SignUpLayout pageTitle="Log into your account">{page}</SignUpLayout>
}

const SignIn = () => {
  const { t } = useTranslation()
  // useRedirectLoggedUser()

  return (
    <VStack align="center">
      <Box>
        <Heading variant={HeadingVariants.Heading2} pb={5} color="gray.600">
          {t('share.signIn.loginHeader')}
        </Heading>

        <CustomDivider />

        <SignInForm />
      </Box>
    </VStack>
  )
}

export default Page
