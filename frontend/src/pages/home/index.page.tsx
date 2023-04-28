import { Button, Flex, HStack, Text } from '@chakra-ui/react'
import ProjectContainer from 'components/share/project/ProjectContainer'
import ProjectTable from 'components/share/project/ProjectTable'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextSeo } from 'next-seo'
import { useCallback, useEffect, useState } from 'react'
import DashboardCard from './DashboardCard'
import { fetchDashboardData } from './_api/fetchDashboardData'
import { DashboardData } from 'types/dashboard'
import { useTranslation } from 'react-i18next'
import { UserRole } from 'types/user'
import AssignTaxCounsellor from './AssignTaxCounsellor'
import { ButtonVariants } from 'theme'
import { useRouter } from 'next/router'

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

const Home = () => {
  const { data: session } = useSession()
  const { t } = useTranslation()
  const router = useRouter()
  const [dashboardData, setDashboardData] = useState<DashboardData>()
  const [hasTaxCounsellor, setHasTaxCounsellor] = useState<boolean>(true)
  const [hasMissingCompanyDetails, setHasMissingCompanyDetails] = useState<boolean>(true)

  const userRole = session?.user.role

  const handleNewProject = () => {
    router.push('/projects/create')
  }

  useEffect(() => {
    loadPage()
  }, [session?.accessToken])

  const loadPage = useCallback(async () => {
    if (!session?.accessToken) return

    const data = await fetchDashboardData(session?.accessToken as string)
    setDashboardData(data)
    setHasTaxCounsellor(data.hasTaxCounsellor)
    setHasMissingCompanyDetails(data.hasMissingCompanyDetails)
  }, [session?.accessToken])

  return (
    <Flex
      direction="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo title="Home" />

      {session?.user.role === UserRole.CFO && !hasTaxCounsellor ? (
        <AssignTaxCounsellor refresh={loadPage} />
      ) : (
        <>
          {!dashboardData?.projects && <Text>{t('dashboard.noRegisteredProjects')}</Text>}

          {dashboardData?.projects && (
            <>
              {userRole === UserRole.HEAD_OF_RD && (
                <Flex mt="5" justify="flex-end">
                  <Button variant={ButtonVariants.Primary} mr="1rem" onClick={handleNewProject}>
                    {t('dashboard.addNewProject')}
                  </Button>
                </Flex>
              )}

              {userRole === UserRole.TAX_COUNSELLOR && hasMissingCompanyDetails && (
                <Flex mt="5" justify="space-between" bg="yellow.400">
                  <Text>{t('dashboard.fillOutCompanyDetails')}</Text>
                  <Button variant={ButtonVariants.Primary} mr="1rem" onClick={handleNewProject}>
                    {t('dashboard.fillOutCompanyDetailsButton')}
                  </Button>
                </Flex>
              )}

              <HStack w="100%">
                <DashboardCard
                  cardHeading={dashboardData.totalProjects}
                  cardSubheading={t('dashboard.registeredProjects')}
                />
                <DashboardCard
                  cardHeading={dashboardData.totalRequestedFundingAmount}
                  cardSubheading={t('dashboard.eligibleForFunding')}
                />
              </HStack>
              {dashboardData.projects?.map((project) => (
                <ProjectContainer
                  projectId={project.id}
                  name={project.name}
                  key={project.id}
                  projectStatus={project.status}
                  userRole={userRole}
                >
                  <ProjectTable data={[project]} />
                </ProjectContainer>
              ))}
            </>
          )}
        </>
      )}
    </Flex>
  )
}

export default Home
