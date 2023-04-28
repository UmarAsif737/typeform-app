import { VStack, FormControl, Text, Box, HStack, Input } from '@chakra-ui/react'
import { Select } from 'chakra-react-select'
import CustomDatePicker from 'components/DatePicker'
import { Control, Controller, FieldValues, useController, UseFormRegister } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { TextVariants } from 'theme'

type Props = {
  isDisabled: boolean
  isCreated: boolean
  inputVariant: string
  control: Control<FieldValues, any>
  register: UseFormRegister<FieldValues>
}

//status === STARTED
const ProjectDetailsForm1 = ({ isDisabled, isCreated = false, inputVariant, control, register }: Props) => {
  const { t } = useTranslation()

  const {
    field: { onChange: onChangeStartDate, value: startDate },
  } = useController({
    name: 'startOfPeriod',
    control,
  })

  const {
    field: { onChange: onChangeEndDate, value: endDate },
  } = useController({
    name: 'endOfPeriod',
    control,
  })

  const projectTypes = [
    {
      label: t('projects.questions.details.types.fundamentalResearch'),
      value: 'Fundamental Research',
    },
    {
      label: t('projects.questions.details.types.industrialResearch'),
      value: 'Industrial Research',
    },
    {
      label: t('projects.questions.details.types.experimentalDevelopment'),
      value: 'Experimental Development',
    },
    {
      label: t('projects.questions.details.types.marketDevelopment'),
      value: 'Market development/research',
    },
    {
      label: t('projects.questions.details.types.improvementOfProduction'),
      value: 'Improvement of production system/ refresh of a product cylce',
    },
    {
      label: t('projects.questions.details.types.productDevelopment'),
      value: 'Product Development with new qualities/ materials/ mechanics',
    },
  ]

  return (
    <VStack alignItems="flex-start" w="100%">
      {!isCreated && (
        <HStack alignItems="flex-start" w="100%" mb={5}>
          <VStack alignItems="flex-start" w="100%">
            <Text variant={TextVariants.P14Semibold} color="gray.500">
              {t('projects.questions.details.name')}
            </Text>
            <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
              <Input
                id="name"
                placeholder={t('projects.questions.details.namePlaceholder')}
                {...register('name', {
                  required: 'This is required',
                })}
                isReadOnly={isDisabled}
                variant={inputVariant}
              />
            </Box>
          </VStack>
        </HStack>
      )}

      <VStack alignItems="flex-start" w="100%">
        <Text variant={TextVariants.P14Semibold} color="gray.500">
          {t('projects.questions.details.periodIndication')}
        </Text>
        <HStack alignItems="flex-start" w="100%">
          <VStack alignItems="flex-start" w="100%">
            <Text variant={TextVariants.P14Semibold} color="gray.500">
              {t('projects.questions.details.startOfPeriod')}
            </Text>
            <CustomDatePicker
              date={startDate ? new Date(startDate) : undefined}
              setDate={onChangeStartDate}
              isDisabled={isDisabled}
            />
          </VStack>
          <VStack alignItems="flex-start" w="100%">
            <Text variant={TextVariants.P14Semibold} color="gray.500">
              {t('projects.questions.details.endOfPeriod')}
            </Text>
            <CustomDatePicker
              date={endDate ? new Date(endDate) : undefined}
              setDate={onChangeEndDate}
              isDisabled={isDisabled}
            />
          </VStack>
        </HStack>
      </VStack>

      <VStack alignItems="flex-start" w="100%" pt={5}>
        <Text variant={TextVariants.P14Semibold} color="gray.500">
          {t('projects.questions.details.type')}
        </Text>
        {isDisabled ? (
          <Input id="type" isReadOnly={isDisabled} variant={inputVariant} />
        ) : (
          <Controller
            control={control}
            name="type"
            rules={{ required: 'Please select one project type' }}
            render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => (
              <FormControl py={4} isInvalid={!!error} id="type">
                <Select
                  colorScheme="white"
                  name={name}
                  ref={ref}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  options={projectTypes}
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

export default ProjectDetailsForm1
