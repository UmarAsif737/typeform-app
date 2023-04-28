import { CloseIcon } from '@chakra-ui/icons'
import { Td, Input, Tr, Button, Icon, Center, Box } from '@chakra-ui/react'
import { InputVariants } from 'theme'

type Props = {
  subCompanyId: string
  item: any
  subCompanyState: any
  setSubCompanyState: any
}

export default function SubCompanyInput({ subCompanyId, item, subCompanyState, setSubCompanyState }: Props) {
  return (
    <Tr>
      <Td>
        <Center>
          <Button
            size="md"
            rounded="md"
            colorScheme="red"
            onClick={() => {
              const newState = { ...subCompanyState }
              delete newState[subCompanyId]
              setSubCompanyState(newState)
            }}
          >
            <Icon as={CloseIcon} color="white" />
          </Button>
        </Center>
      </Td>

      <Td>
        <Box>
          <Input
            placeholder="Enter name"
            value={item.name}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setSubCompanyState({
                ...subCompanyState,
                [subCompanyId]: {
                  ...subCompanyState,
                  name: e.currentTarget.value,
                },
              })
            }
            // isInvalid={researchPartnerState[researchPartnerId].contractor.length < 1}
            errorBorderColor="crimson"
          />
        </Box>
      </Td>

      <Td>
        <Box>
          <Input
            placeholder="Enter address"
            value={item.address}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setSubCompanyState({
                ...subCompanyState,
                [subCompanyId]: {
                  ...subCompanyState,
                  address: e.currentTarget.value,
                },
              })
            }
            // isInvalid={researchPartnerState[researchPartnerId].contractor.length < 1}
            errorBorderColor="crimson"
          />
        </Box>
      </Td>

      <Td>
        <Box>
          <Input
            placeholder="Enter legal from"
            value={item.legalForm}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setSubCompanyState({
                ...subCompanyState,
                [subCompanyId]: {
                  ...subCompanyState,
                  legalForm: e.currentTarget.value,
                },
              })
            }
            // isInvalid={researchPartnerState[researchPartnerId].contractor.length < 1}
            errorBorderColor="crimson"
          />
        </Box>
      </Td>

      <Td>
        <Box>
          <Input
            placeholder="Enter federal state"
            value={item.federalState}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setSubCompanyState({
                ...subCompanyState,
                [subCompanyId]: {
                  ...subCompanyState,
                  federalState: e.currentTarget.value,
                },
              })
            }
            // isInvalid={researchPartnerState[researchPartnerId].contractor.length < 1}
            errorBorderColor="crimson"
          />
        </Box>
      </Td>

      <Td>
        <Box>
          <Input
            placeholder="Enter tax id"
            value={item.taxId}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setSubCompanyState({
                ...subCompanyState,
                [subCompanyId]: {
                  ...subCompanyState,
                  taxId: e.currentTarget.value,
                },
              })
            }
            // isInvalid={researchPartnerState[researchPartnerId].contractor.length < 1}
            errorBorderColor="crimson"
          />
        </Box>
      </Td>
    </Tr>
  )
}
