import { Box, Button, Checkbox, Flex, HStack, Input, InputGroup, Text, VStack, useToast } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { FC, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { removeSpacesFromInputField } from 'lib/helper'
import { ToastStatus } from 'config/types'
import CustomLink from 'components/CustomLink'
import PasswordInputEye from 'components/InputField/PasswordInputEye'
import Toast from 'components/Toast'
import { MultilineToolTipIcon } from 'components/Tooltip'
import { emailValidation, passwordValidation } from '../validation'
import { PasswordTooltip } from './PasswordTooltip'
import { InputVariants, TextVariants, ButtonVariants } from 'theme'
import { createAccount } from '../_api/createAccount'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

type SubmitData = {
  checkbox?: boolean
  email: string
  password: string
  firstName: string
  lastName: string
  companyName: string
}

const CreateForm: FC = () => {
  const { t } = useTranslation()
  const toast = useToast()
  const router = useRouter()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isTooltipOpened, setIsTooltipOpened] = useState(false)
  const [isSubmitClicked, setIsSubmitClicked] = useState<boolean>(false)
  const [showPass, setShowPass] = useState(false)

  const {
    control,
    formState: { errors },
    handleSubmit,
    getFieldState,
    getValues,
    setValue,
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
    defaultValues: {
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      companyName: '',
    },
  })
  const passwordFieldState = getFieldState('password')

  const handleShowPass = (event: React.MouseEvent) => {
    event.preventDefault()
    setShowPass(!showPass)
  }

  const handleInputVariant = (inputValue: string) => {
    return inputValue ? InputVariants.LoginFilled : InputVariants.LoginEnabled
  }

  const onSubmit = async (data: SubmitData) => {
    setIsLoading(true)
    const { email, password, firstName, lastName, companyName } = data

    try {
      await createAccount({ email, password, firstName, lastName, companyName })
      const res = await signIn('credentials', { email, password, redirect: false })

      if (res?.error) {
        setIsLoading(false)

        toast({
          position: 'top-right',
          render: ({ onClose }) => (
            <Toast
              status={ToastStatus.ERROR}
              title={t('share.signIn.errorMessages.loginErrorTitle')}
              description={
                res.error === t('share.signIn.errorMessages.apiLoginCredentialsError')
                  ? t('share.signIn.errorMessages.loginCredentialsError')
                  : res?.error || 'Error'
              }
              onClose={onClose}
            />
          ),
        })
      } else {
        router.push('/')
      }
    } catch (error) {
      setIsLoading(false)
      const resError = error

      toast({
        position: 'top-right',
        render: ({ onClose }) => (
          <Toast status={ToastStatus.ERROR} title="Error!" description={resError.message} onClose={onClose} />
        ),
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HStack mt="48px" alignItems="flex-start" gap={5} w="100%">
        <VStack alignItems="flex-start" w="50%">
          <Text mb="1" variant={TextVariants.P14Semibold}>
            {t('share.signUp.firstName')}
          </Text>

          <Controller
            control={control}
            name="firstName"
            rules={{
              required: `${t('share.signUp.errorMessages.firstName')}`,
            }}
            render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
              <>
                <Input
                  variant={error?.message && isSubmitClicked ? InputVariants.LoginError : handleInputVariant(value)}
                  onChange={onChange}
                  ref={ref}
                  value={value}
                  {...removeSpacesFromInputField('firstName', setValue, getValues)}
                />
                {error && isSubmitClicked && <Text variant={TextVariants.Error}>{error.message}</Text>}
              </>
            )}
          />
        </VStack>

        <VStack alignItems="flex-start" w="50%">
          <Text mb="1" variant={TextVariants.P14Semibold}>
            {t('share.signUp.lastName')}
          </Text>

          <Controller
            control={control}
            name="lastName"
            rules={{
              required: `${t('share.signUp.errorMessages.lastName')}`,
            }}
            render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
              <>
                <Input
                  variant={error?.message && isSubmitClicked ? InputVariants.LoginError : handleInputVariant(value)}
                  onChange={onChange}
                  ref={ref}
                  value={value}
                  {...removeSpacesFromInputField('lastName', setValue, getValues)}
                />
                {error && isSubmitClicked && <Text variant={TextVariants.Error}>{error.message}</Text>}
              </>
            )}
          />
        </VStack>
      </HStack>

      <VStack alignItems="flex-start" w="100%" mt={5}>
        <Text mb="1" variant={TextVariants.P14Semibold}>
          {t('share.signUp.companyName')}
        </Text>

        <Controller
          control={control}
          name="companyName"
          rules={{
            required: `${t('share.signUp.errorMessages.companyName')}`,
          }}
          render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
            <>
              <Input
                variant={error?.message && isSubmitClicked ? InputVariants.LoginError : handleInputVariant(value)}
                onChange={onChange}
                ref={ref}
                value={value}
                {...removeSpacesFromInputField('companyName', setValue, getValues)}
              />
              {error && isSubmitClicked && <Text variant={TextVariants.Error}>{error.message}</Text>}
            </>
          )}
        />
      </VStack>

      <VStack alignItems="flex-start" w="100%" mt={5}>
        <Text mb="1" variant={TextVariants.P14Semibold}>
          {t('share.signUp.emailLabel')}
        </Text>

        <Controller
          control={control}
          name="email"
          rules={{
            required: `${t('share.signUp.errorMessages.requiredEmail')}`,
            pattern: emailValidation(t),
          }}
          render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
            <>
              <Input
                variant={error?.message && isSubmitClicked ? InputVariants.LoginError : handleInputVariant(value)}
                onChange={onChange}
                ref={ref}
                value={value}
                {...removeSpacesFromInputField('email', setValue, getValues)}
              />
              {error && isSubmitClicked && <Text variant={TextVariants.Error}>{error.message}</Text>}
            </>
          )}
        />
      </VStack>

      <Controller
        control={control}
        name="password"
        // rules={passwordValidation(t)}
        render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
          <MultilineToolTipIcon
            label={<PasswordTooltip errors={errors.password} value={value} />}
            placement="right"
            isOpen={isTooltipOpened}
          >
            <Box h="24" mb="3" mt={5}>
              <Text mb="1" variant={TextVariants.P14Semibold}>
                {t('share.signUp.passwordLabel')}
              </Text>
              <InputGroup onBlur={() => setIsTooltipOpened(false)} onFocus={() => setIsTooltipOpened(true)}>
                <Input
                  variant={error?.message && isSubmitClicked ? InputVariants.LoginError : handleInputVariant(value)}
                  type={showPass ? 'text' : 'password'}
                  onChange={onChange}
                  ref={ref}
                  defaultValue={value}
                  {...removeSpacesFromInputField('password', setValue, getValues)}
                />

                <PasswordInputEye
                  showPass={showPass}
                  isDirty={passwordFieldState.isDirty}
                  handleShowPass={handleShowPass}
                />
              </InputGroup>
              {error && isSubmitClicked && (
                <Text variant={TextVariants.Error}>{t('share.signUp.errorMessages.validPassword')}</Text>
              )}
            </Box>
          </MultilineToolTipIcon>
        )}
      />

      <Box mb={4}>
        <Controller
          control={control}
          name="checkbox"
          rules={{ required: `${t('share.signUp.errorMessages.confirm')}` }}
          render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
            <>
              <Flex>
                <Checkbox onChange={onChange} ref={ref} isChecked={value} mr="0.375rem" color="gray.700" />
                <Text variant={TextVariants.P14Standart} mr="1">
                  {t('share.signUp.checkboxText')}{' '}
                  <CustomLink textDecoration="underline" fontWeight="600" href="" isExternal>
                    {t('share.signUp.conditionsLink')}
                  </CustomLink>
                </Text>
              </Flex>
              {error && isSubmitClicked && <Text variant={TextVariants.Error}>{error.message}</Text>}
            </>
          )}
        />
      </Box>

      <Button
        variant={ButtonVariants.Primary}
        isLoading={isLoading}
        type="submit"
        w="100%"
        onClick={() => setIsSubmitClicked(true)}
      >
        {t('share.signUp.signUpButton')}
      </Button>

      <Text variant={TextVariants.P14Standart} mr="1" mt="8">
        {t('share.signUp.haveAccountText')}{' '}
        <CustomLink href="/sign-in" textDecoration="underline" fontWeight="600">
          {t('share.signUp.loginLink')}
        </CustomLink>
      </Text>
    </form>
  )
}

export default CreateForm
