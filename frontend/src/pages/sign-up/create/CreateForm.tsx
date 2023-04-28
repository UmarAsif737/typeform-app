import { Box, Button, Checkbox, Flex, Input, InputGroup, Text, useToast } from '@chakra-ui/react'
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

type SubmitData = {
  checkbox?: boolean
  email: string
  password: string
}

type CreateType = {
  invitationDetails?: {
    email: string
    id: string
    status: string
    type: string
  }
}

type sendingType = {
  email?: string
  password: string
  userType?: string
  userInvitationId?: string
}

const CreateForm: FC<CreateType> = ({ invitationDetails }) => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isTooltipOpened, setIsTooltipOpened] = useState(false)
  const [isSubmitClicked, setIsSubmitClicked] = useState<boolean>(false)
  const [showPass, setShowPass] = useState(false)
  const toast = useToast()

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
      email: invitationDetails?.email,
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
    const { email, password } = data

    try {
      //   await createAccount(data)
      console.log(email)
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
      <Box h="24" mb="3">
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
                variant={error?.message && isSubmitClicked ? InputVariants.LoginError : handleInputVariant(value)}
                onChange={onChange}
                disabled={!!invitationDetails?.email}
                ref={ref}
                value={value}
                {...removeSpacesFromInputField('email', setValue, getValues)}
              />
              {error && isSubmitClicked && <Text variant={TextVariants.Error}>{error.message}</Text>}
            </>
          )}
        />
      </Box>

      <Controller
        control={control}
        name="password"
        rules={passwordValidation(t)}
        render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
          <MultilineToolTipIcon
            label={<PasswordTooltip errors={errors.password} value={value} />}
            placement="right"
            isOpen={isTooltipOpened}
          >
            <Box h="24" mb="3">
              <Text mb="1" variant={TextVariants.P14Semibold}>
                {t('share.signUp.passwordLabel')}
              </Text>
              <InputGroup onBlur={() => setIsTooltipOpened(false)} onFocus={() => setIsTooltipOpened(true)}>
                <Input
                  placeholder={t('share.signUp.passwordPlaceholder')}
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
