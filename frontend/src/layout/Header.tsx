import { Box, Flex, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { HeadingVariants } from 'theme'

import Profile from '../components/navigation/Profile'

const Header = () => {
  const router = useRouter()

  let headingLabel

  if (router.pathname.includes('/questions')) headingLabel = 'Questions'
  else if (router.pathname.includes('/home')) headingLabel = 'Home'
  else if (router.pathname.includes('/company-details')) headingLabel = 'Company Details'
  else if (router.pathname === '/') headingLabel = 'Home'

  return (
    <Flex
      as="header"
      top="0"
      position="sticky"
      zIndex={100}
      width="full"
      align="center"
      gap={6}
      p="20px"
      px={45}
      borderBottomWidth="1px"
      bg="white"
    >
      <Heading as="h1" mr="auto" variant={HeadingVariants.Heading1} color="gray.400">
        {headingLabel}
      </Heading>
      <Box>
        <Profile />
      </Box>
    </Flex>
  )
}

export default Header
