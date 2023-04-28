import { Box, Flex } from '@chakra-ui/react'

const CustomDivider = () => {
  return (
    <Flex>
      <Box w="4.85rem" height="1" bg="gray.800" />
      <Box w="100%" h="px" bg="gray.800" mt="2px" />
    </Flex>
  )
}

export default CustomDivider