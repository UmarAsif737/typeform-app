import { Heading, Spinner, Flex, Button, VStack } from '@chakra-ui/react'
import Separator from 'components/Separator'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { HeadingVariants, InputVariants } from 'theme'
import { Project } from 'types/project'
import StartPeriodForm from './details/StartPeriodForm'
import ProjectDetailsForm1 from './details/ProjectDetailsForm1'
import ProjectDetailsForm2 from './details/ProjectDetailsForm2'
import DevelopFromScratchForm from './details/DevelopFromScratchForm'
import ProjectDetailsForm3 from './details/ProjectDetailsForm3'
import { RiEdit2Fill } from 'react-icons/ri'
import { UserRole } from 'types/user'
import ProjectDetailsForm4 from './details/ProjectDetailsForm4'

type Props = {
  project: Project
}

const DetailsTab = ({ project }: Props) => {
  const { t } = useTranslation()
  const { data: session } = useSession()
  const router = useRouter()
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const [inputVariant, setInputVariant] = useState(InputVariants.ReadOnly)

  const userRole = session?.user.role

  useEffect(() => {
    if (session && userRole === 'projectManager') {
      setInputVariant(InputVariants.WithBorder)
      setIsDisabled(false)
    }
  }, [session])

  const {
    setValue,
    register,

    control,
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
  })

  const fulfillFields = async () => {
    setValue('name', project?.name ?? undefined)
    setValue('startOfProject', project?.startOfProject ?? undefined)
    setValue('startOfPeriod', project?.startOfPeriod ?? undefined)
    setValue('endOfPeriod', project?.endOfPeriod ?? undefined)
    setValue('type', project?.type ?? undefined)
    setValue('isRegisteredAtBSFZ', project?.isRegisteredAtBSFZ ?? undefined)
    setValue('bsfzProjectId', project?.bsfzProjectId ?? undefined)
    setValue('majorityHasUniversityDegrees', project?.majorityHasUniversityDegrees ?? undefined)
    setValue('category', project?.category ?? undefined)
    setValue('isCompatibleWithExistingEcosystems', project?.isCompatibleWithExistingEcosystems ?? undefined)
    setValue('majorityIsDevelopedFromScratch', project?.majorityIsDevelopedFromScratch ?? undefined)
    setValue('mainContact', project?.mainContact ?? undefined)
    setValue('keywords', project?.keywords ?? undefined)
    setValue('endGoalDescription', project?.endGoalDescription ?? undefined)
    setValue('compatibleEcosystems', project?.compatibleEcosystems ?? undefined)
    setValue('basisOfProject', project?.basisOfProject ?? undefined)
    setValue('processDescription', project?.processDescription ?? undefined)
    setValue('currentRAndDStatus', project?.currentRAndDStatus ?? undefined)
    setValue('distinguishmentWithinSector', project?.distinguishmentWithinSector ?? undefined)
    setValue('uniquenessOfProduct', project?.processDescription ?? undefined)
    setValue('hasEstimatedFigures', project?.hasEstimatedFigures ?? undefined)
    setValue('isFundedBySubsidies', project?.isFundedBySubsidies ?? undefined)
    setValue('hasPersonalDocumentsForEmployees', project?.hasPersonalDocumentsForEmployees ?? undefined)
    setValue('hasWorkingTrackRecord', project?.hasWorkingTrackRecord ?? undefined)
  }

  useEffect(() => {
    fulfillFields()
  }, [project, setValue])

  return (
    <>
      <Flex flexDirection="row">
        <Heading variant={HeadingVariants.Heading4} color="gray.700" py={2.5} mt={8}>
          {t('projects.questions.details.heading')}
          {project && (userRole === UserRole.PROJECT_MANAGER || userRole === UserRole.HEAD_OF_RD) && (
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
        <StartPeriodForm isDisabled={isDisabled} control={control} isCreated={false} />
        <ProjectDetailsForm1
          isDisabled={isDisabled}
          inputVariant={inputVariant}
          control={control}
          register={register}
          isCreated={false}
        />
        {/* <ProjectDetailsForm2
          isDisabled={isDisabled}
          control={control}
          inputVariant={inputVariant}
          register={register}
        /> */}
        {/* <ProjectDetailsForm3
          isDisabled={isDisabled}
          inputVariant={inputVariant}
          control={control}
          register={register}
          isCreated={false}
        /> */}
        {/* <DevelopFromScratchForm isDisabled={isDisabled} control={control} isCreated={false} /> */}
        {/* <ProjectDetailsForm4
          isDisabled={false}
          isCreated={true}
          inputVariant={InputVariants.WithBorder}
          projectJournals={projectJournals}
          managerWorkingHours={managerWorkingHours}
          setProjectJournals={setProjectJournals}
          setManagerWorkingHours={setManagerWorkingHours}
          register={register}
          control={control}
        /> */}
      </VStack>
    </>
  )
}

export default DetailsTab
