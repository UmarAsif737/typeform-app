import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import SignUpLayout from '../layout'
import CreateForm from './CreateForm'

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
}

const CreatePage = () => {
  return <CreateForm />
}

CreatePage.getLayout = (page: React.ReactNode) => {
  return <SignUpLayout pageTitle="Create an account">{page}</SignUpLayout>
}

export default CreatePage
