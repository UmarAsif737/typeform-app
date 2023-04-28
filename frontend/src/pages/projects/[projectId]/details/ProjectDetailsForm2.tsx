import { VStack, Text, Flex, FormLabel, Radio, RadioGroup, Box, Input } from '@chakra-ui/react'
import { ToolTipIcon } from 'components/Tooltip'
import { Control, Controller, FieldValues, UseFormRegister } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { TextVariants } from 'theme'

type Props = {
  isDisabled: boolean
  isCreated: boolean
  inputVariant: string
  control: Control<FieldValues, any>
  register: UseFormRegister<FieldValues>
}

//status === TYPE_FILLED_OUT
const ProjectDetailsForm2 = ({ isDisabled, isCreated = false, control, inputVariant, register }: Props) => {
  const { t } = useTranslation()

  return (
    <VStack alignItems="flex-start" w="100%">
      <Flex w="100%" mb={7} flexDirection="row" pb={5}>
        <Flex flexDirection="column" w="100%" mb={7}>
          <FormLabel>
            <Flex w="100%" mr={4}>
              <Text variant={TextVariants.P14Semibold} color="gray.500">
                {t('projects.questions.details.isRegisteredAtBSFZ')}
              </Text>
              <ToolTipIcon label={t('projects.questions.details.isRegisteredAtBSFZTooltip')} iconProps={{ ml: 1 }} />
            </Flex>
          </FormLabel>
          <Controller
            control={control}
            name="isRegisteredAtBSFZ"
            render={({ field: { onChange, ref, value } }) => (
              <RadioGroup
                onChange={onChange}
                ref={ref}
                value={value === true ? 'true' : 'false'}
                // isDisabled={isDisabled}
              >
                <Radio value={'true'} mr={6}>
                  {t('projects.questions.general.radioYes')}
                </Radio>
                <Radio value={'false'}>{t('projects.questions.general.radioNo')}</Radio>
              </RadioGroup>
            )}
          />
        </Flex>
        <VStack w="100%">
          <VStack alignItems="flex-start" w="100%">
            <Text variant={TextVariants.P14Semibold} color="gray.500">
              {t('projects.questions.details.bsfzProjectId')}
            </Text>
            <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
              <Input
                id="bsfzProjectId"
                {...register('bsfzProjectId', {
                  required: 'This is required',
                })}
                isReadOnly={isDisabled}
                variant={inputVariant}
              />
            </Box>
          </VStack>
        </VStack>
      </Flex>

      <Flex flexDirection="column" w="100%" pb={5}>
        <FormLabel>
          <Flex w="100%" mr={4}>
            <Text variant={TextVariants.P14Semibold} color="gray.500">
              {t('projects.questions.details.majorityHasUniversityDegrees')}
            </Text>
            <ToolTipIcon
              label={t('projects.questions.details.majorityHasUniversityDegreesTooltip')}
              iconProps={{ ml: 1 }}
            />
          </Flex>
        </FormLabel>
        <Controller
          control={control}
          name="majorityHasUniversityDegrees"
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

export default ProjectDetailsForm2
