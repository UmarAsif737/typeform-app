import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import React from 'react'
import { HeadingVariants, TextVariants } from 'theme'

type SideBarProps = {
  pageTitle?: string
  children: React.ReactNode
}

const SignUpLayout = ({ pageTitle = 'InnoButler', children }: SideBarProps) => {
  const { t } = useTranslation()

  return (
    <Flex w="50%" bg="gray.50">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Flex
        flex="0 20rem"
        bg="primary.green"
        minH="100vh"
        h="auto"
        pt="4.5rem"
        pb="8"
        direction="column"
        position="relative"
        pl="3.3rem"
      >
        <Flex direction="column" w="12.3rem" alignItems="flex-start">
          <Image h="5" src="/img/logo/logoBig.svg" alt="logo" />

          <Heading variant={HeadingVariants.SharedPage} color="white" mt="20" mb="28" w="100%">
            {t('share.signUp.sideBar.title')}
          </Heading>

          <Box position="absolute" w="9.75rem" bottom="8">
            <Text variant={TextVariants.P12Standart} lineHeight="4" color="gray.50">
              {t('share.signUp.sideBar.footerTitle')}
            </Text>
            <Link href="" isExternal>
              <Text variant={TextVariants.P12Standart} lineHeight="4" color="gray.50">
                {t('share.signUp.sideBar.footerTextTerms')}
              </Text>
            </Link>
            <Text variant={TextVariants.P12Standart} lineHeight="4" color="gray.50">
              <Link href="" isExternal>
                {t('share.signUp.sideBar.footerTextPolicy')}
              </Link>

              <Link href="" isExternal ml="0.2rem">
                {t('share.signUp.sideBar.footerTextImprint')}
              </Link>
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Flex flex="1 auto" alignItems="center" justifyContent="center">
        {children}
      </Flex>
    </Flex>
  )
}

export default SignUpLayout
