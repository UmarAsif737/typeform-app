import { Button, Flex, FormLabel, Heading, Radio, RadioGroup, Spinner, Text, VStack } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import { useTranslation } from 'next-i18next'
import Separator from 'components/Separator'
import { ButtonVariants, HeadingVariants, TextVariants } from 'theme'
import { ToolTipIcon } from 'components/Tooltip'
import { useRouter } from 'next/router'
import { useForm, Controller } from 'react-hook-form'
import useCustomToast from 'hooks/useCustomToast'
import { ToastStatus } from 'config/types'
import { useEffect, useState } from 'react'
import { Project } from 'types/project'
import { updateProject } from '../_api/updateProject'
import Matrix from 'components/share/matrix/Matrix'

type Props = {
  project: Project
  isDisabled: boolean
}

const GeneralQuestions = ({ project, isDisabled }: Props) => {
  const { data: session } = useSession()
  const { toast } = useCustomToast()
  const { t } = useTranslation()
  const { query } = useRouter()
  const router = useRouter()

  const [financialFrameworks, setFinancialFrameworks] = useState<any>()
  const [personalFrameworks, setPersonalFrameworks] = useState<any>()
  const [subsidies, setSubsidies] = useState<any>()

  useEffect(() => {
    fulfillFields()
  }, [project])

  useEffect(() => {
    setFinancialFrameworks(project?.financialFrameworks)
    setPersonalFrameworks(project?.personalFrameworks)
    setSubsidies(project?.publicOrPrivateSubsidiesCosts)
  })

  const handleGoBack = () => {
    router.back()
  }

  const { setValue, getValues, handleSubmit, control } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
  })

  const fulfillFields = async () => {
    setValue('hasEstimatedFigures', project?.hasEstimatedFigures ?? undefined)
    setValue('isFundedBySubsidies', project?.isFundedBySubsidies ?? undefined)
    setValue('hasPersonalDocumentsForEmployees', project?.hasPersonalDocumentsForEmployees ?? false)
    setValue('hasWorkingTrackRecord', project?.hasWorkingTrackRecord ?? undefined)
  }

  const formatData = async () => {
    const values = getValues()

    const formatedFinancialFramework = financialFrameworks
      ? Object.values(financialFrameworks?.financialFrameworkState).map((framework: any) => {
          return {
            year: framework.year,
            totalCost: framework.totalCost,
            personalCost: framework.personalCost,
            materialCostAndInvestment: framework.materialCostAndInvestment,
            contractorCostInEU: framework.contractorCostInEU,
            contractorCostOutsideEU: framework.contractorCostOutsideEU,
            otherCost: framework.otherCost,
          }
        })
      : undefined

    const formatedSubsidies = subsidies
      ? Object.values(subsidies?.subsidiaryState).map((subsidiary: any) => {
          return {
            year: subsidiary.year,
            fundedPersonellCosts: subsidiary.fundedPersonellCosts,
            fundedContractorCostsInEU: subsidiary.fundedContractorCostsInEU,
          }
        })
      : undefined

    const formatedPersonalFramework = financialFrameworks
      ? Object.values(financialFrameworks?.financialFrameworkState).map((framework: any) => {
          return {
            year: framework.year,
            personMonthsOfRD: framework.personMonthsOfRD,
            personMonthsOfTechnicans: framework.personMonthsOfTechnicans,
            personMonthsOfOthers: framework.personMonthsOfOthers,
          }
        })
      : undefined

    return {
      hasEstimatedFigures: values.hasEstimatedFigures,
      isFundedBySubsidies: values.isFundedBySubsidies,
      hasPersonalDocumentsForEmployees: values.hasPersonalDocumentsForEmployees,
      hasWorkingTrackRecord: values.hasWorkingTrackRecord,
      financialFrameworks: formatedFinancialFramework,
      personalFrameworks: formatedPersonalFramework,
      publicOrPrivateSubsidiesCosts: formatedSubsidies,
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Heading variant={HeadingVariants.Heading4} color="gray.700" py={2.5} mt={8}>
        {t('projects.questions.general.heading')}
      </Heading>
      <Separator mb={8} />
      {!session && <Spinner size="xl" color="primary.teal" />}

      <Flex flexDirection="column" w="100%" mb={7}>
        <FormLabel>
          <Flex w="100%" mr={4} alignItems="center">
            <Text variant={TextVariants.P14Semibold} color="gray.500">
              {t('projects.questions.general.hasEstimatedFigures')}
            </Text>
            <ToolTipIcon label={t('projects.questions.general.hasEstimatedFiguresTooltip')} iconProps={{ ml: 1 }} />
          </Flex>
        </FormLabel>
        <Controller
          control={control}
          name="hasEstimatedFigures"
          render={({ field: { onChange, ref, value } }) => (
            <RadioGroup onChange={onChange} ref={ref} value={value === true ? 'true' : 'false'} isDisabled={isDisabled}>
              <Radio value={'true'} mr={6}>
                {t('projects.questions.general.radioYes')}
              </Radio>
              <Radio value={'false'}>{t('projects.questions.general.radioNo')}</Radio>
            </RadioGroup>
          )}
        />
      </Flex>

      <VStack alignItems="flex-start" w="100%" pb={5}>
        <Text variant={TextVariants.P14Semibold} color="gray.500">
          {t('projects.questions.general.financialFramework.title')}
        </Text>
        <Matrix
          state={financialFrameworks}
          setState={setFinancialFrameworks}
          questionKey="financialFrameworks"
          isDisabled={isDisabled}
        />
      </VStack>

      <VStack alignItems="flex-start" w="100%" pb={5}>
        <Text variant={TextVariants.P14Semibold} color="gray.500">
          {t('projects.questions.general.personalFramework.title')}
        </Text>
        <Matrix
          state={personalFrameworks}
          setState={setPersonalFrameworks}
          questionKey="personalFrameworks"
          isDisabled={isDisabled}
        />
      </VStack>

      <Flex flexDirection="column" w="100%" mb={7}>
        <FormLabel>
          <Flex w="100%" mr={4} alignItems="center">
            <Text variant={TextVariants.P14Semibold} color="gray.500">
              {t('projects.questions.general.isFundedBySubsidies')}
            </Text>
          </Flex>
        </FormLabel>
        <Controller
          control={control}
          name="isFundedBySubsidies"
          render={({ field: { onChange, ref, value } }) => (
            <RadioGroup onChange={onChange} ref={ref} value={value === true ? 'true' : 'false'} isDisabled={isDisabled}>
              <Radio value={'true'} mr={6}>
                {t('projects.questions.general.radioYes')}
              </Radio>
              <Radio value={'false'}>{t('projects.questions.general.radioNo')}</Radio>
            </RadioGroup>
          )}
        />
      </Flex>

      <VStack alignItems="flex-start" w="100%" pb={5}>
        <Text variant={TextVariants.P14Semibold} color="gray.500">
          {t('projects.questions.general.subsidiary.title')}
        </Text>
        <Matrix
          state={subsidies}
          setState={setSubsidies}
          questionKey="publicOrPrivateSubsidies"
          isDisabled={isDisabled}
        />
      </VStack>

      <Flex flexDirection="column" w="100%" mb={7}>
        <FormLabel>
          <Flex w="100%" mr={4} alignItems="center">
            <Text variant={TextVariants.P14Semibold} color="gray.500">
              {t('projects.questions.general.hasPersonalDocumentsForEmployees')}
            </Text>
            <ToolTipIcon
              label={t('projects.questions.general.hasPersonalDocumentsForEmployeesTooltip')}
              iconProps={{ ml: 1 }}
            />
          </Flex>
        </FormLabel>
        <Controller
          control={control}
          name="hasPersonalDocumentsForEmployees"
          render={({ field: { onChange, ref, value } }) => (
            <RadioGroup onChange={onChange} ref={ref} value={value === true ? 'true' : 'false'} isDisabled={isDisabled}>
              <Radio value={'true'} mr={6}>
                {t('projects.questions.general.radioYes')}
              </Radio>
              <Radio value={'false'}>{t('projects.questions.general.radioNo')}</Radio>
            </RadioGroup>
          )}
        />
      </Flex>

      <Flex flexDirection="column" w="100%" mb={7}>
        <FormLabel>
          <Flex w="100%" mr={4} alignItems="center">
            <Text variant={TextVariants.P14Semibold} color="gray.500">
              {t('projects.questions.general.hasWorkingTrackRecord')}
            </Text>
            <ToolTipIcon label={t('projects.questions.general.hasWorkingTrackRecordTooltip')} iconProps={{ ml: 1 }} />
          </Flex>
        </FormLabel>
        <Controller
          control={control}
          name="hasWorkingTrackRecord"
          render={({ field: { onChange, ref, value } }) => (
            <RadioGroup onChange={onChange} ref={ref} value={value === true ? 'true' : 'false'} isDisabled={isDisabled}>
              <Radio value={'true'} mr={6}>
                {t('projects.questions.general.radioYes')}
              </Radio>
              <Radio value={'false'}>{t('projects.questions.general.radioNo')}</Radio>
            </RadioGroup>
          )}
        />
      </Flex>

      {!isDisabled && (
        <Flex justifyContent="space-between" mt={20} mb="10rem">
          <Button variant={ButtonVariants.Secondary} width="33.33%" onClick={handleGoBack}>
            {t('buttons.cancel')}
          </Button>
          <Button variant={ButtonVariants.Primary} mr="1rem" width="33.33%" type="submit">
            {t('buttons.save')}
          </Button>
        </Flex>
      )}
    </form>
  )
}

export default GeneralQuestions
