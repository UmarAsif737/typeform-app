import { Text, Box } from '@chakra-ui/react'
import { TextVariants } from 'theme'

type Props = {
  cardHeading: number
  cardSubheading: string
}

const DashboardCard = ({ cardHeading, cardSubheading }: Props) => {
  return (
    <Box borderRadius={4} overflow="hidden" w="50%" px={5} pt={4} pb={6} borderWidth={1} borderColor="gray.300">
      <Text variant={TextVariants.P14Semibold} color="gray.700" mb="2px" textAlign="center">
        {cardHeading}
      </Text>
      <Text variant={TextVariants.LabelStandart} color="gray.500" textAlign="center">
        {cardSubheading}
      </Text>
    </Box>
  )
}

export default DashboardCard
