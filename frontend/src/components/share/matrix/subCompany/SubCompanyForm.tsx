import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import SubCompanyInput from './SubCompanyInput'

type Props = {
  state: any
  setState: any
}

export default function SubCompanyForm({ state, setState }: Props) {
  const { t } = useTranslation()

  return (
    <Box>
      <TableContainer w="80vw">
        <Table size="sm">
          <Thead>
            <Tr>
              <Th />
              <Th>{t('company.details.subCopmany.name')}</Th>
              <Th>{t('company.details.subCopmany.address')}</Th>
              <Th>{t('company.details.subCopmany.legalForm')}</Th>
              <Th>{t('company.details.subCopmany.federalState')}</Th>
              <Th>{t('company.details.subCopmany.taxId')}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {state &&
              state?.map((item: any, index: any) => {
                return (
                  <SubCompanyInput
                    key={item.id}
                    item={item}
                    subCompanyId={index}
                    subCompanyState={state}
                    setSubCompanyState={setState}
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
            name: 0,
            address: 0,
            legalForm: 0,
            federalState: 0,
            taxId: 0,
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
