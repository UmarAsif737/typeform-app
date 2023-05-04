import { Button, Flex, Heading, Spinner, VStack } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { NextSeo } from 'next-seo'
import { ButtonVariants, HeadingVariants, InputVariants } from 'theme'
import DevelopFromScratchForm from '../details/DevelopFromScratchForm'
import ProjectDetailsForm1 from '../details/ProjectDetailsForm1'
import ProjectDetailsForm2 from '../details/ProjectDetailsForm3'
import Separator from 'components/Separator'
import { RiEdit2Fill } from 'react-icons/ri'
import { UserRole } from 'types/user'
import ProjectDetailsForm3 from '../details/ProjectDetailsForm4'
import StartPeriodForm from '../details/StartPeriodForm'
import { updateProject } from '../_api/updateProject'
import useCustomToast from 'hooks/useCustomToast'
import { ToastStatus } from 'config/types'
import { useForm } from 'react-hook-form'
import { Project } from 'types/project'
import { fetchProject } from '../_api/fetchProject'
import ProjectDetailsForm4 from '../details/ProjectDetailsForm4'

export type SubmitData = {
  name: string
  startOfProject: string
  startOfPeriod: Date
  endOfPeriod: Date
  type: string
  isRegisteredAtBSFZ: boolean
  bsfzProjectId: string
  majorityHasUniversityDegrees: boolean
  category: string
  isCompatibleWithExistingEcosystems: boolean
  majorityIsDevelopedFromScratch: boolean
  mainContact: string
  keywords: string
  endGoalDescription: string
  compatibleEcosystems: string
  basisOfProject: string
  differenceToOtherProjects: string
  processDescription: string
  currentRAndDStatus: string
  distinguishmentWithinSector: string
  uniquenessOfProduct: string
  marketIntroduction: string
  hasEstimatedFigures: boolean
  isFundedBySubsidies: boolean
  hasPersonalDocumentsForEmployees: boolean
  hasWorkingTrackRecord: boolean
}

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
  const router = useRouter()
  const { query } = useRouter()
  const { t } = useTranslation()
  const { data: session } = useSession()
  const { toast } = useCustomToast()
  const [project, setProject] = useState<Project>()

  useEffect(() => {
    fetchProject(Number(query.projectId), session?.user?.accessToken as string).then((res) => {
      setProject(res)
    })
  }, [session?.user?.accessToken])

  const handleGoBack = () => {
    router.back()
  }

  const userRole = session?.user.role

  const {
    getValues,
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
  })

  const formatData = async () => {
    const values = getValues()
    return {
      name: values.name,
      startOfProject: values.startOfProject,
      startOfPeriod: values.startOfPeriod,
      endOfPeriod: values.startOfPeriod,
      type: values.type,
      isRegisteredAtBSFZ: values.isRegisteredAtBSFZ,
      bsfzProjectId: values.bsfzProjectId,
      majorityHasUniversityDegrees: values.majorityHasUniversityDegrees,
      category: values.category,
      isCompatibleWithExistingEcosystems: values.isCompatibleWithExistingEcosystems,
      majorityIsDevelopedFromScratch: values.majorityIsDevelopedFromScratch,
      mainContact: values.mainContact,
      keywords: values.keywords,
      endGoalDescription: values.endGoalDescription,
      compatibleEcosystems: values.compatibleEcosystems,
      basisOfProject: values.basisOfProject,
      differenceToOtherProjects: values.differenceToOtherProjects,
      processDescription: values.processDescription,
      currentRAndDStatus: values.currentRAndDStatus,
      distinguishmentWithinSector: values.uniquenessOfProduct,
      uniquenessOfProduct: values.uniquenessOfProduct,
      marketIntroduction: values.marketIntroduction,
      hasEstimatedFigures: values.hasEstimatedFigures,
      isFundedBySubsidies: values.isFundedBySubsidies,
      hasPersonalDocumentsForEmployees: values.hasPersonalDocumentsForEmployees,
      hasWorkingTrackRecord: values.hasWorkingTrackRecord,
    }
  }

  const onSubmit = async () => {
    const token = session?.user?.accessToken as string
    const formatedResponse = await formatData()

    try {
      updateProject(Number(query.projectId), token, formatedResponse)
      router.push('/home')

      toast(
        ToastStatus.SUCCESS,
        t('projects.questions.general.success'),
        t('projects.questions.general.sucesfullyUpdatedYourProject')
      )
    } catch (err) {
      toast(
        ToastStatus.ERROR,
        t('projects.questions.general'),
        t('projects.questions.general.errorWhileUpdatingYourProject')
      )
    }
  }

  return (
    <Flex direction="column" justifyContent="flex-start" minHeight="70vh" w="100%">
      <NextSeo title="Edit Project Details Questions" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDirection="row">
          <Heading variant={HeadingVariants.Heading4} color="gray.700" py={2.5} mt={8}>
            {t('projects.questions.details.heading')}
            {project && userRole === UserRole.PROJECT_MANAGER && (
              <Button
                leftIcon={<RiEdit2Fill />}
                variant="solid"
                onClick={() => router.push(`/projects/${project.id}/edit`)}
              >
                {t('buttons.edit')}
              </Button>
            )}
          </Heading>
        </Flex>
        <Separator mb={8} />
        {!session && <Spinner size="xl" color="primary.teal" />}

        <VStack w="100%" alignItems="flex-start">
          <StartPeriodForm isDisabled={false} control={control} isCreated={false} />
          <ProjectDetailsForm1
            isDisabled={false}
            inputVariant={InputVariants.WithBorder}
            control={control}
            register={register}
            isCreated={false}
          />
          {/* <ProjectDetailsForm2
            isDisabled={false}
            inputVariant={InputVariants.WithBorder}
            control={control}
            register={register}
            isCreated={false}
          /> */}
          {/* <ProjectDetailsForm3
            isDisabled={false}
            inputVariant={InputVariants.WithBorder}
            control={control}
            register={register}
            isCreated={false}
          />
          <DevelopFromScratchForm isDisabled={false} control={control} isCreated={false} />
          <ProjectDetailsForm4
            isDisabled={false}
            inputVariant={InputVariants.WithBorder}
            control={control}
            register={register}
            isCreated={false}
          /> */}
        </VStack>
        <Flex justifyContent="space-between" mt={20} mb="10rem">
          <Button variant={ButtonVariants.Secondary} w="33.33%" onClick={handleGoBack}>
            {t('buttons.cancel')}
          </Button>
          <Button variant={ButtonVariants.Primary} mr="1rem" w="33.33%" type="submit">
            {t('buttons.save')}
          </Button>
        </Flex>
      </form>
    </Flex>
  )
}

export default Page
