import { Button, InputRightElement } from '@chakra-ui/react'

import { EyeView, EyeViewOff } from 'components/Icons'
import { ButtonVariants } from 'theme'

type PasswordInputEyeType = {
  showPass: boolean
  isDirty: boolean
  handleShowPass: (event: React.MouseEvent) => void
}

const PasswordInputEye = ({ showPass, isDirty, handleShowPass }: PasswordInputEyeType) => {
  return (
    <InputRightElement>
      <Button variant={ButtonVariants.Transparent} mt="1" onClick={handleShowPass}>
        {showPass ? (
          <EyeViewOff color={isDirty ? 'gray.800' : 'gray.300'} />
        ) : (
          <EyeView color={isDirty ? 'gray.800' : 'gray.300'} />
        )}
      </Button>
    </InputRightElement>
  )
}

export default PasswordInputEye
