import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import PersonalFrameworkInput from './PersonalFrameworkInput'

type Props = {
  state: any
  setState: any
}

export default function PersonalFrameworkForm({ state, setState }: Props) {
  const { t } = useTranslation()

  const [personalFrameworkState, setPersonalFrameworkState] = useState({
    [nanoid()]: {
      year: 0,
      personMonthsOfRD: 0,
      personMonthsOfTechnicans: 0,
      personMonthsOfOthers: 0,
    },
  })

  useEffect(() => {
    setState({
      ...state,
      personalFrameworkState,
    })
  }, [personalFrameworkState])

  return (
    <Box>
      <TableContainer w="80vw">
        <Table size="sm">
          <Thead>
            <Tr>
              <Th />
              <Th>{t('projects.questions.general.personalFramework.year')}</Th>
              <Th>{t('projects.questions.general.personalFramework.personMonthsOfRD')}</Th>
              <Th>{t('projects.questions.general.personalFramework.personMonthsOfTechnicans')}</Th>
              <Th>{t('projects.questions.general.personalFramework.personMonthsOfOthers')}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {personalFrameworkState
              ? Object.keys(personalFrameworkState).map((key) => (
                  <PersonalFrameworkInput
                    personalFrameworkState={personalFrameworkState}
                    setPersonalFrameworkState={setPersonalFrameworkState}
                    personalFrameworkId={key}
                    key={key}
                  />
                ))
              : null}
          </Tbody>
        </Table>
      </TableContainer>

      <Button
        mt="10px"
        rounded="md"
        leftIcon={<AddIcon />}
        onClick={() => {
          const newState = { ...personalFrameworkState }
          newState[nanoid()] = {
            year: 0,
            personMonthsOfRD: 0,
            personMonthsOfTechnicans: 0,
            personMonthsOfOthers: 0,
          }
          setPersonalFrameworkState(newState)
        }}
      >
        {t('projects.questions.general.personalFramework.addYear')}
      </Button>
    </Box>
  )
}
