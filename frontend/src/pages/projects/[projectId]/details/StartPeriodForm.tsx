import { VStack, FormControl, Text, Input } from '@chakra-ui/react'
import { ChakraStylesConfig, Select } from 'chakra-react-select'
import { Control, Controller, FieldValues } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { InputVariants, TextVariants } from 'theme'
import { SelectStyles, SelectVariants } from 'theme/additions/select'

type Props = {
  isDisabled: boolean
  isCreated: boolean
  control: Control<FieldValues, any>
}

//status === NOT_STARTED
const StartPeriodForm = ({ isDisabled, isCreated = false, control }: Props) => {
  const { t } = useTranslation()

  const styles = SelectStyles.components.Select.variants[SelectVariants.Primary]() as ChakraStylesConfig

  const projectStartPeriods = [
    {
      label: t('projects.questions.details.startPeriods.beforeJan20'),
      value: "before January '20",
    },
    {
      label: t('projects.questions.details.startPeriods.afterJan20'),
      value: "after January '20",
    },
    {
      label: t('projects.questions.details.startPeriods.afterJuly20'),
      value: "after July 30th '20",
    },
  ]

  return (
    <VStack alignItems="flex-start" w="100%">
      <Text variant={TextVariants.P14Semibold} color="gray.500">
        {t('projects.questions.details.startOfProject')}
      </Text>
      {isDisabled ? (
        <Input id="startOfProject" isReadOnly={isDisabled} variant={InputVariants.ReadOnly} />
      ) : (
        <Controller
          control={control}
          name="startOfProject"
          rules={{ required: 'Please select a period for your project-start' }}
          render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => (
            <FormControl py={4} isInvalid={!!error} id="food">
              <Select
                chakraStyles={styles}
                colorScheme="purple"
                name={name}
                ref={ref}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                options={projectStartPeriods}
                closeMenuOnSelect={true}
                isDisabled={isDisabled}
              />
            </FormControl>
          )}
        />
      )}
    </VStack>
  )
}

export default StartPeriodForm
