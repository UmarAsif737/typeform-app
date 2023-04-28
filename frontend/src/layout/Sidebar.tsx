import { Flex, Heading, VStack } from '@chakra-ui/react'
import { ButlerIcon } from 'components/Icons'
import { RiBuilding2Line, RiHome2Line } from 'react-icons/ri'

import SidebarLink from '../components/navigation/SidebarLink'

type Props = {
  companyName: string
}

export default function Sidebar({ companyName }: Props) {
  const navItems = {
    Home: { href: '/home', icon: RiHome2Line },
    'Company Details': { href: '/company-details', icon: RiBuilding2Line },
  }

  return (
    <Flex
      flexDir="column"
      w="23vw"
      left="0"
      top="0"
      bg="primary.green"
      color="white"
      fill="white"
      align="center"
      // position="fixed"
      h="100vh"
    >
      <ButlerIcon boxSize="10em" />
      <Heading as="h2" textAlign="center">
        {companyName}
      </Heading>

      <VStack justify="center" align="center" mt="15vh" w="full" gap={4}>
        {Object.keys(navItems).map((key) => (
          <SidebarLink
            key={key}
            href={navItems[key as keyof typeof navItems].href}
            label={key}
            icon={navItems[key as keyof typeof navItems].icon}
          />
        ))}
      </VStack>
    </Flex>
  )
}
