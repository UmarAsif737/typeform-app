import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import PublicOrPrivateSubsidiaryInput from './PublicOrPrivateSubsidiaryInput'

type Props = {
  state: any
  setState: any
}

export default function PublicOrPrivateSubsidiaryForm({ state, setState }: Props) {
  const { t } = useTranslation()

  const [subsidiaryState, setSubsidiaryState] = useState({
    [nanoid()]: {
      year: 0,
      fundedPersonellCosts: 0,
      fundedContractorCostsInEU: 0,
    },
  })

  useEffect(() => {
    setState({
      ...state,
      subsidiaryState,
    })
  }, [subsidiaryState])

  return (
    <Box>
      <TableContainer w="80vw">
        <Table size="sm">
          <Thead>
            <Tr>
              <Th />
              <Th>{t('projects.questions.general.subsidiary.year')}</Th>
              <Th>{t('projects.questions.general.subsidiary.fundedPersonellCosts')}</Th>
              <Th>{t('projects.questions.general.subsidiary.fundedContractorCostsInEU')}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {subsidiaryState
              ? Object.keys(subsidiaryState).map((key) => (
                  <PublicOrPrivateSubsidiaryInput
                    subsidiaryState={subsidiaryState}
                    setSubsidiaryState={setSubsidiaryState}
                    subsidiaryId={key}
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
          const newState = { ...subsidiaryState }
          newState[nanoid()] = {
            year: 0,
            fundedPersonellCosts: 0,
            fundedContractorCostsInEU: 0,
          }
          setSubsidiaryState(newState)
        }}
      >
        {t('projects.questions.general.subsidiary.addYear')}
      </Button>
    </Box>
  )
}
