import { Box, Flex } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import type { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { data: session } = useSession()
  const companyName = session?.user.companyName || ''

  return (
    <Box margin="0 auto" transition="0.5s ease-out" bg="white">
      <Flex flexDir="row">
        <Sidebar companyName={companyName} />

        <Flex flexDir="column" w="full">
          <Header />

          <Box as="main" margin={22}>
            {children}
          </Box>
        </Flex>
      </Flex>

      <Footer />
    </Box>
  )
}

export default Layout
