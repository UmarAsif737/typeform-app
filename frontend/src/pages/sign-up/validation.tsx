import { TFunction } from 'next-i18next'

export const passwordValidation = (t: TFunction) => {
  return {
    required: `${t('share.signUp.errorMessages.requiredPassword')}`,
    minLength: { value: 8, message: `${t('share.signUp.errorMessages.numberOfDigits')}` },
    validate: {
      number: (value: string) => /.*[0-9].*/.test(value) || `${t('share.signUp.errorMessages.atLeastOneNumber')}`,
      isUpperLower: (value: string) =>
        /(?=.*[a-z])(?=.*[A-Z])/.test(value) || `${t('share.signUp.errorMessages.upperLowerText')}`,
      checkSpecial: (value: string) =>
        /[\^$*.[\]{}()?\-"!@#%&/,><':;|_~`]+/.test(value) || `${t('share.signUp.errorMessages.specialCharacter')}`,
    },
  }
}

export const emailValidation = (t: TFunction) => {
  return {
    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(((?!gmail|yahoo|web.de|outlook|hotmail|aoliCloud).)*)$/,
    message: `${t('share.signUp.errorMessages.validEmail')}`,
  }
}
