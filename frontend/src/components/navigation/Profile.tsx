import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Center, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { Logout } from 'components/Icons'
import { useSession } from 'next-auth/react'
import { useTranslation } from 'react-i18next'
import { TextVariants } from 'theme'
import { useRouter } from 'next/router'

export default function Profile() {
  const { data: session } = useSession()
  const router = useRouter()
  const user = session?.user
  const { t } = useTranslation()

  const logout = () => {
    localStorage.clear()
    router.push('/sign-in')
    // signOut({
    //   callbackUrl: `/sign-in/create`,
    // })
  }

  return (
    <Menu>
      <MenuButton as={Button} colorScheme="gray" rounded="lg" bg="none">
        <Center gap={2}>
          <Text variant={TextVariants.P14Semibold} color="gray.600" ml={2}>
            {user?.firstName || t('share.header.defaultName')}
          </Text>

          <ChevronDownIcon boxSize="19px" color="gray.500" />
        </Center>
      </MenuButton>

      <MenuList bg="white">
        <MenuItem color="gray.500" icon={<Logout />} as={Button} onClick={logout}>
          {t('share.header.signOut')}
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
