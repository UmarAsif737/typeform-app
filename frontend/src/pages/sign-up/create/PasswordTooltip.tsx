import { Box, Flex, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { FieldError } from 'react-hook-form'

import { PasswordValidationIcon } from 'components/Icons'
import { TextVariants } from 'theme'

type PasswordTooltipProps = {
  errors?: FieldError
  value: string
}

export const PasswordTooltip = ({ errors, value }: PasswordTooltipProps) => {
  const { t } = useTranslation()
  const errorArray = errors?.types && Object.values(errors?.types)
  const array = [
    `${t('share.signUp.errorMessages.numberOfDigits')}`,
    `${t('share.signUp.errorMessages.atLeastOneNumber')}`,
    `${t('share.signUp.errorMessages.upperLowerText')}`,
    `${t('share.signUp.errorMessages.specialCharacter')}`,
  ]
  const hasValue = !!value

  return (
    <Box>
      <Text variant={TextVariants.P14Semibold} color="gray.50" mb="1">
        {t('share.signUp.errorMessages.passwordTooltipText')}
      </Text>
      <Box>
        {array.map((item, i) => {
          const errorItem = errorArray?.includes(item)

          return (
            <Flex key={i} alignItems="center">
              <PasswordValidationIcon color={!errorItem && hasValue ? 'success' : 'gray.300'} w="5" mr="-1" ml="-4" />
              <Text variant={TextVariants.P12Standart} color={!errorItem && hasValue ? 'success' : 'gray.300'}>
                {item}
              </Text>
            </Flex>
          )
        })}
      </Box>
    </Box>
  )
}
