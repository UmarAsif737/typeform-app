import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ResearchPartnerInput from './ResearchPartnerInput'

type Props = {
  state: any
  setState: any
}

export default function ResearchPartnerForm({ state, setState }: Props) {
  const { t } = useTranslation()

  const [researchPartnerState, setResearchPartnerState] = useState({
    [nanoid()]: {
      name: '',
      type: '',
      legalForm: undefined,
      address: '',
      federalState: '',
      cost: 0,
      taxId: '',
    },
  })

  useEffect(() => {
    setState({
      ...state,
      researchPartnerState,
    })
  }, [researchPartnerState])

  return (
    <Box>
      <TableContainer w="100vw">
        <Table size="sm">
          <Thead>
            <Tr>
              <Th />
              <Th>{t('projects.questions.details.researchPartners.name')}</Th>
              <Th>{t('projects.questions.details.researchPartners.types.privateBusiness')}</Th>
              <Th>{t('projects.questions.details.researchPartners.types.affiliate')}</Th>
              <Th>{t('projects.questions.details.researchPartners.types.institute')}</Th>
              <Th>{t('projects.questions.details.researchPartners.types.university')}</Th>
              <Th>{t('projects.questions.details.researchPartners.legalForm')}</Th>
              <Th>{t('projects.questions.details.researchPartners.address')}</Th>
              <Th>{t('projects.questions.details.researchPartners.federalState')}</Th>
              <Th>{t('projects.questions.details.researchPartners.cost')}</Th>
              <Th>{t('projects.questions.details.researchPartners.taxId')}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {researchPartnerState
              ? Object.keys(researchPartnerState).map((key) => (
                  <ResearchPartnerInput
                    researchPartnerState={researchPartnerState}
                    setResearchPartnerState={setResearchPartnerState}
                    researchPartnerId={key}
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
          const newState = { ...researchPartnerState }
          newState[nanoid()] = {
            name: '',
            type: '',
            legalForm: undefined,
            address: '',
            federalState: '',
            cost: 0,
            taxId: '',
          }
          setResearchPartnerState(newState)
        }}
      >
        {t('projects.questions.details.researchPartners.addResearchPartner')}
      </Button>
    </Box>
  )
}
