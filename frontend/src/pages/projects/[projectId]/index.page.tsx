import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import GeneralTab from './GeneralTab'
import { fetchProject } from './_api/fetchProject'
import { useSession } from 'next-auth/react'
import { Project } from 'types/project'
import DetailsTab from './DetailsTab'

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

const generalIndexName = 'general'
const detailsIndexName = 'details'

const indexToName = [generalIndexName, detailsIndexName]

const Page = () => {
  const router = useRouter()
  const { query } = useRouter()
  const { t } = useTranslation()
  const { data: session } = useSession()

  const [tabsSelection, setTabsSelection] = useState<number>(0)
  const [project, setProject] = useState<Project>()

  const userRole = session?.user.role

  useEffect(() => {
    const hash = router.asPath.split('#')[1] || generalIndexName
    const index = indexToName.findIndex((i) => i === hash)

    if (index > 0) {
      setTabsSelection(0)
      router.push({ hash: '' })
      return
    }

    setTabsSelection(index)
  }, [])

  useEffect(() => {
    fetchProject(Number(query.projectId), session?.user?.accessToken as string).then((res) => {
      setProject(res)
    })
  }, [session?.user?.accessToken])

  const updateHash = (index: number) => {
    setTabsSelection(index)
    if (indexToName[index] === generalIndexName) {
      return router.push({ hash: '' })
    }
    return router.push({ hash: detailsIndexName })
  }

  const tabs = useMemo(() => {
    const tabsArray = [
      {
        key: 'general',
        title: t('projects.questions.tabsGeneral'),
        component: <GeneralTab project={project} userRole={userRole} />,
      },
      {
        key: 'details',
        title: t('projects.questions.tabsDetails'),
        component: <DetailsTab project={project} />,
      },
    ]
    return tabsArray
  }, [project])

  return (
    <Flex>
      <Tabs
        index={tabsSelection}
        mt="8"
        colorScheme="primary.dark"
        onChange={updateHash}
        // variant={TabsVariants.Default}
        position="relative"
      >
        <TabList>
          {tabs.map((i) => (
            <Tab key={i.key}>{i.title}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabs.map((i) => (
            <TabPanel key={i.key}>{i.component}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Flex>
  )
}

export default Page
