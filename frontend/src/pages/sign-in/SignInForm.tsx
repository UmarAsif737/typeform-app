import { Box, Button, Input, InputGroup, Text, useToast } from '@chakra-ui/react'
import { Trans, useTranslation } from 'next-i18next'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ToastStatus } from 'config/types'
import { emailValidation } from 'pages/sign-up/validation'
import CustomLink from 'components/CustomLink'
import PasswordInputEye from 'components/InputField/PasswordInputEye'
import { InputVariants, TextVariants, ButtonVariants } from 'theme'
import { signIn } from 'next-auth/react'

import Toast from 'components/Toast'
import { useRouter } from 'next/router'

type SubmitData = {
  email: string
  password: string
}

const SignInForm = () => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [, setIsTooltipOpened] = useState(false)
  const [isSubmitClicked, setIsSubmitClicked] = useState<boolean>(false)
  const [showPass, setShowPass] = useState(false)
  const toast = useToast()
  const router = useRouter()

  const { control, handleSubmit, getFieldState } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
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
    const { email, password } = data

    try {
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
      }
    } catch (error) {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box h="24" mt="48px">
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
                placeholder={t('share.signUp.emailPlaceholder')}
                variant={error && isSubmitClicked ? InputVariants.LoginError : handleInputVariant(value)}
                onChange={onChange}
                ref={ref}
                value={value}
              />
              {error && isSubmitClicked && (
                <Text color="red.400" fontSize="11px">
                  {error.message}
                </Text>
              )}
            </>
          )}
        />
      </Box>

      <Box h="24" mb="0">
        <Text mb="1" variant={TextVariants.P14Semibold}>
          {t('share.signUp.passwordLabel')}
        </Text>

        <Controller
          control={control}
          name="password"
          rules={{
            required: `${t('share.signUp.errorMessages.requiredPassword')}`,
          }}
          render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
            <>
              <InputGroup onBlur={() => setIsTooltipOpened(false)} onFocus={() => setIsTooltipOpened(true)}>
                <Input
                  placeholder={t('share.signUp.passwordPlaceholder')}
                  variant={error && isSubmitClicked ? InputVariants.LoginError : handleInputVariant(value)}
                  type={showPass ? 'text' : 'password'}
                  onChange={onChange}
                  ref={ref}
                  value={value}
                />
                <PasswordInputEye
                  showPass={showPass}
                  isDirty={passwordFieldState.isDirty}
                  handleShowPass={handleShowPass}
                />
              </InputGroup>
              {error && isSubmitClicked && (
                <Text color="red.400" fontSize="11px">
                  {error.message}
                </Text>
              )}
            </>
          )}
        />
      </Box>

      <Button
        variant={ButtonVariants.Primary}
        type="submit"
        w="100%"
        isLoading={isLoading}
        onClick={() => setIsSubmitClicked(true)}
        mt="32px"
      >
        <Text variant={TextVariants.P16Standart} color="currentcolor">
          {t('share.signIn.loginButton')}
        </Text>
      </Button>

      <Text variant={TextVariants.P14Standart} mr="1" mt="8">
        <Trans i18nKey="share.signIn.signUpNow">
          Don&apos;t have an accout?
          <CustomLink href="/sign-up/create" textDecoration="underline">
            Sign up now
          </CustomLink>
        </Trans>
      </Text>
    </form>
  )
}

export default SignInForm
