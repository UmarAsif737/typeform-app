import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import FinancialFrameworkInput from './FinancialFrameworkInput'

type Props = {
  state: any
  setState: any
}

export default function FinancialFrameworkForm({ state, setState }: Props) {
  const { t } = useTranslation()

  useEffect(() => {
    const newItem = {
      id: nanoid(),
      year: 0,
      totalCost: 0,
      personalCost: 0,
      materialCostAndInvestment: 0,
      contractorCostInEU: 0,
      contractorCostOutsideEU: 0,
      otherCost: 0,
    }
    setState({
      ...state,
      ...newItem,
    })
  }, [state, setState])

  return (
    <Box>
      <TableContainer w="80vw">
        <Table size="sm">
          <Thead>
            <Tr>
              <Th />
              <Th>{t('projects.questions.general.financialFramework.year')}</Th>
              <Th>{t('projects.questions.general.financialFramework.totalCost')}</Th>
              <Th>{t('projects.questions.general.financialFramework.personalCost')}</Th>
              <Th>{t('projects.questions.general.financialFramework.materialCostAndInvestment')}</Th>
              <Th>{t('projects.questions.general.financialFramework.contractorCostInEU')}</Th>
              <Th>{t('projects.questions.general.financialFramework.contractorCostOutsideEU')}</Th>
              <Th>{t('projects.questions.general.financialFramework.otherCost')}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {state &&
              state.map((item: any) => {
                return (
                  <FinancialFrameworkInput
                    key={item.id}
                    item={item}
                    financialFrameworkId={item.id}
                    financialFrameworkState={state}
                    setFinancialFrameworkState={setState}
                  />
                )
              })}
          </Tbody>
        </Table>
      </TableContainer>

      <Button
        mt="10px"
        rounded="md"
        leftIcon={<AddIcon />}
        onClick={() => {
          const newItem = {
            id: nanoid(),
            year: 0,
            totalCost: 0,
            personalCost: 0,
            materialCostAndInvestment: 0,
            contractorCostInEU: 0,
            contractorCostOutsideEU: 0,
            otherCost: 0,
          }
          const newState = [...state, newItem]
          setState(newState)
        }}
      >
        {t('projects.questions.general.financialFramework.addYear')}
      </Button>
    </Box>
  )
}
