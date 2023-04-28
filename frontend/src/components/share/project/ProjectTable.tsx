import { Text, FlexProps, Badge } from '@chakra-ui/react'
import { formatCurrency, formatNumber } from 'lib/numberFormatter'
import { TextVariants } from 'theme'
import { Cell } from 'react-table'
import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'
import { formatTimestampToDate } from 'lib/dateFormatter'
import SimpleTable from 'components/Table/SimpleTable'

type Props = FlexProps & {
  data: any
}

const ProjectTable = ({ data }: Props) => {
  const { t } = useTranslation()

  const projectDetailsColumns = useMemo(() => {
    return [
      {
        accessor: 'createdAt',
        Header: t('projects.table.createdAt'),
        Cell: ({ value }: Cell) => (
          <Text variant={TextVariants.P12Standart} color="gray.800">
            {formatTimestampToDate(value)}
          </Text>
        ),
      },
      {
        accessor: 'calculatedTaxCredit',
        Header: t('projects.table.requestedAmount'),
        Cell: ({ value }: Cell) => (
          <Text variant={TextVariants.P12Standart} color="gray.800">
            {formatCurrency(value)}
          </Text>
        ),
      },
      {
        accessor: 'progress',
        Header: t('projects.table.progress'),
        Cell: ({ value }: Cell) => (
          <Text variant={TextVariants.P12Standart} color="gray.800">
            {formatNumber(value)}
          </Text>
        ),
      },
      {
        accessor: 'status',
        Header: t('projects.table.status'),
        Cell: ({ value }: Cell) => (
          <Badge size="md" variant="outline" colorScheme="green">
            {value}
          </Badge>
        ),
      },
    ]
  }, [t])

  const projectData = useMemo(() => data, [data])

  return <SimpleTable columns={projectDetailsColumns} data={projectData} />
}

export default ProjectTable
