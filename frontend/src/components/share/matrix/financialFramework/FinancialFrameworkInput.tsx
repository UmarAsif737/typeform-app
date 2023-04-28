import { CloseIcon } from '@chakra-ui/icons'
import { Td, Input, Tr, Button, Icon, Center, Box } from '@chakra-ui/react'
import { InputVariants } from 'theme'

type Props = {
  financialFrameworkId: string
  item: any
  financialFrameworkState: any
  setFinancialFrameworkState: any
}

export default function FinancialFrameworkInputInput({
  financialFrameworkId,
  item,
  financialFrameworkState,
  setFinancialFrameworkState,
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
              const newState = { ...financialFrameworkState }
              delete newState[financialFrameworkId]
              setFinancialFrameworkState(newState)
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
            value={item.year}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFinancialFrameworkState({
                ...financialFrameworkState,
                [financialFrameworkId]: {
                  ...financialFrameworkState,
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
            placeholder="Enter total cost"
            value={item.totalCost}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFinancialFrameworkState({
                ...financialFrameworkState,
                [financialFrameworkId]: {
                  ...financialFrameworkState,
                  totalCost: e.currentTarget.value,
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
            placeholder="Enter personal cost"
            value={item.personalCost}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFinancialFrameworkState({
                ...financialFrameworkState,
                [financialFrameworkId]: {
                  ...financialFrameworkState,
                  personalCost: e.currentTarget.value,
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
            placeholder="Enter material cost and investment"
            value={item.materialCostAndInvestment}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFinancialFrameworkState({
                ...financialFrameworkState,
                [financialFrameworkId]: {
                  ...financialFrameworkState,
                  materialCostAndInvestment: e.currentTarget.value,
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
            placeholder="Enter contractor cost in EU"
            value={item.contractorCostInEU}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFinancialFrameworkState({
                ...financialFrameworkState,
                [financialFrameworkId]: {
                  ...financialFrameworkState,
                  contractorCostInEU: e.currentTarget.value,
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
            placeholder="Enter contractor cost outside EU"
            value={item.contractorCostOutsideEU}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFinancialFrameworkState({
                ...financialFrameworkState,
                [financialFrameworkId]: {
                  ...financialFrameworkState,
                  contractorCostOutsideEU: e.currentTarget.value,
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
            placeholder="Enter other Costs"
            value={item.otherCost}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFinancialFrameworkState({
                ...financialFrameworkState,
                [financialFrameworkId]: {
                  ...financialFrameworkState,
                  otherCost: e.currentTarget.value,
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
