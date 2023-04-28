import { HStack, Icon, Text, Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import { TextVariants } from 'theme'

type SidebarLinkProps = {
  icon: any
  label: string
  href: string
}

export default function SidebarLink({ icon, label, href }: SidebarLinkProps) {
  return (
    <Button
      as={NextLink}
      passHref
      href={href}
      colorScheme="white"
      variant="ghost"
      rounded="lg"
      color="text.dark"
      w="full"
    >
      <HStack justify="center" align="center">
        <Icon as={icon} boxSize="25px" />
        <Text variant={TextVariants.P16Standart} color="white">
          {label}
        </Text>
      </HStack>
    </Button>
  )
}
