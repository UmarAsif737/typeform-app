import { CloseIcon } from '@chakra-ui/icons'
import { Checkbox, Td, Input, Tr, Textarea, Button, Icon, Center } from '@chakra-ui/react'
import { InputVariants } from 'theme'

type Props = {
  contractorId: string
  contractorState: any
  setContractorState: any
}

export default function ContractorInput({ setContractorState, contractorState, contractorId }: Props) {
  return (
    <Tr>
      <Td>
        <Center>
          <Button
            size="md"
            rounded="md"
            colorScheme="red"
            onClick={() => {
              const newState = { ...contractorState }
              delete newState[contractorId]
              setContractorState(newState)
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
            placeholder="Enter contractor name"
            value={contractorState[contractorId].name}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setContractorState({
                ...contractorState,
                [contractorId]: {
                  ...contractorState[contractorId],
                  name: e.currentTarget.value,
                },
              })
            }
            // isInvalid={contractorState[contractorId].contractor.length < 1}
            errorBorderColor="crimson"
          />
        </Center>
      </Td>

      <Td>
        <Center>
          <Checkbox
            size="lg"
            iconColor="brand.primary"
            isChecked={contractorState[contractorId].type === 'Private Business'}
            onChange={() =>
              setContractorState({
                ...contractorState,
                [contractorId]: {
                  ...contractorState[contractorId],
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
            isChecked={contractorState[contractorId].type === 'Affiliate'}
            onChange={() =>
              setContractorState({
                ...contractorState,
                [contractorId]: {
                  ...contractorState[contractorId],
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
            isChecked={contractorState[contractorId].type === 'Institute'}
            onChange={() =>
              setContractorState({
                ...contractorState,
                [contractorId]: {
                  ...contractorState[contractorId],
                  type: 'Institute',
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
            value={contractorState[contractorId].legalForm}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setContractorState({
                ...contractorState,
                [contractorId]: {
                  ...contractorState[contractorId],
                  legalForm: e.currentTarget.value,
                },
              })
            }
            // isInvalid={contractorState[contractorId].contractor.length < 1}
            errorBorderColor="crimson"
          />
        </Center>
      </Td>

      <Td>
        <Center>
          <Input
            w="min"
            placeholder="Enter address"
            value={contractorState[contractorId].address}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setContractorState({
                ...contractorState,
                [contractorId]: {
                  ...contractorState[contractorId],
                  address: e.currentTarget.value,
                },
              })
            }
            // isInvalid={contractorState[contractorId].contractor.length < 1}
            errorBorderColor="crimson"
          />
        </Center>
      </Td>

      <Td>
        <Center>
          {' '}
          <Checkbox
            size="lg"
            iconColor="brand.primary"
            isChecked={contractorState[contractorId].isGermanCompany}
            variant={InputVariants.WithBorder}
            onChange={() =>
              setContractorState({
                ...contractorState,
                [contractorId]: {
                  ...contractorState[contractorId],
                  isGermanCompany: !contractorState.isGermanCompany,
                },
              })
            }
          />
        </Center>
      </Td>

      <Td>
        <Center>
          <Input
            placeholder="Enter your federal state"
            value={contractorState[contractorId].federalState}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setContractorState({
                ...contractorState,
                [contractorId]: {
                  ...contractorState[contractorId],
                  federalState: e.currentTarget.value,
                },
              })
            }
            // isInvalid={contractorState[contractorId].contractor.length < 1}
            errorBorderColor="crimson"
          />
        </Center>
      </Td>

      <Td>
        <Center>
          <Textarea
            w="300px"
            placeholder="Enter work description"
            value={contractorState[contractorId].descriptionOfWork}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setContractorState({
                ...contractorState,
                [contractorId]: {
                  ...contractorState[contractorId],
                  descriptionOfWork: e.currentTarget.value,
                },
              })
            }
            // isInvalid={contractorState[contractorId].workDescription.length < 1}
            errorBorderColor="crimson"
          />
        </Center>
      </Td>

      <Td>
        <Center>
          <Input
            w="min"
            placeholder="Enter cost"
            value={contractorState[contractorId].cost}
            onChange={(e) =>
              setContractorState({
                ...contractorState,
                [contractorId]: {
                  ...contractorState[contractorId],
                  cost: e.currentTarget.value,
                },
              })
            }
            variant={InputVariants.WithBorder}
            // isInvalid={contractorState[contractorId].contractor.length < 1}
            errorBorderColor="crimson"
          />
        </Center>
      </Td>

      <Td>
        <Center>
          <Input
            w="min"
            placeholder="Enter tax ID"
            value={contractorState[contractorId].taxId}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setContractorState({
                ...contractorState,
                [contractorId]: {
                  ...contractorState[contractorId],
                  taxId: e.currentTarget.value,
                },
              })
            }
            // isInvalid={contractorState[contractorId].contractor.length < 1}
            errorBorderColor="crimson"
          />
        </Center>
      </Td>
    </Tr>
  )
}
