import { Flex } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import GeneralQuestions from '../GeneralQuestions'
import { useState, useEffect } from 'react'
import { Project } from 'types/project'
import { fetchProject } from '../../_api/fetchProject'

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
  const { query } = useRouter()
  const [project, setProject] = useState<Project>()

  useEffect(() => {
    fetchProject(Number(query.projectId), session?.accessToken as string).then((res) => {
      setProject(res)
    })
  }, [session?.accessToken])

  return (
    <Flex direction="column" justifyContent="flex-start" minHeight="70vh" w="100%">
      <NextSeo title="Edit General Project Data" />

      <GeneralQuestions isDisabled={false} project={project} />
    </Flex>
  )
}
export default Page
