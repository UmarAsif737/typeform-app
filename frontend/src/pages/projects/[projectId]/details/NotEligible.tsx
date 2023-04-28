import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { HeadingVariants, TextVariants } from 'theme'

const NotEligible = () => {
  const { t } = useTranslation()

  return (
    <Flex direction="column" justifyContent="center" minHeight="70vh" gap={4} mb={8} w="full">
      <Box>
        <Heading variant={HeadingVariants.Heading2} mb={5}>
          {t('projects.questions.notEligble')}
        </Heading>
        <Text variant={TextVariants.P16Standart}>{t('projects.questions.notEligibleNewsletter')}</Text>
      </Box>
    </Flex>
  )
}

export default NotEligible
