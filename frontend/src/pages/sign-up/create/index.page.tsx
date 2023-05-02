import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import SignUpLayout from '../layout'
import CreateForm from './CreateForm'
import { useTranslation } from 'react-i18next'
import { Box, Heading } from '@chakra-ui/react'
import SignInForm from 'pages/sign-in/SignInForm'
import { HeadingVariants } from 'theme'
import CustomDivider from '../CustomDivider'

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
}

// const CreatePage = () => {
//   return <CreateForm />
// }

// CreatePage.getLayout = (page: React.ReactNode) => {
//   return <SignUpLayout pageTitle="Create an account">{page}</SignUpLayout>
// }

// export default CreatePage

const Page = () => {
  return <SignUp />
}

Page.getLayout = (page: React.ReactNode) => {
  return <SignUpLayout pageTitle="Create a new account">{page}</SignUpLayout>
}

const SignUp = () => {
  const { t } = useTranslation()

  return (
    <Box w="24rem">
      <Heading variant={HeadingVariants.Heading2} pb="4">
        {t('share.signup.header')}
      </Heading>

      <CustomDivider />

      <CreateForm />
    </Box>
  )
}

export default Page
