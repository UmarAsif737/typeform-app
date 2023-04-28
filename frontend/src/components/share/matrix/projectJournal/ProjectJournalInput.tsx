import { CloseIcon } from '@chakra-ui/icons'
import { Td, Input, Tr, Button, Icon, Center, Box } from '@chakra-ui/react'
import { InputVariants } from 'theme'

type Props = {
  projectJournalId: string
  projectJournalState: any
  setProjectJournalState: any
}

export default function ProjectJournalInput({ setProjectJournalState, projectJournalState, projectJournalId }: Props) {
  return (
    <Tr>
      <Td>
        <Center>
          <Button
            size="md"
            rounded="md"
            colorScheme="red"
            onClick={() => {
              const newState = { ...projectJournalState }
              delete newState[projectJournalId]
              setProjectJournalState(newState)
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
            value={projectJournalState[projectJournalId].part}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setProjectJournalState({
                ...projectJournalState,
                [projectJournalId]: {
                  ...projectJournalState[projectJournalId],
                  part: e.currentTarget.value,
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
            placeholder="Enter time slot"
            value={projectJournalState[projectJournalId].timeSlot}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setProjectJournalState({
                ...projectJournalState,
                [projectJournalId]: {
                  ...projectJournalState[projectJournalId],
                  timeSlot: e.currentTarget.value,
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
            value={projectJournalState[projectJournalId].budget}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setProjectJournalState({
                ...projectJournalState,
                [projectJournalId]: {
                  ...projectJournalState[projectJournalId],
                  budget: e.currentTarget.value,
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
