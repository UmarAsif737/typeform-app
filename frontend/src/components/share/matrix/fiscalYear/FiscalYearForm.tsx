import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import FiscalYearInput from './FiscalYearInput'

type Props = {
  state: any
  setState: any
}

export default function SubCompanyForm({ state, setState }: Props) {
  const { t } = useTranslation()

  useEffect(() => {
    const newItem = {
      id: nanoid(),
      year: 0,
      preliminaryData: 0,
      abbreviatedFiscalYear: '',
      timePeriodOfFiscalYear: '',
      numberOfEmployees: 0,
      numberOfRDEmployees: 0,
      revenue: 0,
      internalCostsPersonell: 0,
      internalCostsMaterial: 0,
      externalContractCostsInEU: 0,
      externalContractCostsOutsideEU: 0,
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
              <Th>{t('company.details.fiscalYear.year')}</Th>
              <Th>{t('company.details.fiscalYear.preliminaryData')}</Th>
              <Th>{t('company.details.fiscalYear.abbreviatedFiscalYear')}</Th>
              <Th>{t('company.details.fiscalYear.timePeriodOfFiscalYear')}</Th>
              <Th>{t('company.details.fiscalYear.numberOfEmployees')}</Th>
              <Th>{t('company.details.fiscalYear.numberOfRDEmployees')}</Th>
              <Th>{t('company.details.fiscalYear.revenue')}</Th>
              <Th>{t('company.details.fiscalYear.internalCostsPersonell')}</Th>
              <Th>{t('company.details.fiscalYear.internalCostsMaterial')}</Th>
              <Th>{t('company.details.fiscalYear.externalContractCostsInEU')}</Th>
              <Th>{t('company.details.fiscalYear.externalContractCostsOutsideEU')}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {state &&
              state.map((item: any) => {
                return (
                  <FiscalYearInput
                    key={item.id}
                    item={item}
                    fiscalYearId={item.id}
                    fiscalYearState={state}
                    setFiscalYearSate={setState}
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
            preliminaryData: 0,
            abbreviatedFiscalYear: '',
            timePeriodOfFiscalYear: '',
            numberOfEmployees: 0,
            numberOfRDEmployees: 0,
            revenue: 0,
            internalCostsPersonell: 0,
            internalCostsMaterial: 0,
            externalContractCostsInEU: 0,
            externalContractCostsOutsideEU: 0,
          }
          const newState = [...state, newItem]
          setState(newState)
        }}
      >
        {t('company.details.subCopmany.addName')}
      </Button>
    </Box>
  )
}
