import { ChakraStylesConfig } from 'chakra-react-select'

import { globalStyles } from 'theme/styles'

const { colors } = globalStyles

export const SelectVariants = {
  Primary: 'primary',
  Secondary: 'secondary',
  Error: 'error',
  Uniform: 'uniform',
  UniformError: 'uniformError',
  Multi: 'multi',
  MultiSmall: 'multiSmall',
  MultiXS: 'multiXS',
  Autocomplete: 'autocomplete',
  CustomSelect: 'CustomSelect',
  CustomSelectError: 'CustomSelectError',
}

const baseCustomSelect: ChakraStylesConfig = {
  container: (provided) => ({
    ...provided,
    alignItems: 'space-around',
    borderRadius: '4px',
  }),
  control: (provided, state) => ({
    ...provided,
    pl: '1rem',
    bg: 'gray.50',
    minW: '4rem',
    minH: '44px',
    borderRadius: '4px',
    borderColor: state.isDisabled ? 'gray.50' : state.hasValue ? 'gray.600' : 'gray.200',
    _hover: {
      borderColor: state.hasValue ? 'gray.600' : 'gray.200',
    },
    _focus: {
      boxShadow: 'none',
      borderColor: 'gray.600',
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    p: 0,
    fontSize: '0.875rem',
    color: 'gray.700',
  }),
  option: (provided) => ({
    ...provided,
    color: 'gray.600',
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
    p: 0,
    bg: 'gray.50',
    minH: '40px',
    pl: '0.75rem',
    _hover: {
      bg: 'white',
    },
  }),
  menu: (provided) => ({
    ...provided,
    p: '0',
    mt: '0',
    borderWidth: 0,
    backgroundColor: 'transparent',
    boxShadow: 'none',
  }),
  menuList: (provided) => ({
    ...provided,
    p: '0',
    borderRadius: '4px',
    borderWidth: '1px',
    borderColor: 'gray.200',
    minW: 0,
    marginTop: '10px',
    background: 'white',
    maxH: '160px',
    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'gray.50',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      color: 'gray.4200',
      background: 'gray.200',
    },
  }),
  dropdownIndicator: (provided, { selectProps }) => ({
    ...provided,
    paddingRight: 2,
    paddingLeft: 2,
    backgroundColor: 'transparent',
    '> svg': {
      fill: 'gray.300',
      color: 'gray.300',
      transform: `rotate(${selectProps.menuIsOpen ? -180 : 0}deg)`,
    },
    _last: {
      backgroundColor: 'transparent',
    },
  }),
  clearIndicator: (provided) => ({
    ...provided,
    padding: 0,
    width: '15px',
    margin: 0,
    _hover: { backgroundColor: 'transparent' },
    '> svg': {
      width: '10px',
      height: '10px',
      fill: 'gray.300',
      color: 'gray.300',
    },
  }),
  loadingIndicator: (provided) => ({
    ...provided,
    padding: 0,
    width: '15px',
    margin: 0,
    borderColor: 'gray.300',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    borderStyle: 'none',
    display: 'none',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'gray.700',
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'gray.500',
    fontSize: '0.875rem',
  }),
}

const baseMultiStyle: ChakraStylesConfig = {
  container: (provided) => ({
    ...provided,
    alignItems: 'space-around',
  }),
  control: (provided, state) => ({
    ...provided,
    pl: '0.75rem',
    color: 'gray.800',
    bg: 'gray.50',
    fontSize: '0.875rem',
    minW: '4rem',
    h: '44px',
    borderColor: 'gray.600',
    _hover: {
      borderColor: 'gray.200',
    },
    _focus: {
      borderColor: state.menuIsOpen ? 'gray.200' : 'gray.600',
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'gray.600',
    fontSize: '0.875rem',
  }),
  valueContainer: (provided) => ({
    ...provided,
    p: 0,
    h: '44px',
  }),
  option: (provided) => ({
    ...provided,
    color: 'gray.600',
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
    p: 0,
    bg: 'gray.50',
    minH: '2rem',
    pl: '0.75rem',
    _hover: {
      bg: 'white',
    },
  }),
  menu: (provided) => ({
    ...provided,
    p: 0,
    mt: 0,
  }),
  menuList: (provided) => ({
    ...provided,
    p: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderWidth: 0,
    minW: 0,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    borderStyle: 'none',
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
  }),
  clearIndicator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  multiValue: (provided) => ({
    ...provided,
    display: 'none',
  }),
}

const baseUniformStyles: ChakraStylesConfig = {
  container: (provided) => ({
    ...provided,
    alignItems: 'space-around',
  }),
  control: (provided) => ({
    ...provided,
    pl: '0.75rem',
    fontSize: '0.875rem',
    color: 'gray.800',
    bg: 'gray.50',
    minW: '4rem',
    h: '44px',
    borderColor: 'gray.200',
    _hover: {
      borderColor: 'gray.200',
    },
    _focus: {
      borderColor: 'gray.600',
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'gray.600',
    fontSize: '0.875rem',
  }),
  valueContainer: (provided) => ({
    ...provided,
    p: 0,
    h: '44px',
  }),
  option: (provided) => ({
    ...provided,
    color: 'gray.600',
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
    p: '0',
    bg: 'gray.50',
    minH: '2rem',
    pl: '0.75rem',
    _hover: {
      bg: 'white',
    },
  }),
  menu: (provided) => ({
    ...provided,
    p: '0',
    mt: '0',
  }),
  menuList: (provided) => ({
    ...provided,
    p: '0',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderWidth: 0,
    minW: 0,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    borderStyle: 'none',
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
    _isSelected: {
      borderColor: 'red',
    },
  }),
}

const Select = {
  variants: {
    [SelectVariants.Primary]: (): ChakraStylesConfig => ({
      container: (provided) => ({
        ...provided,
        alignItems: 'space-around',
      }),
      control: (provided, state) => ({
        ...provided,
        pl: '1rem',
        bg: 'gray.50',
        minW: '4rem',
        minH: '44px',
        borderRadius: '4px',
        borderColor: 'gray.50',
        _hover: {
          borderColor: 'gray.200',
        },
        _focus: {
          boxShadow: 'none',
          borderColor: state.menuIsOpen ? 'gray.200' : 'gray.600',
        },
      }),
      valueContainer: (provided) => ({
        ...provided,
        p: 0,
      }),
      option: (provided) => ({
        ...provided,
        color: 'gray.600',
        fontSize: '0.875rem',
        lineHeight: '1.5rem',
        p: '0',
        bg: 'white',
        minH: '2rem',
        pl: '0.75rem',
        _odd: {
          bg: 'gray.50',
        },
      }),
      menu: (provided) => ({
        ...provided,
        p: '0',
        mt: '0',
      }),
      menuList: (provided) => ({
        ...provided,
        p: '0',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderWidth: 0,
        minW: 0,
      }),
      indicatorSeparator: (provided) => ({
        ...provided,
        borderStyle: 'none',
        display: 'none',
      }),
      singleValue: (provided) => ({
        ...provided,
        color: 'gray.700',
        fontSize: '0.875rem',
        lineHeight: '1.5rem',
      }),
      placeholder: (provided) => ({
        ...provided,
        color: 'gray.500',
        fontSize: '0.875rem',
      }),
    }),

    [SelectVariants.Secondary]: (): ChakraStylesConfig => ({
      control: (provided, state) => ({
        ...provided,
        pl: '0.75rem',
        bg: 'gray.50',
        minW: '4rem',
        borderBottomLeftRadius: state.menuIsOpen ? 0 : 'md',
        borderBottomRightRadius: state.menuIsOpen ? 0 : 'md',
        borderColor: 'gray.200',

        _focus: {
          borderColor: 'gray.600',
          bg: 'gray.50',
          color: 'gray.800',
        },
      }),
      valueContainer: (provided) => ({
        ...provided,
        p: 0,
      }),
      option: (provided) => ({
        ...provided,
        color: 'gray.600',
        fontSize: '0.875rem',
        lineHeight: '1.5rem',
        p: '0',
        bg: 'white',
        minH: '2rem',
        pl: '0.75rem',
        _odd: {
          bg: 'gray.50',
        },
      }),
      menu: (provided) => ({
        ...provided,
        p: '0',
        mt: '0',
      }),
      menuList: (provided) => ({
        ...provided,
        p: '0',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderWidth: 0,
        minW: 0,
      }),
      indicatorSeparator: (provided) => ({
        ...provided,
        borderStyle: 'none',
      }),
      singleValue: (provided) => ({
        ...provided,
        fontSize: '0.875rem',
        lineHeight: '1.5rem',
      }),
    }),

    [SelectVariants.Error]: (): ChakraStylesConfig => ({
      container: (provided) => ({
        ...provided,
        alignItems: 'space-around',
      }),
      control: (provided, state) => ({
        ...provided,
        pl: '0.75rem',
        minW: '4rem',
        borderBottomLeftRadius: state.menuIsOpen ? 0 : 'md',
        borderBottomRightRadius: state.menuIsOpen ? 0 : 'md',
        bg: 'gray.50',
        color: 'gray.700',
        borderColor: 'red.400',
        _focus: {
          borderColor: 'red.400',
          bg: 'gray.50',
          color: 'gray.800',
        },
      }),
      valueContainer: (provided) => ({
        ...provided,
        p: 0,
      }),
      option: (provided) => ({
        ...provided,
        color: 'gray.600',
        fontSize: '0.875rem',
        lineHeight: '1.5rem',
        p: '0',
        bg: 'white',
        minH: '2rem',
        pl: '0.75rem',
        _odd: {
          bg: 'gray.50',
        },
      }),
      menu: (provided) => ({
        ...provided,
        p: '0',
        mt: '0',
      }),
      menuList: (provided) => ({
        ...provided,
        p: '0',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderWidth: 0,
        minW: 0,
      }),
      indicatorSeparator: (provided) => ({
        ...provided,
        borderStyle: 'none',
      }),
      singleValue: (provided) => ({
        ...provided,
        fontSize: '0.875rem',
        lineHeight: '1.5rem',
      }),
    }),

    [SelectVariants.Uniform]: (): ChakraStylesConfig => ({
      ...baseUniformStyles,
    }),
    [SelectVariants.UniformError]: (): ChakraStylesConfig => ({
      ...baseUniformStyles,
      control: (provided, state) => ({
        ...provided,
        pl: '0.75rem',
        bg: 'gray.50',
        minW: '4rem',
        borderColor: 'red.400',
        _hover: {
          borderColor: 'gray.200',
        },
        _focus: {
          borderColor: state.menuIsOpen ? 'gray.200' : 'gray.600',
        },
      }),
    }),
    [SelectVariants.Multi]: (): ChakraStylesConfig => ({
      ...baseMultiStyle,
    }),
    [SelectVariants.MultiSmall]: (): ChakraStylesConfig => ({
      ...baseMultiStyle,
      control: (provided, state) => ({
        ...provided,
        pl: '0.75rem',
        color: 'gray.800',
        bg: 'gray.50',
        minH: '1.5rem',
        minW: '4rem',
        borderColor: 'gray.200',
        _hover: {
          borderColor: 'gray.200',
        },
        _focus: {
          borderColor: state.menuIsOpen ? 'gray.200' : 'gray.600',
        },
      }),
      menu: (provided) => ({
        ...provided,
        p: 0,
        mt: 3.5,
      }),
      placeholder: (provided) => ({
        ...provided,
        color: 'gray.600',
        fontSize: '0.875rem',
      }),
      dropdownIndicator: (provided) => ({
        ...provided,
        bg: 'red',
      }),
    }),
    [SelectVariants.Autocomplete]: (): ChakraStylesConfig => ({
      ...baseCustomSelect,
      indicatorSeparator: () => ({
        display: 'none',
      }),
      dropdownIndicator: () => ({
        display: 'none',
      }),
      control: (provided, state) => ({
        ...provided,
        height: '44px',
        color: 'gray.800',
        backgroundColor: colors.gray[50],
        boxShadow: 'none',
        borderColor: state.isFocused ? colors.gray[600] : colors.gray[200],
        '&:hover': {
          borderColor: state.isFocused ? colors.gray[600] : colors.gray[200],
        },
      }),
      singleValue: () => ({
        display: 'none',
      }),
      menu: (provided) => ({
        ...provided,
        marginTop: 0,
        margin: 0,
        background: 'transparent',
        border: 0,
        boxShadow: 0,
      }),
      option: (provided) => ({
        ...provided,
        color: 'gray.600',
        fontSize: '0.875rem',
        lineHeight: '1.5rem',
        p: 0,
        bg: 'gray.50',
        minH: '2rem',
        pl: '0.75rem',
        _hover: {
          bg: 'white',
        },
      }),
    }),
    [SelectVariants.CustomSelect]: (): ChakraStylesConfig => ({
      ...baseCustomSelect,
    }),
    [SelectVariants.CustomSelectError]: (): ChakraStylesConfig => ({
      ...baseCustomSelect,
      control: (provided) => ({
        ...provided,
        pl: '1rem',
        bg: 'gray.50',
        minW: '4rem',
        minH: '44px',
        borderRadius: '4px',
        borderColor: 'red.400',
        _hover: {
          borderColor: 'red.400',
        },
        _focus: {
          boxShadow: 'none',
          borderColor: 'red.400',
        },
      }),
    }),
  },
}

export const SelectStyles = {
  components: {
    Select,
  },
}
