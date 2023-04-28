import { VStack, FormControl, Text, Box, HStack, Input, Flex } from '@chakra-ui/react'
import { Select } from 'chakra-react-select'
import { ToolTipIcon } from 'components/Tooltip'
import Matrix from 'components/share/matrix/Matrix'
import { Dispatch, SetStateAction } from 'react'
import { Control, Controller, FieldValues, UseFormRegister } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { TextVariants } from 'theme'

type Props = {
  isDisabled: boolean
  isCreated: boolean
  inputVariant: string
  projectJournals: any[]
  managerWorkingHours: any[]
  control: Control<FieldValues, any>
  register: UseFormRegister<FieldValues>
  setProjectJournals: Dispatch<SetStateAction<any>>
  setManagerWorkingHours: Dispatch<SetStateAction<any>>
}

//status === FROM_SCRATCH_FILLED_OUT
const ProjectDetailsForm4 = ({
  isDisabled,
  isCreated = false,
  inputVariant,
  projectJournals,
  managerWorkingHours,
  control,
  register,
  setProjectJournals,
  setManagerWorkingHours,
}: Props) => {
  const { t } = useTranslation()

  const marketIntroductions = [
    {
      label: t('projects.questions.details.marketIntroductions.exclusivelyScientific'),
      value: 'Exclusively scientific exploitation',
    },
    {
      label: t('projects.questions.details.marketIntroductions.mediumTermCommercial'),
      value: 'Medium-term commercial exploitation (approx. 1-5 years)',
    },
    {
      label: t('projects.questions.details.marketIntroductions.shortTermEconomic'),
      value: 'Short-term economic exploitation (less than one 1 year)',
    },
  ]

  return (
    <VStack alignItems="flex-start" w="100%">
      <VStack alignItems="flex-start" w="100%" pb={5}>
        <Flex w="100%" mr={4}>
          <Text variant={TextVariants.P14Semibold} color="gray.500">
            {t('projects.questions.details.projectJournal.title')}
          </Text>
          <ToolTipIcon label={t('projects.questions.details.projectJournal.tooltip')} iconProps={{ ml: 1 }} />
        </Flex>
        <Matrix state={projectJournals} setState={setProjectJournals} questionKey="projectJournals" />
      </VStack>

      <VStack alignItems="flex-start" w="100%" pb={5}>
        <Text variant={TextVariants.P14Semibold} color="gray.500">
          {t('projects.questions.details.managerWorkingHour.title')}
        </Text>
        <Matrix state={managerWorkingHours} setState={setManagerWorkingHours} questionKey="managerWorkingHours" />
      </VStack>

      <VStack alignItems="flex-start" w="100%" pb={5}>
        <Text variant={TextVariants.P14Semibold} color="gray.500">
          {t('projects.questions.details.mainContact')}
        </Text>
        <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
          <Input
            id="mainContact"
            {...register('mainContact', {
              required: 'This is required',
            })}
            isReadOnly={isDisabled}
            variant={inputVariant}
          />
        </Box>
      </VStack>

      <VStack alignItems="flex-start" w="100%" pb={5}>
        <Text variant={TextVariants.P14Semibold} color="gray.500">
          {t('projects.questions.details.keywords')}
        </Text>
        <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
          <Input
            id="keywords"
            {...register('keywords', {
              required: 'This is required',
            })}
            isReadOnly={isDisabled}
            variant={inputVariant}
          />
        </Box>
      </VStack>

      <VStack alignItems="flex-start" w="100%" pb={5}>
        <Text variant={TextVariants.P14Semibold} color="gray.500">
          {t('projects.questions.details.endGoalDescription')}
        </Text>
        <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
          <Input
            id="endGoalDescription"
            {...register('endGoalDescription', {
              required: 'This is required',
            })}
            isReadOnly={isDisabled}
            variant={inputVariant}
          />
        </Box>
      </VStack>

      <VStack alignItems="flex-start" w="100%" pb={5}>
        <Text variant={TextVariants.P14Semibold} color="gray.500">
          {t('projects.questions.details.compatibleEcosystems')}
        </Text>
        <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
          <Input
            id="compatibleEcosystems"
            {...register('compatibleEcosystems', {
              required: 'This is required',
            })}
            isReadOnly={isDisabled}
            variant={inputVariant}
          />
        </Box>
      </VStack>

      <VStack alignItems="flex-start" w="100%" pb={5}>
        <Text variant={TextVariants.P14Semibold} color="gray.500">
          {t('projects.questions.details.basisOfProject')}
        </Text>
        <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
          <Input
            id="basisOfProject"
            {...register('basisOfProject', {
              required: 'This is required',
            })}
            isReadOnly={isDisabled}
            variant={inputVariant}
          />
        </Box>
      </VStack>

      <VStack alignItems="flex-start" w="100%" pb={5}>
        <HStack>
          <Text variant={TextVariants.P14Semibold} color="gray.500">
            {t('projects.questions.details.differenceToOtherProjects')}
          </Text>
          <ToolTipIcon label={t('projects.questions.details.differenceToOtherProjectsTooltip')} iconProps={{ ml: 1 }} />
        </HStack>
        <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
          <Input
            id="differenceToOtherProjects"
            {...register('differenceToOtherProjects', {
              required: 'This is required',
            })}
            isReadOnly={isDisabled}
            variant={inputVariant}
          />
        </Box>
      </VStack>

      <VStack alignItems="flex-start" w="100%" pb={5}>
        <HStack>
          <Text variant={TextVariants.P14Semibold} color="gray.500">
            {t('projects.questions.details.processDescription')}
          </Text>
          <ToolTipIcon label={t('projects.questions.details.processDescriptionTooltip')} iconProps={{ ml: 1 }} />
        </HStack>
        <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
          <Input
            id="processDescription"
            {...register('processDescription', {
              required: 'This is required',
            })}
            isReadOnly={isDisabled}
            variant={inputVariant}
          />
        </Box>
      </VStack>

      <VStack alignItems="flex-start" w="100%" pb={5}>
        <HStack>
          <Text variant={TextVariants.P14Semibold} color="gray.500">
            {t('projects.questions.details.currentRAndDStatus')}
          </Text>
          <ToolTipIcon label={t('projects.questions.details.currentRAndDStatusTooltip')} iconProps={{ ml: 1 }} />
        </HStack>
        <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
          <Input
            id="currentRAndDStatus"
            {...register('currentRAndDStatus', {
              required: 'This is required',
            })}
            isReadOnly={isDisabled}
            variant={inputVariant}
          />
        </Box>
      </VStack>

      <VStack alignItems="flex-start" w="100%" pb={5}>
        <HStack>
          <Text variant={TextVariants.P14Semibold} color="gray.500">
            {t('projects.questions.details.distinguishmentWithinSector')}
          </Text>
          <ToolTipIcon
            label={t('projects.questions.details.distinguishmentWithinSectorTooltip')}
            iconProps={{ ml: 1 }}
          />
        </HStack>
        <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
          <Input
            id="distinguishmentWithinSector"
            {...register('distinguishmentWithinSector', {
              required: 'This is required',
            })}
            isReadOnly={isDisabled}
            variant={inputVariant}
          />
        </Box>
      </VStack>

      <VStack alignItems="flex-start" w="100%" pb={5}>
        <HStack>
          <Text variant={TextVariants.P14Semibold} color="gray.500">
            {t('projects.questions.details.uniquenessOfProduct')}
          </Text>
          <ToolTipIcon label={t('projects.questions.details.uniquenessOfProductTooltip')} iconProps={{ ml: 1 }} />
        </HStack>
        <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
          <Input
            id="uniquenessOfProduct"
            {...register('uniquenessOfProduct', {
              required: 'This is required',
            })}
            isReadOnly={isDisabled}
            variant={inputVariant}
          />
        </Box>
      </VStack>

      <VStack alignItems="flex-start" w="100%" pb={5}>
        <Text variant={TextVariants.P14Semibold} color="gray.500">
          {t('projects.questions.details.marketIntroduction')}
        </Text>
        {isDisabled ? (
          <Input id="marketIntroduction" isReadOnly={isDisabled} variant={inputVariant} />
        ) : (
          <Controller
            control={control}
            name="type"
            rules={{ required: 'Please select one market introduction' }}
            render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => (
              <FormControl py={4} isInvalid={!!error} id="type">
                <Select
                  colorScheme="white"
                  name="marketIntroduction"
                  ref={ref}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  options={marketIntroductions}
                  placeholder="Select"
                  closeMenuOnSelect={true}
                  isDisabled={isDisabled}
                />
              </FormControl>
            )}
          />
        )}
      </VStack>
    </VStack>
  )
}

export default ProjectDetailsForm4
