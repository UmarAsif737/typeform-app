import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ProjectJournalInput from './ProjectJournalInput'

type Props = {
  state: any
  setState: any
}

export default function ProjectJournalForm({ state, setState }: Props) {
  const { t } = useTranslation()

  const [projectJournalState, setProjectJournalState] = useState({
    [nanoid()]: {
      part: '',
      timeSlot: '',
      budget: 0,
    },
  })

  useEffect(() => {
    setState({
      ...state,
      projectJournalState,
    })
  }, [projectJournalState])

  return (
    <Box>
      <TableContainer w="80vw">
        <Table size="sm">
          <Thead>
            <Tr>
              <Th />
              <Th>{t('projects.questions.details.projectJournal.part')}</Th>
              <Th>{t('projects.questions.details.projectJournal.timeSlot')}</Th>
              <Th>{t('projects.questions.details.projectJournal.budget')}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {projectJournalState
              ? Object.keys(projectJournalState).map((key) => (
                  <ProjectJournalInput
                    projectJournalState={projectJournalState}
                    setProjectJournalState={setProjectJournalState}
                    projectJournalId={key}
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
          const newState = { ...projectJournalState }
          newState[nanoid()] = {
            part: '',
            timeSlot: '',
            budget: 0,
          }
          setProjectJournalState(newState)
        }}
      >
        {t('projects.questions.details.projectJournal.addProjectJournalPart')}
      </Button>
    </Box>
  )
}
