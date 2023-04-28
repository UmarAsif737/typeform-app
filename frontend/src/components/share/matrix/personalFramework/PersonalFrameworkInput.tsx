import { CloseIcon } from '@chakra-ui/icons'
import { Td, Input, Tr, Button, Icon, Center, Box } from '@chakra-ui/react'
import { InputVariants } from 'theme'

type Props = {
  personalFrameworkId: string
  personalFrameworkState: any
  setPersonalFrameworkState: any
}

export default function PersonalFrameworkInput({
  personalFrameworkId,
  personalFrameworkState,
  setPersonalFrameworkState,
}: Props) {
  return (
    <Tr>
      <Td>
        <Center>
          <Button
            size="md"
            rounded="md"
            colorScheme="red"
            onClick={() => {
              const newState = { ...personalFrameworkState }
              delete newState[personalFrameworkId]
              setPersonalFrameworkState(newState)
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
            value={personalFrameworkState[personalFrameworkId].year}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setPersonalFrameworkState({
                ...personalFrameworkState,
                [personalFrameworkId]: {
                  ...personalFrameworkState[personalFrameworkId],
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
            placeholder="Enter person months of RD"
            value={personalFrameworkState[personalFrameworkId].personMonthsOfRD}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setPersonalFrameworkState({
                ...personalFrameworkState,
                [personalFrameworkId]: {
                  ...personalFrameworkState[personalFrameworkId],
                  personMonthsOfRD: e.currentTarget.value,
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
            placeholder="Enter person months of RD"
            value={personalFrameworkState[personalFrameworkId].personMonthsOfTechnicans}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setPersonalFrameworkState({
                ...personalFrameworkState,
                [personalFrameworkId]: {
                  ...personalFrameworkState[personalFrameworkId],
                  personMonthsOfTechnicans: e.currentTarget.value,
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
            placeholder="Enter person months of others"
            value={personalFrameworkState[personalFrameworkId].personMonthsOfOthers}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setPersonalFrameworkState({
                ...personalFrameworkState,
                [personalFrameworkId]: {
                  ...personalFrameworkState[personalFrameworkId],
                  personMonthsOfOthers: e.currentTarget.value,
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
