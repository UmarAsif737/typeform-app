import { Box, Flex, HStack, Heading, SkeletonText, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import type { NextPage } from 'next'
import NextImage from 'next/image'
import { useTranslation } from 'next-i18next'
import { NextSeo } from 'next-seo'
import { useEffect, useState } from 'react'
// import PrimaryButton from 'components/button/PrimaryButton'
// import SecondaryButton from 'components/button/SecondaryButton'

const Questions: NextPage = () => {
  const textColor = useColorModeValue('gray.700', 'gray.300')

  const { t } = useTranslation()

  const [state, setState] = useState({
    currentQuestion: 0,
    questionnaireData: {},
    answers: {},
  })

  const goBack = () => {
    const { currentQuestion } = state
    setState({ ...state, currentQuestion: currentQuestion - 1 })
  }

  const goNext = () => {
    const { currentQuestion } = state
    setState({ ...state, currentQuestion: currentQuestion + 1 })
  }

  const currentQuestionKey = Object.keys(state.questionnaireData)[
    state.currentQuestion
  ] as keyof typeof state.questionnaireData

  const currentQuestionData = state.questionnaireData[currentQuestionKey]

  useEffect(() => {
    fetch('/question-data.json')
      .then((response) => response.json())
      .then((data) => {
        setState({ ...state, questionnaireData: data })
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <Flex flexDir="row" textAlign="left" justifyContent="center" w="full">
      <NextSeo title="Questions" />

      <Flex>
        <VStack flexDir="column" maxW="45vw">
          <Heading mb="6vh">{t('questions.clevel.introduction.heading')}</Heading>

          <Flex flexDir="column">
            {currentQuestionData ? (
              <Heading as="h2" size="lg">
                {currentQuestionData.title}
              </Heading>
            ) : (
              <SkeletonText noOfLines={2} spacing="4" skeletonHeight="5" maxW="40vw" />
            )}

            <Box mt="2vh" maxW="40vw" color={textColor} transition=".5s ease-out">
              {currentQuestionData ? (
                <Text fontSize="lg">{currentQuestionData.description}</Text>
              ) : (
                <SkeletonText noOfLines={2} spacing="4" skeletonHeight="5" maxW="40vw" />
              )}
            </Box>
          </Flex>

          <HStack mt="5vh" bottom={20} pos="absolute">
            {/* <SecondaryButton
              styles={{
                onClick: goBack,
                isDisabled: state.currentQuestion === 0,
              }}
            >
              Previous
            </SecondaryButton>

            <PrimaryButton
              styles={{
                onClick: goNext,
                isDisabled: state.currentQuestion === Object.keys(state.questionnaireData).length - 1,
              }}
            >
              Next
            </PrimaryButton> */}
          </HStack>
        </VStack>

        {currentQuestionData && currentQuestionData.image ? (
          <Box mt="30vh">
            <NextImage
              src={currentQuestionData.image}
              color="black"
              alt={currentQuestionKey}
              width={300}
              height={300}
            />
          </Box>
        ) : (
          <Box width={300} height={300} />
        )}
      </Flex>
    </Flex>
  )
}

export default Questions
