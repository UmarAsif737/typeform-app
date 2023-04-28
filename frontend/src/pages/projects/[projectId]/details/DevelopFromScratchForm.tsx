import { VStack, Text, Flex, FormLabel, Radio, RadioGroup } from '@chakra-ui/react'
import { ToolTipIcon } from 'components/Tooltip'
import { Control, Controller, FieldValues } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { TextVariants } from 'theme'

type Props = {
  isDisabled: boolean
  isCreated: boolean
  control: Control<FieldValues, any>
}

//status === ECOSYSTEM_FILLED_OUT
const DevelopFromScratchForm = ({ isDisabled, isCreated = false, control }: Props) => {
  const { t } = useTranslation()

  return (
    <VStack alignItems="flex-start" w="100%">
      <Flex flexDirection="column" w="100%" mb={5}>
        <FormLabel>
          <Flex w="100%" mr={4}>
            <Text variant={TextVariants.P14Semibold} color="gray.500">
              {t('projects.questions.details.majorityIsDevelopedFromScratch')}
            </Text>
            <ToolTipIcon
              label={t('projects.questions.details.majorityIsDevelopedFromScratchTooltip')}
              iconProps={{ ml: 1 }}
            />
          </Flex>
        </FormLabel>
        <Controller
          control={control}
          name="majorityIsDevelopedFromScratch"
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

export default DevelopFromScratchForm
