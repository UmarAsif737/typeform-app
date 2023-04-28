import { Box, Flex, Link, Text, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useTranslation } from 'next-i18next'
import { Fragment } from 'react'

const Footer = () => {
  const { t } = useTranslation()

  const footerLinks = [
    {
      key: 'termsAndConditions',
      text: t('share.footer.termsAndConditions'),
      href: '',
      isExternal: true,
    },
    {
      key: 'policy',
      text: t('share.footer.policy'),
      href: '',
      isExternal: true,
    },
    {
      key: 'imprint',
      text: t('share.footer.imprint'),
      href: '',
      isExternal: true,
    },
  ]

  const color = useColorModeValue('gray.600', 'gray.300')

  return (
    <Flex px="20px" alignItems="center" color={color}>
      <Link as={NextLink} passHref href="/" color={color}>
        {t('share.footer.logo')}
        {' -'} {new Date().getFullYear()}
      </Link>
      <Box h="3.5" w="px" bg={color} ml="1.5" mr="1.5" />
      {footerLinks.map(({ key, text, ...rest }, i) => (
        <Fragment key={key}>
          <Link key={`${key}-link`} {...rest}>
            <Text>{text}</Text>
          </Link>
          {i !== footerLinks.length - 1 && <Box h="3.5" w="px" bg={color} ml="1.5" mr="1.5" />}
        </Fragment>
      ))}
    </Flex>
  )
}

export default Footer
