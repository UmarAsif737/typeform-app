import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ContractorInput from './ContractorInput'

type Props = {
  state: any
  setState: any
}

export default function ContractorForm({ state, setState }: Props) {
  const { t } = useTranslation()

  const [contractorState, setContractorState] = useState({
    [nanoid()]: {
      name: '',
      type: '',
      legalForm: undefined,
      address: '',
      isGermanCompany: false,
      federalState: '',
      descriptionOfWork: '',
      cost: 0,
      taxId: '',
    },
  })

  useEffect(() => {
    setState({
      ...state,
      contractorState,
    })
  }, [contractorState])

  return (
    <Box>
      <TableContainer w="100vw">
        <Table size="sm">
          <Thead>
            <Tr>
              <Th />
              <Th>{t('projects.questions.details.contractors.name')}</Th>
              <Th>{t('projects.questions.details.contractors.types.privateBusiness')}</Th>
              <Th>{t('projects.questions.details.contractors.types.affiliate')}</Th>
              <Th>{t('projects.questions.details.contractors.types.institute')}</Th>
              <Th>{t('projects.questions.details.contractors.legalForm')}</Th>
              <Th>{t('projects.questions.details.contractors.address')}</Th>
              <Th>{t('projects.questions.details.contractors.isGermanCompany')}</Th>
              <Th>{t('projects.questions.details.contractors.federalState')}</Th>
              <Th>{t('projects.questions.details.contractors.descriptionOfWork')}</Th>
              <Th>{t('projects.questions.details.contractors.cost')}</Th>
              <Th>{t('projects.questions.details.contractors.taxId')}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {contractorState
              ? Object.keys(contractorState).map((key) => (
                  <ContractorInput
                    contractorState={contractorState}
                    setContractorState={setContractorState}
                    contractorId={key}
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
          const newState = { ...contractorState }
          newState[nanoid()] = {
            name: '',
            type: '',
            legalForm: undefined,
            address: '',
            isGermanCompany: false,
            federalState: '',
            descriptionOfWork: '',
            cost: 0,
            taxId: '',
          }
          setContractorState(newState)
        }}
      >
        {t('projects.questions.details.contractors.addContractor')}
      </Button>
    </Box>
  )
}
