import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { QuestionInCircleIcon } from 'components/Icons'
import router from 'next/router'
import { useTranslation } from 'react-i18next'
import { ButtonVariants, HeadingVariants, TextVariants } from 'theme'

type Props = {
  goNext: (value: any) => void
}

export const Introduction = ({ goNext }: Props) => {
  const { t } = useTranslation()

  return (
    <Box>
      <Flex mt="4rem">
        <Flex w="50%" flexDirection="column">
          <Heading variant={HeadingVariants.Heading2}>{t('questions.clevel.introduction.title')}</Heading>
          <Text variant={TextVariants.P16Semibold}>{t('questions.clevel.introduction.description')}</Text>
        </Flex>
        <Flex w="50%" alignItems="center" justifyContent="center">
          <QuestionInCircleIcon />
        </Flex>
      </Flex>
      <Flex justifyContent="space-between" w="50%" mt={10}>
        <Button variant={ButtonVariants.Secondary} size="md" w="10.5rem" onClick={router.back}>
          {t('questions.clevel.introduction.buttons.cancel')}
        </Button>
        <Button variant={ButtonVariants.Primary} size="md" w="10.5rem" onClick={() => goNext({ step: 2 })}>
          {t('questions.clevel.introduction.buttons.next')}
        </Button>
      </Flex>
    </Box>
  )
}
