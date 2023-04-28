import { CloseIcon } from '@chakra-ui/icons'
import { Td, Input, Tr, Button, Icon, Center, Box } from '@chakra-ui/react'
import { InputVariants } from 'theme'

type Props = {
  fiscalYearId: string
  item: any
  fiscalYearState: any
  setFiscalYearSate: any
}

export default function FiscalYearInput({ fiscalYearId, item, fiscalYearState, setFiscalYearSate }: Props) {
  return (
    <Tr>
      <Td>
        <Center>
          <Button
            size="md"
            rounded="md"
            colorScheme="red"
            onClick={() => {
              const newState = { ...fiscalYearState }
              delete newState[fiscalYearId]
              setFiscalYearSate(newState)
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
              setFiscalYearSate({
                ...fiscalYearState,
                [fiscalYearId]: {
                  ...fiscalYearState,
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
            placeholder="Enter preliminary data"
            value={item.preliminaryData}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFiscalYearSate({
                ...fiscalYearState,
                [fiscalYearId]: {
                  ...fiscalYearState,
                  preliminaryData: e.currentTarget.value,
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
            placeholder="Enter abbreviated Fiscal Year"
            value={item.abbreviatedFiscalYear}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFiscalYearSate({
                ...fiscalYearState,
                [fiscalYearId]: {
                  ...fiscalYearState,
                  abbreviatedFiscalYear: e.currentTarget.value,
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
            placeholder="Enter time Period Of Fiscal Year"
            value={item.timePeriodOfFiscalYear}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFiscalYearSate({
                ...fiscalYearState,
                [fiscalYearId]: {
                  ...fiscalYearState,
                  timePeriodOfFiscalYear: e.currentTarget.value,
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
            placeholder="Enter number Of Employees"
            value={item.numberOfEmployees}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFiscalYearSate({
                ...fiscalYearState,
                [fiscalYearId]: {
                  ...fiscalYearState,
                  numberOfEmployees: e.currentTarget.value,
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
            placeholder="Enter number Of RD Employees"
            value={item.numberOfRDEmployees}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFiscalYearSate({
                ...fiscalYearState,
                [fiscalYearId]: {
                  ...fiscalYearState,
                  numberOfRDEmployees: e.currentTarget.value,
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
            placeholder="Enter revenue"
            value={item.revenue}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFiscalYearSate({
                ...fiscalYearState,
                [fiscalYearId]: {
                  ...fiscalYearState,
                  revenue: e.currentTarget.value,
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
            placeholder="Enter internal Costs Personell"
            value={item.internalCostsPersonell}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFiscalYearSate({
                ...fiscalYearState,
                [fiscalYearId]: {
                  ...fiscalYearState,
                  internalCostsPersonell: e.currentTarget.value,
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
            placeholder="Enter internal Costs Material"
            value={item.internalCostsMaterial}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFiscalYearSate({
                ...fiscalYearState,
                [fiscalYearId]: {
                  ...fiscalYearState,
                  internalCostsMaterial: e.currentTarget.value,
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
            placeholder="Enter external Contract Costs In EU"
            value={item.externalContractCostsInEU}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFiscalYearSate({
                ...fiscalYearState,
                [fiscalYearId]: {
                  ...fiscalYearState,
                  externalContractCostsInEU: e.currentTarget.value,
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
            placeholder="Enter external Contract Costs Outside EU"
            value={item.externalContractCostsOutsideEU}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFiscalYearSate({
                ...fiscalYearState,
                [fiscalYearId]: {
                  ...fiscalYearState,
                  externalContractCostsOutsideEU: e.currentTarget.value,
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
