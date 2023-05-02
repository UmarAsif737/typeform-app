import { Box, Button, Flex, Heading, Input, Spinner, VStack, Text, HStack } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { ButtonVariants, HeadingVariants, InputVariants, TextVariants } from 'theme'
import Separator from 'components/Separator'
import { createProject } from '../[projectId]/_api/createProject'
import useCustomToast from 'hooks/useCustomToast'
import { ToastStatus } from 'config/types'

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
  const { t } = useTranslation()
  const { data: session } = useSession()
  const { toast } = useCustomToast()

  const handleGoBack = () => {
    router.back()
  }

  const {
    getValues,
    register,
    formState: { isDirty },
    handleSubmit,
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
  })

  const formatData = async () => {
    const values = getValues()
    return {
      name: values.name,
      calculatedTaxCredit: Number(values.calculatedTaxCredit),
      user: {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
      },
    }
  }

  const onSubmit = async () => {
    const token = session?.user?.accessToken as string
    const formattedData = await formatData()

    try {
      await createProject(token, formattedData)
      router.push('/home')

      toast(
        ToastStatus.SUCCESS,
        t('projects.questions.create.success'),
        t('projects.questions.create.sucesfullyCreatingYourProject')
      )
    } catch (err) {
      toast(
        ToastStatus.ERROR,
        t('projects.questions.create'),
        t('projects.questions.create.errorWhileCreatingYourProject')
      )
    }
  }

  return (
    <Flex direction="column" justifyContent="flex-start" minHeight="70vh" w="100%">
      <NextSeo title="New Project" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDirection="row">
          <Heading variant={HeadingVariants.Heading4} color="gray.700" py={2.5} mt={8}>
            {t('projects.questions.details.heading')}
          </Heading>
        </Flex>
        <Separator mb={8} />
        {!session && <Spinner size="xl" color="primary.teal" />}

        <VStack alignItems="flex-start" w="100%" pb={7}>
          <Text variant={TextVariants.P14Semibold} color="gray.500">
            {t('projects.questions.details.name')}
          </Text>
          <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
            <Input
              id="name"
              {...register('name', {
                required: 'This is required',
              })}
              variant={InputVariants.WithBorder}
            />
          </Box>
        </VStack>

        <VStack alignItems="flex-start" w="100%" pb={7}>
          <Text variant={TextVariants.P14Semibold} color="gray.500">
            {t('projects.questions.details.calculatedTaxCredit')}
          </Text>
          <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
            <Input
              id="calculatedTaxCredit"
              {...register('calculatedTaxCredit', {
                required: 'This is required',
              })}
              variant={InputVariants.WithBorder}
            />
          </Box>
        </VStack>

        <Text variant={TextVariants.P16Semibold}>{t('projects.create.assignUser')}</Text>
        <HStack alignItems="flex-start" gap={5} w="100%">
          <VStack alignItems="flex-start" w="50%">
            <Text variant={TextVariants.P14Semibold} color="gray.500">
              {t('projects.create.firstName')}
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
              {t('projects.create.lastName')}
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
            {t('projects.create.userEmail')}
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
          <Button variant={ButtonVariants.Secondary} w="33.33%" onClick={handleGoBack}>
            {t('buttons.cancel')}
          </Button>
          <Button variant={ButtonVariants.Primary} mr="1rem" w="33.33%" type="submit" isDisabled={!isDirty}>
            {t('buttons.save')}
          </Button>
        </Flex>
      </form>
    </Flex>
  )
}
export default Page
