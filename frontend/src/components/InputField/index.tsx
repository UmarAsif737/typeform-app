import {
  BoxProps,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputGroupProps,
  InputProps,
  Text,
  TextProps,
} from '@chakra-ui/react'
import React from 'react'
import { Control, FieldError, Path, RegisterOptions, UseFormRegister } from 'react-hook-form'
import { InputVariants, TextVariants } from 'theme'

import { ToolTipIcon } from 'components/Tooltip'

export type FormInputProps<TFormValues> = InputProps & {
  name?: Path<TFormValues>
  rules?: RegisterOptions
  register?: UseFormRegister<TFormValues>
  control?: Control<TFormValues>
  error?: FieldError
  value?: string | number | boolean
  hideErrorMessage?: boolean
  inputElement?: React.ReactNode
  label?: string
  tooltipLabel?: string
  containerProps?: BoxProps
  labelProps?: TextProps
  inputGroupProps?: InputGroupProps
  lowСharacter?: string
  variant?: string
  filledVariant?: string
  enabledVariant?: string
  disabled?: boolean
  useValueProp?: boolean
  CustomIcon?: any
}

export const InputField = <TFormValues extends Record<string, unknown>>({
  name,
  register,
  rules,
  error,
  hideErrorMessage,
  inputElement,
  label,
  tooltipLabel,
  containerProps,
  labelProps,
  inputGroupProps,
  lowСharacter,
  CustomIcon,
  filledVariant = InputVariants.LoginFilled,
  enabledVariant = InputVariants.LoginEnabled,
  variant,
  value,
  useValueProp = false,
  ...props
}: FormInputProps<TFormValues> & InputProps): JSX.Element => {
  const handleInputVariant = (
    inputValue: ((string | number | boolean) & (string | number | readonly string[])) | undefined
  ) => {
    return inputValue ? filledVariant : enabledVariant
  }

  const Label = () => {
    const index = label?.indexOf(lowСharacter ?? '')
    return (
      <Text variant={TextVariants.P14Semibold} color="gray.500" mb={2.5} whiteSpace="nowrap" {...labelProps}>
        {lowСharacter && index !== -1 ? (
          <>
            {label?.slice(0, index)}
            <Text as="span" fontSize="0.6rem" position="relative" top="3px">
              {lowСharacter}
            </Text>
            {label?.slice((index as number) + 1)}
          </>
        ) : (
          label
        )}
      </Text>
    )
  }

  const preventChangeNumberOnScroll = (event: React.MouseEvent<HTMLElement>) => event.currentTarget.blur()

  if (useValueProp) {
    ;(props as FormInputProps<TFormValues>).value = value
  }

  const hasError = !!error?.message && !hideErrorMessage

  return (
    <FormControl w="100%" isInvalid={hasError} {...containerProps}>
      {label && (
        <FormLabel display="flex" m={0}>
          <Label />
          {tooltipLabel && <ToolTipIcon label={tooltipLabel} CustomIcon={CustomIcon} iconProps={{ ml: 2 }} />}
        </FormLabel>
      )}
      <InputGroup {...inputGroupProps}>
        <Input
          name={name}
          variant={error?.message ? InputVariants.LoginError : variant || handleInputVariant(value)}
          {...props}
          {...(register && name && register(name, rules))}
          onWheel={preventChangeNumberOnScroll}
        />
        {inputElement}
      </InputGroup>
      {hasError && (
        <FormErrorMessage mt="1">
          <Text color="red.400" fontSize="11px" lineHeight="1.25rem">
            {error.message}
          </Text>
        </FormErrorMessage>
      )}
    </FormControl>
  )
}
