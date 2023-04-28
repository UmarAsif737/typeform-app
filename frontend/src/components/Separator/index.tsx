import { Box, Flex, FlexProps, useStyleConfig } from '@chakra-ui/react'

type SeparatorProps = FlexProps & {
  variant?: string
}

const Separator = ({ variant, ...props }: SeparatorProps) => {
  const styles = useStyleConfig('Separator', { variant })
  return (
    <Flex alignItems="center" {...props}>
      <Box __css={styles} />
      <Box w="calc(100% - 4.8125rem)" h="1px" bg="gray.700" />
    </Flex>
  )
}

export default Separator
