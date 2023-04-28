import { Box, Button, Flex, HStack, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { ToastStatus } from 'config/types'
import useCustomToast from 'hooks/useCustomToast'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { ButtonVariants, HeadingVariants, InputVariants, TextVariants } from 'theme'
import { assignInternalTaxCounsellor } from './_api/assignInternalTaxCounsellor'
import { UserRole } from 'types/user'

type Props = {
  refresh: () => void
}

const AssignTaxCounsellor = ({ refresh }: Props) => {
  const { t } = useTranslation()
  const { data: session } = useSession()
  const { toast } = useCustomToast()

  const formatData = async () => {
    const values = getValues()
    return {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      role: UserRole.TAX_COUNSELLOR,
    }
  }

  const onSubmit = async () => {
    const token = session?.accessToken as string
    const formattedData = await formatData()

    try {
      assignInternalTaxCounsellor(token, Number(session?.user.companyId), formattedData)
      refresh()

      toast(
        ToastStatus.SUCCESS,
        t('dashboard.assignTaxCounsellor.success'),
        t('dashboard.assignTaxCounsellor.successfullyAssignedTaxCounsellor')
      )
    } catch (err) {
      toast(
        ToastStatus.ERROR,
        t('dashboard.assignTaxCounsellor.error'),
        t('dashboard.assignTaxCounsellor.errorWhileAssigningTaxCounsellor')
      )
    }
  }

  const {
    getValues,
    register,
    handleSubmit,
    formState: { isDirty },
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
  })

  return (
    <Flex direction="column" justifyContent="center" minHeight="70vh" gap={4} mb={8} w="full">
      <Heading variant={HeadingVariants.Heading2} mb={5}>
        {t('dashboard.assignTaxCounsellor.title')}
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack alignItems="flex-start" gap={5} w="100%">
          <VStack alignItems="flex-start" w="50%">
            <Text variant={TextVariants.P14Semibold} color="gray.500">
              {t('dashboard.assignTaxCounsellor.firstName')}
            </Text>
            <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
              <Input
                id="firstName"
                {...register('firstName', {
                  required: 'This is required',
                })}
                variant={InputVariants.WithBorder}
              />
            </Box>
          </VStack>
          <VStack alignItems="flex-start" w="50%">
            <Text variant={TextVariants.P14Semibold} color="gray.500">
              {t('dashboard.assignTaxCounsellor.lastName')}
            </Text>
            <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
              <Input
                id="lastName"
                {...register('lastName', {
                  required: 'This is required',
                })}
                variant={InputVariants.WithBorder}
              />
            </Box>
          </VStack>
        </HStack>

        <VStack alignItems="flex-start" w="100%" pt={4}>
          <Text variant={TextVariants.P14Semibold} color="gray.500">
            {t('dashboard.assignTaxCounsellor.email')}
          </Text>
          <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
            <Input
              id="email"
              {...register('email', {
                required: 'This is required',
              })}
              variant={InputVariants.WithBorder}
            />
          </Box>
        </VStack>

        <Flex justifyContent="space-between" mt={20} mb="10rem">
          <Button variant={ButtonVariants.Primary} mr="1rem" w="33.33%" type="submit" isDisabled={!isDirty}>
            {t('buttons.save')}
          </Button>
        </Flex>
      </form>
    </Flex>
  )
}

export default AssignTaxCounsellor
