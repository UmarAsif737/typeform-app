import { CloseIcon } from '@chakra-ui/icons'
import { Td, Input, Tr, Button, Icon, Center, Box } from '@chakra-ui/react'
import { InputVariants } from 'theme'

type Props = {
  subsidiaryId: string
  subsidiaryState: any
  setSubsidiaryState: any
}

export default function PublicOrPrivateSubsidiaryInput({ subsidiaryId, subsidiaryState, setSubsidiaryState }: Props) {
  return (
    <Tr>
      <Td>
        <Center>
          <Button
            size="md"
            rounded="md"
            colorScheme="red"
            onClick={() => {
              const newState = { ...subsidiaryState }
              delete newState[subsidiaryId]
              setSubsidiaryState(newState)
            }}
          >
            <Icon as={CloseIcon} color="white" />
          </Button>
        </Center>
      </Td>

      <Td>
        <Box>
          <Input
            placeholder="Enter year"
            value={subsidiaryState[subsidiaryId].year}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setSubsidiaryState({
                ...subsidiaryState,
                [subsidiaryId]: {
                  ...subsidiaryState[subsidiaryId],
                  year: e.currentTarget.value,
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
            placeholder="Enter funded personell costs"
            value={subsidiaryState[subsidiaryId].fundedPersonellCosts}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setSubsidiaryState({
                ...subsidiaryState,
                [subsidiaryId]: {
                  ...subsidiaryState[subsidiaryId],
                  fundedPersonellCosts: e.currentTarget.value,
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
            placeholder="Enter funded contractor costs within EU"
            value={subsidiaryState[subsidiaryId].fundedContractorCostsInEU}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setSubsidiaryState({
                ...subsidiaryState,
                [subsidiaryId]: {
                  ...subsidiaryState[subsidiaryId],
                  fundedContractorCostsInEU: e.currentTarget.value,
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
