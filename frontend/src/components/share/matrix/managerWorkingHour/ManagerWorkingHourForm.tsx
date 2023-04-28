import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ManagerWorkingHourInput from './ManagerWorkingHourInput'

type Props = {
  state: any
  setState: any
}

export default function ManagerWorkingHourForm({ state, setState }: Props) {
  const { t } = useTranslation()

  const [managerWorkingHourState, setManagerWorkingHourState] = useState({
    [nanoid()]: {
      name: '',
      hour: '',
      task: '',
    },
  })

  useEffect(() => {
    setState({
      ...state,
      managerWorkingHourState,
    })
  }, [managerWorkingHourState])

  return (
    <Box>
      <TableContainer w="80vw">
        <Table size="sm">
          <Thead>
            <Tr>
              <Th />
              <Th>{t('projects.questions.details.managerWorkingHour.name')}</Th>
              <Th>{t('projects.questions.details.managerWorkingHour.hour')}</Th>
              <Th>{t('projects.questions.details.managerWorkingHour.task')}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {managerWorkingHourState
              ? Object.keys(managerWorkingHourState).map((key) => (
                  <ManagerWorkingHourInput
                    managerWorkingHourState={managerWorkingHourState}
                    setManagerWorkingHourState={setManagerWorkingHourState}
                    managerWorkingHourId={key}
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
          const newState = { ...managerWorkingHourState }
          newState[nanoid()] = {
            name: '',
            hour: '',
            task: '',
          }
          setManagerWorkingHourState(newState)
        }}
      >
        {t('projects.questions.details.managerWorkingHour.addManagerWorkingHour')}
      </Button>
    </Box>
  )
}
