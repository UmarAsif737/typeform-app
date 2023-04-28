import {
  Box,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonProps,
  SkeletonText,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useStyleConfig,
} from '@chakra-ui/react'
import { FC } from 'react'
import { useTable } from 'react-table'

type CustomSkeletonProps = SkeletonProps & {
  type: string
  repeat: number
}

type PropsComponents = {
  box: JSX.Element
  circle: JSX.Element
  text: JSX.Element
}

type Props = {
  columns: any[]
  data: any[]
  hStyle?: string
  bStyle?: string
  variant?: string
  qtySkeleton?: number
  isLoading?: boolean
}
const SimpleTable: FC<Props> = ({
  columns,
  data,
  hStyle = 'SimpleTableHeader',
  bStyle = 'SimpleTableBody',
  variant = 'unstyled',
  qtySkeleton = 0,
  isLoading = false,
}: Props) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })
  const headerStyles = useStyleConfig(hStyle)
  const bodyStyles = useStyleConfig(bStyle)

  // eslint-disable-next-line prefer-spread
  const skeletonArray = qtySkeleton > 0 ? Array.apply(null, Array(qtySkeleton)).map((_, index) => index) : []

  const renderTableSkeleton = () => {
    return headerGroups.map((headerGroup: any, r: number) =>
      skeletonArray.map((i) => (
        <Tr key={`tr-skeleton-${r}-${i}`}>
          {headerGroup.headers.map((column: any, d: number) => {
            const customProps = column.skeletonProps || {}
            const props: CustomSkeletonProps = {
              type: 'text',
              repeat: 1,
              noOfLines: 1,
              spacing: '2',
              ...customProps,
            }

            const typesObj: PropsComponents = {
              box: <Skeleton {...props} />,
              circle: <SkeletonCircle {...props} />,
              text: <SkeletonText {...props} />,
            }

            // eslint-disable-next-line prefer-spread
            const repeatTimesArray = Array.apply(null, Array(props.repeat)).map((_, index) => index)

            return (
              <Td key={`td-skeleton-${d}-{i}`}>
                {repeatTimesArray.length <= 1 ? (
                  typesObj[props.type]
                ) : (
                  <Flex align="center">
                    {repeatTimesArray.map((_, i) => (
                      <Box key={i}>{typesObj[props.type]}</Box>
                    ))}
                  </Flex>
                )}
              </Td>
            )
          })}
        </Tr>
      ))
    )
  }

  return (
    <Table {...getTableProps()} variant={variant}>
      <Thead>
        {headerGroups.map((headerGroup: any, r: number) => (
          <Tr key={r} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any, d: number) => {
              const style = { ...headerStyles, ...column.style }
              if (column.width) style.width = column.width

              return (
                <Th
                  key={d}
                  {...column.getHeaderProps()}
                  isNumeric={column.isNumeric}
                  color="gray.500"
                  pb={0}
                  pt={0}
                  {...style}
                >
                  {column.render('Header')}
                </Th>
              )
            })}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {isLoading
          ? renderTableSkeleton()
          : rows.map((row: any, r: number) => {
              prepareRow(row)
              return (
                <Tr key={r} {...row.getRowProps()}>
                  {row.cells.map((cell: any, d: number) => (
                    <Td
                      key={d}
                      {...cell.getCellProps()}
                      isNumeric={cell.column.isNumeric}
                      pt={0}
                      pb={0}
                      {...bodyStyles}
                    >
                      {cell.render('Cell')}
                    </Td>
                  ))}
                </Tr>
              )
            })}
      </Tbody>
    </Table>
  )
}
export default SimpleTable
