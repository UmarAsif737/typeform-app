import { CloseIcon } from '@chakra-ui/icons'
import { Checkbox, Td, Input, Tr, Button, Icon, Center } from '@chakra-ui/react'
import { InputVariants } from 'theme'

type Props = {
  researchPartnerId: string
  researchPartnerState: any
  setResearchPartnerState: any
}

export default function ResearchPartnerInput({
  setResearchPartnerState,
  researchPartnerState,
  researchPartnerId,
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
              const newState = { ...researchPartnerState }
              delete newState[researchPartnerId]
              setResearchPartnerState(newState)
            }}
          >
            <Icon as={CloseIcon} color="white" />
          </Button>
        </Center>
      </Td>
      <Td>
        <Center>
          <Input
            w="min"
            placeholder="Enter research partner name"
            value={researchPartnerState[researchPartnerId].name}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setResearchPartnerState({
                ...researchPartnerState,
                [researchPartnerId]: {
                  ...researchPartnerState[researchPartnerId],
                  name: e.currentTarget.value,
                },
              })
            }
            // isInvalid={researchPartnerState[researchPartnerId].contractor.length < 1}
            errorBorderColor="crimson"
          />
        </Center>
      </Td>

      <Td>
        <Center>
          <Checkbox
            size="lg"
            iconColor="brand.primary"
            isChecked={researchPartnerState[researchPartnerId].type === 'Private Business'}
            onChange={() =>
              setResearchPartnerState({
                ...researchPartnerState,
                [researchPartnerId]: {
                  ...researchPartnerState[researchPartnerId],
                  type: 'Private Business',
                },
              })
            }
          />
        </Center>
      </Td>

      <Td>
        <Center>
          <Checkbox
            size="lg"
            iconColor="brand.primary"
            isChecked={researchPartnerState[researchPartnerId].type === 'Affiliate'}
            onChange={() =>
              setResearchPartnerState({
                ...researchPartnerState,
                [researchPartnerId]: {
                  ...researchPartnerState[researchPartnerId],
                  type: 'Affiliate',
                },
              })
            }
          />
        </Center>
      </Td>

      <Td>
        <Center>
          {' '}
          <Checkbox
            size="lg"
            iconColor="brand.primary"
            isChecked={researchPartnerState[researchPartnerId].type === 'Institute'}
            onChange={() =>
              setResearchPartnerState({
                ...researchPartnerState,
                [researchPartnerId]: {
                  ...researchPartnerState[researchPartnerId],
                  type: 'Institute',
                },
              })
            }
          />
        </Center>
      </Td>

      <Td>
        <Center>
          {' '}
          <Checkbox
            size="lg"
            iconColor="brand.primary"
            isChecked={researchPartnerState[researchPartnerId].type === 'University'}
            onChange={() =>
              setResearchPartnerState({
                ...researchPartnerState,
                [researchPartnerId]: {
                  ...researchPartnerState[researchPartnerId],
                  type: 'University',
                },
              })
            }
          />
        </Center>
      </Td>

      <Td>
        <Center>
          <Input
            w="min"
            placeholder="Enter legal form"
            value={researchPartnerState[researchPartnerId].legalForm}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setResearchPartnerState({
                ...researchPartnerState,
                [researchPartnerId]: {
                  ...researchPartnerState[researchPartnerId],
                  legalForm: e.currentTarget.value,
                },
              })
            }
            // isInvalid={researchPartnerState[researchPartnerId].contractor.length < 1}
            errorBorderColor="crimson"
          />
        </Center>
      </Td>

      <Td>
        <Center>
          <Input
            w="min"
            placeholder="Enter address"
            value={researchPartnerState[researchPartnerId].address}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setResearchPartnerState({
                ...researchPartnerState,
                [researchPartnerId]: {
                  ...researchPartnerState[researchPartnerId],
                  address: e.currentTarget.value,
                },
              })
            }
            // isInvalid={researchPartnerState[researchPartnerId].contractor.length < 1}
            errorBorderColor="crimson"
          />
        </Center>
      </Td>

      <Td>
        <Center>
          <Input
            placeholder="Enter your federal state"
            value={researchPartnerState[researchPartnerId].federalState}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setResearchPartnerState({
                ...researchPartnerState,
                [researchPartnerId]: {
                  ...researchPartnerState[researchPartnerId],
                  federalState: e.currentTarget.value,
                },
              })
            }
            // isInvalid={researchPartnerState[researchPartnerId].contractor.length < 1}
            errorBorderColor="crimson"
          />
        </Center>
      </Td>

      <Td>
        <Center>
          <Input
            w="min"
            placeholder="Enter cost"
            value={researchPartnerState[researchPartnerId].cost}
            onChange={(e) =>
              setResearchPartnerState({
                ...researchPartnerState,
                [researchPartnerId]: {
                  ...researchPartnerState[researchPartnerId],
                  cost: e.currentTarget.value,
                },
              })
            }
            variant={InputVariants.WithBorder}
            // isInvalid={researchPartnerState[researchPartnerId].contractor.length < 1}
            errorBorderColor="crimson"
          />
        </Center>
      </Td>

      <Td>
        <Center>
          <Input
            w="min"
            placeholder="Enter tax ID"
            value={researchPartnerState[researchPartnerId].taxId}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setResearchPartnerState({
                ...researchPartnerState,
                [researchPartnerId]: {
                  ...researchPartnerState[researchPartnerId],
                  taxId: e.currentTarget.value,
                },
              })
            }
            // isInvalid={researchPartnerState[researchPartnerId].contractor.length < 1}
            errorBorderColor="crimson"
          />
        </Center>
      </Td>
    </Tr>
  )
}
