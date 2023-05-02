import { Flex, Heading, Image } from '@chakra-ui/react'
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
      <Image src={'/img/logo/logo.svg'} alt="InnoButler" transition="width .3s linear" mt={6} mb={10} ml={2.5} />
      <Heading as="h4" textAlign="center" color="white">
        {companyName}
      </Heading>

      {companyName ? (
        <Flex flexDir="column" alignItems="flex-start" mt="15vh" w="full">
          {Object.keys(navItems).map((key) => (
            <SidebarLink
              key={key}
              href={navItems[key as keyof typeof navItems].href}
              label={key}
              icon={navItems[key as keyof typeof navItems].icon}
            />
          ))}
        </Flex>
      ) : (
        <Heading as="h6" textAlign="center" color="white">
          Welcome to InnoButler
        </Heading>
      )}
    </Flex>
  )
}
