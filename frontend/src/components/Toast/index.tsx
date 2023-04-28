import { Box, Flex, Text } from '@chakra-ui/react'

import { ToastStatus } from 'config/types'

import { CloseIcon, ToastErrorIcon, ToastSuccessIcon, ToastWarningIcon } from 'components/Icons'
import { TextVariants } from 'theme'

type ToastProps = {
  title: string
  description: string
  status: ToastStatus
  onClose: () => void
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case ToastStatus.SUCCESS:
      return <ToastSuccessIcon color={status} />
    case ToastStatus.WARNING:
      return <ToastWarningIcon color={status} />
    case ToastStatus.ERROR:
      return <ToastErrorIcon color={status} />
    default:
      break
  }
}

const Toast = ({ title, description, status, onClose }: ToastProps) => {
  return (
    <Flex
      bg="gray.800"
      w="79"
      pt="3"
      pb="3"
      pr="4"
      borderTopRightRadius="0.5rem"
      borderBottomRightRadius="0.5rem"
      position="relative"
      border="none"
      h="5.6rem"
    >
      <Box
        bg={status}
        w="0.3rem"
        position="absolute"
        top="0"
        left="-1"
        h="100%"
        borderTopLeftRadius="1.5rem"
        borderBottomLeftRadius="1.5rem"
      />
      <Flex justifyContent="space-evenly">
        <Box ml="4" mr="4">
          {getStatusIcon(status)}
        </Box>
        <Box w="48">
          <Text variant={TextVariants.P14Semibold} lineHeight="17px" color="gray.50" mb="1">
            {title}
          </Text>
          <Text variant={TextVariants.P12Standart} lineHeight="17px" color="gray.50">
            {description}
          </Text>
        </Box>
        <Box width="6" height="6" as="button" ml="7" display="flex" onClick={onClose}>
          <CloseIcon color="gray.50" width="6" height="6" />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Toast
