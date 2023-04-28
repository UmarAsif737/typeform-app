import { Box, Button, Flex, FlexProps, Heading, Text } from '@chakra-ui/react'
import moment from 'moment'
import { useTranslation } from 'next-i18next'
import { ButtonHTMLAttributes, forwardRef, useState } from 'react'
import DatePicker, { ReactDatePickerCustomHeaderProps } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FieldError } from 'react-hook-form'
import { HeadingVariants, TextVariants } from 'theme'

import { ArrowDown, ArrowDownIcon, CloseIcon, InterfaceCalendar } from 'components/Icons'

type CustomDatePickerProps = {
  date?: Date
  setDate: (date: Date | undefined) => void
  placeholder?: string
  isDisabled?: boolean
  isMonthDatePicker?: boolean
  error?: FieldError
  canClear?: boolean
  id?: string
  name?: string
  customInputStyles?: FlexProps
}

type CustomInputProps = React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement>

const CustomDatePicker = ({
  date,
  setDate,
  placeholder,
  isDisabled = false,
  isMonthDatePicker = false,
  error,
  canClear = false,
  name,
  id,
  customInputStyles,
}: CustomDatePickerProps) => {
  const { t } = useTranslation()
  const [isMonthPicker, setIsMonthPicker] = useState(isMonthDatePicker)

  const placeholderText = placeholder ? placeholder : t('component.datePicker.placeholder')

  const CustomHeader = ({
    date,
    increaseMonth,
    decreaseMonth,
    increaseYear,
    decreaseYear,
  }: ReactDatePickerCustomHeaderProps) => {
    return (
      <Flex alignItems="center" justifyContent="space-between" bg="gray.50" p={4}>
        <Button size="xs" p={0} bg="gray.50" onClick={isMonthPicker ? decreaseYear : decreaseMonth}>
          <ArrowDown boxSize="2rem" color="gray.500" transform="rotate(90deg)" />
        </Button>
        {isMonthPicker ? (
          <Heading variant={HeadingVariants.Heading4}>{date.getFullYear()}</Heading>
        ) : (
          <Button size="xs" onClick={() => setIsMonthPicker(true)} bg="gray.50">
            <Heading variant={HeadingVariants.Heading4}>
              {date.toLocaleString('en', {
                month: 'long',
                year: 'numeric',
              })}
            </Heading>
            <ArrowDownIcon boxSize="0.75rem" color="gray.500" ml={1} />
          </Button>
        )}
        <Button size="xs" p={0} bg="gray.50" onClick={isMonthPicker ? increaseYear : increaseMonth}>
          <ArrowDown boxSize="2rem" color="gray.500" transform="rotate(270deg)" />
        </Button>
      </Flex>
    )
  }

  const switchDateFormat = (value?: string | number | readonly string[]) => {
    return value ? moment(new Date(value as string)).format('DD.MM.YYYY') : placeholderText
  }

  const CustomInput = forwardRef<HTMLDivElement>(({ value, onClick }: CustomInputProps, ref) => {
    const isClearble = canClear && date
    return (
      <Flex
        ref={ref}
        data-testid={name}
        alignItems="center"
        cursor="pointer"
        bg={isDisabled ? 'gray.200' : 'gray.50'}
        opacity={1}
        borderWidth={1}
        borderColor={isDisabled ? 'gray.200' : error ? 'red.300' : value ? 'gray.600' : 'gray.200'}
        borderRadius={4}
        data-gtmid={id}
        {...customInputStyles}
      >
        <Flex alignItems="center" justifyContent="space-between" w={isClearble ? '95%' : '100%'} onClick={onClick}>
          <Text
            noOfLines={1}
            variant={TextVariants.P14Standart}
            my={2.5}
            ml={3}
            color={value ? 'gray.700' : 'gray.300'}
          >
            {switchDateFormat(value)}
          </Text>
          <InterfaceCalendar boxSize={4} color={'gray.300'} ml={5} mr={date ? 2 : 5} />
        </Flex>
        {isClearble && (
          <Box mr={1} onClick={() => setDate(undefined)}>
            <CloseIcon boxSize={5} color={'gray.300'} />
          </Box>
        )}
      </Flex>
    )
  })

  CustomInput.displayName = 'DatePickerCustomInput'

  return (
    <DatePicker
      data-testid={name}
      selected={date}
      onChange={(date: Date) => setDate(date)}
      showPopperArrow={false}
      renderCustomHeader={(props) => <CustomHeader {...props} />}
      showMonthYearPicker={isMonthPicker}
      calendarStartDay={1}
      useWeekdaysShort={true}
      disabledKeyboardNavigation
      shouldCloseOnSelect={!isMonthPicker || isMonthDatePicker}
      onSelect={() => setIsMonthPicker(isMonthDatePicker || false)}
      customInput={<CustomInput />}
      disabled={isDisabled}
      name={name}
    />
  )
}

export default CustomDatePicker
