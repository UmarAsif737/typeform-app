import { Box, Button, Flex, Progress, Spinner } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ButtonVariants, InputVariants } from 'theme'
import { Project, ProjectStatus } from 'types/project'
import DevelopFromScratchForm from '../details/DevelopFromScratchForm'
import ProjectDetailsForm1 from '../details/ProjectDetailsForm1'
import ProjectDetailsForm2 from '../details/ProjectDetailsForm2'
import ProjectDetailsForm3 from '../details/ProjectDetailsForm3'
import ProjectDetailsForm4 from '../details/ProjectDetailsForm4'
import StartPeriodForm from '../details/StartPeriodForm'
import { fetchProject } from '../_api/fetchProject'
import { updateProject } from '../_api/updateProject'
import NotEligible from '../details/NotEligible'
import { useForm } from 'react-hook-form'
import { uploadDocument } from '../_api/uploadDocument'
import FormData from 'form-data'

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
  const [progress, setProgress] = useState(20)
  const [status, setStatus] = useState<ProjectStatus>()
  const [project, setProject] = useState<Project>()
  const [contractors, setContractors] = useState<any>()
  const [researchPartners, setResearchPartners] = useState<any>()
  const [projectJournals, setProjectJournals] = useState<any>()
  const [managerWorkingHours, setManagerWorkingHours] = useState<any>()
  const [screenshotOfParticipatingRDStaff, setScreenshotOfParticipatingRDStaff] = useState()

  useEffect(() => {
    loadPage()
  }, [session?.user?.accessToken])

  const loadPage = useCallback(async () => {
    if (!session?.user?.accessToken) return

    const data = await fetchProject(Number(query.projectId), session?.user?.accessToken as string)
    setProject(data)
  }, [session?.user?.accessToken, query.projectId])

  useEffect(() => {
    if (project) {
      setStatus(project.status)
    }
  }, [session?.user?.accessToken, project])

  const handleBack = () => {
    router.back()
    setProgress(progress - 20)
  }

  const handleNext = async () => {
    await onSubmit()
    setProgress(progress + 20)
  }

  const {
    getValues,
    register,
    formState: { errors },
    control,
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
  })

  const formatData = async () => {
    const values = getValues()

    //format all matrices
    const formatedContractors = contractors
      ? Object.values(contractors?.contractorState).map((contractor: any) => {
          return {
            name: contractor.name,
            type: contractor.type,
            legalForm: contractor.legalForm,
            address: contractor.address,
            isGermanCompany: contractor.isGermanCompany,
            federalState: contractor.federalState,
            descriptionOfWork: contractor.descriptionOfWork,
            taxId: contractor.taxId,
            cost: contractor.cost,
          }
        })
      : undefined

    const formatedResearchPartners = researchPartners
      ? Object.values(researchPartners?.researchPartnerState).map((researchPartner: any) => {
          return {
            name: researchPartner.name,
            type: researchPartner.type,
            legalForm: researchPartner.legalForm,
            address: researchPartner.address,
            federalState: researchPartner.federalState,
            descriptionOfWork: researchPartner.descriptionOfWork,
            taxId: researchPartner.taxId,
            cost: researchPartner.cost,
          }
        })
      : undefined

    const formatedProjectJournals = projectJournals
      ? Object.values(projectJournals?.projectJournalState).map((projectJournal: any) => {
          return {
            part: projectJournal.part,
            timeSlot: projectJournal.timeSlot,
            budget: projectJournal.budget,
          }
        })
      : undefined

    const formatedManagerWorkingHours = managerWorkingHours
      ? Object.values(managerWorkingHours?.managerWorkingHourState).map((workingHours: any) => {
          return {
            name: workingHours.name,
            hour: workingHours.hour,
            task: workingHours.task,
          }
        })
      : undefined

    const input = {
      name: values.name,
      startOfProject: values.startOfProject?.value,
      startOfPeriod: values.startOfPeriod,
      endOfPeriod: values.startOfPeriod,
      type: values.type?.value,
      isRegisteredAtBSFZ: values.isRegisteredAtBSFZ === 'true' ? true : false,
      bsfzProjectId: values.bsfzProjectId,
      majorityHasUniversityDegrees: values.majorityHasUniversityDegrees === 'true' ? true : false,
      category: values.category?.value,
      isCompatibleWithExistingEcosystems: values.isCompatibleWithExistingEcosystems === 'true' ? true : false,
      majorityIsDevelopedFromScratch: values.majorityIsDevelopedFromScratch === 'true' ? true : false,
      mainContact: values.mainContact,
      keywords: values.keywords,
      endGoalDescription: values.endGoalDescription,
      compatibleEcosystems: values.compatibleEcosystems === 'true' ? true : false,
      basisOfProject: values.basisOfProject,
      differenceToOtherProjects: values.differenceToOtherProjects,
      processDescription: values.processDescription,
      currentRAndDStatus: values.currentRAndDStatus,
      distinguishmentWithinSector: values.uniquenessOfProduct,
      uniquenessOfProduct: values.uniquenessOfProduct,
      marketIntroduction: values.marketIntroduction?.value,
      hasEstimatedFigures: values.hasEstimatedFigures === 'true' ? true : false,
      isFundedBySubsidies: values.isFundedBySubsidies === 'true' ? true : false,
      hasPersonalDocumentsForEmployees: values.hasPersonalDocumentsForEmployees === 'true' ? true : false,
      hasWorkingTrackRecord: values.hasWorkingTrackRecord === 'true' ? true : false,
      contractors: formatedContractors,
      researchPartners: formatedResearchPartners,
      projectJournals: formatedProjectJournals,
      managerWorkingHours: formatedManagerWorkingHours,
      screenshotOfParticipatingRDStaff: values.screenshotOfParticipatingRDStaff[0],
    }
    return input
  }

  const uploadFiles = async () => {
    const values = getValues()
    if (values.screenshotOfParticipatingRDStaff) {
      const formData = new FormData()
      formData.append('screenshotOfParticipatingRDStaff', values.screenshotOfParticipatingRDStaff[0])
      await uploadDocument(formData, session?.user?.accessToken as string, Number(project?.id))
    }
  }

  const onSubmit = async () => {
    const token = session?.user?.accessToken as string
    await uploadFiles()
    const formatedResponse = await formatData()
    updateProject(Number(query.projectId), token, formatedResponse)
    if (status === ProjectStatus.FROM_SCRATCH_FILLED_OUT) {
      router.push('/home')
      return
    }
    loadPage()
  }

  return (
    <Flex direction="column" justifyContent="flex-start" minHeight="70vh" w="100%">
      <NextSeo title="Project Details Questions" />

      {!project && <Spinner size="xl" color="primary.teal" />}

      <Box as="form">
        {status !== ProjectStatus.NOT_ELIGIBLE && (
          <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
        )}
        {status === ProjectStatus.NOT_STARTED && (
          <StartPeriodForm isDisabled={false} control={control} isCreated={true} />
        )}
        {status === ProjectStatus.STARTED && (
          <ProjectDetailsForm1
            isDisabled={false}
            control={control}
            isCreated={true}
            register={register}
            inputVariant={InputVariants.WithBorder}
          />
        )}
        {status === ProjectStatus.TYPE_FILLED_OUT && (
          <ProjectDetailsForm2
            isDisabled={false}
            control={control}
            isCreated={true}
            inputVariant={InputVariants.WithBorder}
            register={register}
            setScreenshotOfParticipatingRDStaff={setScreenshotOfParticipatingRDStaff}
          />
        )}
        {status === ProjectStatus.PERSONELL_FILLED_OUT && (
          <ProjectDetailsForm3
            isDisabled={false}
            inputVariant={InputVariants.WithBorder}
            control={control}
            contractors={contractors}
            setContractors={setContractors}
            researchPartners={researchPartners}
            setResearchPartners={setResearchPartners}
          />
        )}
        {status === ProjectStatus.ECOSYSTEMS_FILLED_OUT && (
          <DevelopFromScratchForm isDisabled={false} control={control} isCreated={true} />
        )}
        {status === ProjectStatus.FROM_SCRATCH_FILLED_OUT && (
          <ProjectDetailsForm4
            isDisabled={false}
            isCreated={true}
            inputVariant={InputVariants.WithBorder}
            projectJournals={projectJournals}
            managerWorkingHours={managerWorkingHours}
            setProjectJournals={setProjectJournals}
            setManagerWorkingHours={setManagerWorkingHours}
            register={register}
            control={control}
          />
        )}

        {status === ProjectStatus.NOT_ELIGIBLE && <NotEligible />}
        {status !== ProjectStatus.NOT_ELIGIBLE && (
          <Flex justifyContent="space-between" mt={20} mb="10rem" w="100%">
            <Button variant={ButtonVariants.Secondary} onClick={handleBack} w="33.33%">
              {t('buttons.cancel')}
            </Button>
            <Button variant={ButtonVariants.Primary} mr="1rem" onClick={handleNext} w="33.33%">
              {t('buttons.next')}
            </Button>
          </Flex>
        )}
      </Box>
    </Flex>
  )
}

export default Page
