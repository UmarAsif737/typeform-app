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
              const updatedSubCompanyState = subCompanyState.filter((subCompany, index) => index !== subCompanyId)
              setSubCompanyState(updatedSubCompanyState)
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
              setSubCompanyState(
                subCompanyState.map((subCompany, index) =>
                  index === subCompanyId ? { ...subCompany, name: e.currentTarget.value } : subCompany
                )
              )
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
              setSubCompanyState(
                subCompanyState.map((subCompany, index) =>
                  index === subCompanyId ? { ...subCompany, address: e.currentTarget.value } : subCompany
                )
              )
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
              setSubCompanyState(
                subCompanyState.map((subCompany, index) =>
                  index === subCompanyId ? { ...subCompany, legalForm: e.currentTarget.value } : subCompany
                )
              )
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
              setSubCompanyState(
                subCompanyState.map((subCompany, index) =>
                  index === subCompanyId ? { ...subCompany, federalState: e.currentTarget.value } : subCompany
                )
              )
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
              setSubCompanyState(
                subCompanyState.map((subCompany, index) =>
                  index === subCompanyId ? { ...subCompany, taxId: e.currentTarget.value } : subCompany
                )
              )
            }
            // isInvalid={researchPartnerState[researchPartnerId].contractor.length < 1}
            errorBorderColor="crimson"
          />
        </Box>
      </Td>
    </Tr>
  )
}
