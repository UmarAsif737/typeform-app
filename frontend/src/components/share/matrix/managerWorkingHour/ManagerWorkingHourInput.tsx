import { CloseIcon } from '@chakra-ui/icons'
import { Td, Input, Tr, Button, Icon, Center, Box } from '@chakra-ui/react'
import { InputVariants } from 'theme'

type Props = {
  managerWorkingHourId: string
  managerWorkingHourState: any
  setManagerWorkingHourState: any
}

export default function ManagerWorkingHourInput({
  setManagerWorkingHourState,
  managerWorkingHourState,
  managerWorkingHourId,
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
              const newState = { ...managerWorkingHourState }
              delete newState[managerWorkingHourId]
              setManagerWorkingHourState(newState)
            }}
          >
            <Icon as={CloseIcon} color="white" />
          </Button>
        </Center>
      </Td>
      <Td>
        <Box>
          <Input
            placeholder="Enter project journal part"
            value={managerWorkingHourState[managerWorkingHourId].name}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setManagerWorkingHourState({
                ...managerWorkingHourState,
                [managerWorkingHourId]: {
                  ...managerWorkingHourState[managerWorkingHourId],
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
            placeholder="Enter hours"
            value={managerWorkingHourState[managerWorkingHourId].hour}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setManagerWorkingHourState({
                ...managerWorkingHourState,
                [managerWorkingHourId]: {
                  ...managerWorkingHourState[managerWorkingHourId],
                  hour: e.currentTarget.value,
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
            placeholder="Enter buget"
            value={managerWorkingHourState[managerWorkingHourId].task}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setManagerWorkingHourState({
                ...managerWorkingHourState,
                [managerWorkingHourId]: {
                  ...managerWorkingHourState[managerWorkingHourId],
                  task: e.currentTarget.value,
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
