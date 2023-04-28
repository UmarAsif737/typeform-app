import { VStack, FormControl, Text, Flex, FormLabel, Radio, RadioGroup, Input } from '@chakra-ui/react'
import { Select } from 'chakra-react-select'
import { Control, Controller, FieldValues } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { TextVariants } from 'theme'
import { Dispatch, SetStateAction } from 'react'
import Matrix from 'components/share/matrix/Matrix'

type Props = {
  isDisabled: boolean
  inputVariant: string
  contractors: any[]
  researchPartners: any[]
  setContractors: Dispatch<SetStateAction<any>>
  setResearchPartners: Dispatch<SetStateAction<any>>
  control: Control<FieldValues, any>
}

//status === PERSONELL_FILLED_OUT
const ProjectDetailsForm3 = ({
  isDisabled,
  inputVariant,
  contractors,
  researchPartners,
  control,
  setContractors,
  setResearchPartners,
}: Props) => {
  const { t } = useTranslation()

  const projectCategories = [
    {
      label: t('projects.questions.details.categories.fullInternalResearch'),
      value: 'Full Internal research',
    },
    {
      label: t('projects.questions.details.categories.fullContractResearch'),
      value: 'Full Contract research (R&D fully commissioned)',
    },
    {
      label: t('projects.questions.details.categories.proRataContractResearch'),
      value: 'Pro Rata Contract research (R&D partially commissioned)',
    },
    {
      label: t('projects.questions.details.categories.cooperativeResearch'),
      value: 'Cooperative Research (Other Companies With Internal R&D Department And/Or other Research Institutes)',
    },
  ]

  return (
    <VStack alignItems="flex-start" w="100%">
      <VStack alignItems="flex-start" w="100%" pb={5}>
        <Text variant={TextVariants.P14Semibold} color="gray.500">
          {t('projects.questions.details.category')}
        </Text>
        {isDisabled ? (
          <Input id="category" isReadOnly={isDisabled} variant={inputVariant} />
        ) : (
          <Controller
            control={control}
            name="category"
            rules={{ required: 'Please select one project categor' }}
            render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => (
              <FormControl py={4} isInvalid={!!error} id="category">
                <Select
                  colorScheme="white"
                  name="category"
                  ref={ref}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  options={projectCategories}
                  placeholder="Select"
                  closeMenuOnSelect={true}
                  isDisabled={isDisabled}
                />
              </FormControl>
            )}
          />
        )}
      </VStack>

      <VStack alignItems="flex-start" w="100%" pb={5}>
        <Text variant={TextVariants.P14Semibold} color="gray.500">
          {t('projects.questions.details.contractors.title')}
        </Text>
        <Matrix state={contractors} setState={setContractors} questionKey="contractors" />
      </VStack>

      <VStack alignItems="flex-start" w="100%" pb={5}>
        <Text variant={TextVariants.P14Semibold} color="gray.500">
          {t('projects.questions.details.researchPartners.title')}
        </Text>
        <Matrix state={researchPartners} setState={setResearchPartners} questionKey="researchPartners" />
      </VStack>

      <Flex flexDirection="column" w="100%" pb={5}>
        <FormLabel>
          <Flex w="100%" mr={4}>
            <Text variant={TextVariants.P14Semibold} color="gray.500">
              {t('projects.questions.details.isCompatibleWithExistingEcosystems')}
            </Text>
          </Flex>
        </FormLabel>
        <Controller
          control={control}
          name="isCompatibleWithExistingEcosystems"
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
    </VStack>
  )
}

export default ProjectDetailsForm3
