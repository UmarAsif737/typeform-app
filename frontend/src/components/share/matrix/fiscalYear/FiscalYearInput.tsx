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
              const updatedFiscalYearState = fiscalYearState.filter((subCompany, index) => index !== fiscalYearId)
              setFiscalYearSate(updatedFiscalYearState)
            }}
          >
            <Icon as={CloseIcon} color="white" />
          </Button>
        </Center>
      </Td>

      <Td>
        <Box>
          <Input
            style={{ width: 'max-content', minWidth: '100%' }}
            placeholder="Enter year"
            value={item.year}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFiscalYearSate(
                fiscalYearState.map((subFiscal, index) =>
                  index === fiscalYearId ? { ...subFiscal, year: e.currentTarget.value } : subFiscal
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
            style={{ width: 'max-content', minWidth: '100%' }}
            placeholder="Enter preliminary data"
            value={item.preliminaryData}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFiscalYearSate(
                fiscalYearState.map((subFiscal, index) =>
                  index === fiscalYearId ? { ...subFiscal, preliminaryData: e.currentTarget.value } : subFiscal
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
            style={{ width: 'max-content', minWidth: '100%' }}
            placeholder="Enter abbreviated Fiscal Year"
            value={item.abbreviatedFiscalYear}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFiscalYearSate(
                fiscalYearState.map((subFiscal, index) =>
                  index === fiscalYearId ? { ...subFiscal, abbreviatedFiscalYear: e.currentTarget.value } : subFiscal
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
            style={{ width: 'max-content', minWidth: '100%' }}
            placeholder="Enter time Period Of Fiscal Year"
            value={item.timePeriodOfFiscalYear}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFiscalYearSate(
                fiscalYearState.map((subFiscal, index) =>
                  index === fiscalYearId ? { ...subFiscal, timePeriodOfFiscalYear: e.currentTarget.value } : subFiscal
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
            style={{ width: 'max-content', minWidth: '100%' }}
            placeholder="Enter number Of Employees"
            value={item.numberOfEmployees}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFiscalYearSate(
                fiscalYearState.map((subFiscal, index) =>
                  index === fiscalYearId ? { ...subFiscal, numberOfEmployees: e.currentTarget.value } : subFiscal
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
            style={{ width: 'max-content', minWidth: '100%' }}
            placeholder="Enter number Of RD Employees"
            value={item.numberOfRDEmployees}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFiscalYearSate(
                fiscalYearState.map((subFiscal, index) =>
                  index === fiscalYearId ? { ...subFiscal, numberOfRDEmployees: e.currentTarget.value } : subFiscal
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
            style={{ width: 'max-content', minWidth: '100%' }}
            placeholder="Enter revenue"
            value={item.revenue}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFiscalYearSate(
                fiscalYearState.map((subFiscal, index) =>
                  index === fiscalYearId ? { ...subFiscal, revenue: e.currentTarget.value } : subFiscal
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
            style={{ width: 'max-content', minWidth: '100%' }}
            placeholder="Enter internal Costs Personell"
            value={item.internalCostsPersonell}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFiscalYearSate(
                fiscalYearState.map((subFiscal, index) =>
                  index === fiscalYearId ? { ...subFiscal, internalCostsPersonell: e.currentTarget.value } : subFiscal
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
            style={{ width: 'max-content', minWidth: '100%' }}
            placeholder="Enter internal Costs Material"
            value={item.internalCostsMaterial}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFiscalYearSate(
                fiscalYearState.map((subFiscal, index) =>
                  index === fiscalYearId ? { ...subFiscal, internalCostsMaterial: e.currentTarget.value } : subFiscal
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
            style={{ width: 'max-content', minWidth: '100%' }}
            placeholder="Enter external Contract Costs In EU"
            value={item.externalContractCostsInEU}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFiscalYearSate(
                fiscalYearState.map((subFiscal, index) =>
                  index === fiscalYearId
                    ? { ...subFiscal, externalContractCostsInEU: e.currentTarget.value }
                    : subFiscal
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
            style={{ width: 'max-content', minWidth: '100%' }}
            placeholder="Enter external Contract Costs Outside EU"
            value={item.externalContractCostsOutsideEU}
            variant={InputVariants.WithBorder}
            onChange={(e) =>
              setFiscalYearSate(
                fiscalYearState.map((subFiscal, index) =>
                  index === fiscalYearId
                    ? { ...subFiscal, externalContractCostsOutsideEU: e.currentTarget.value }
                    : subFiscal
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
