export const InputVariants = {
    Primary: 'primary',
    Filled: 'filled',
    Error: 'error',
    LoginEnabled: 'loginPrimary',
    LoginFilled: 'loginFilled',
    LoginError: 'loginError',
    LoginActive: 'loginActive',
    WithBorder: 'withBorder',
    WithBorderFilled: 'withBorderFilled',
    ReadOnly: 'ReadOnly',
  }
  
  const InputDefault = {
    baseStyle: {
      field: {
        lineHeight: '1.5rem',
        fontSize: '0.875rem',
        borderWidth: '1px',
        borderRadius: 4,
        h: '44px',
      },
    },
  }
  
  const InputLoginDefault = {
    baseStyle: {
      field: {
        _disabled: {
          bg: 'gray.200',
          border: 0,
        },
        lineHeight: '1.5rem',
        fontSize: '0.875rem',
        borderWidth: '1px',
        borderRadius: 4,
        h: '44px',
      },
    },
  }
  
  export const inputStyles = {
    components: {
      Input: {
        baseStyle: {
          field: {
            _disabled: {
              bgColor: 'gray.200',
              border: 0,
            },
          },
        },
        variants: {
          [InputVariants.Primary]: {
            field: {
              ...InputDefault.baseStyle.field,
              color: 'gray.300',
              borderColor: 'gray.100',
              _focus: {
                borderColor: 'gray.400',
                color: 'gray.700',
              },
            },
          },
          [InputVariants.Filled]: {
            field: {
              ...InputDefault.baseStyle.field,
              bg: 'gray.50',
              color: 'gray.800',
              _focus: {
                borderColor: 'gray.400',
                color: 'gray.700',
              },
            },
          },
          [InputVariants.Error]: {
            field: {
              ...InputDefault.baseStyle.field,
              bg: 'gray.50',
              color: 'gray.800',
              borderColor: 'red.400',
            },
          },
          [InputVariants.LoginEnabled]: {
            field: {
              _placeholderShown: {
                borderColor: 'gray.200',
                bg: 'gray.50',
              },
              ...InputLoginDefault.baseStyle.field,
              color: 'gray.800',
              bg: 'gray.50',
              borderColor: 'gray.600',
              _focus: {
                borderColor: 'gray.600',
              },
            },
          },
          [InputVariants.LoginActive]: {
            field: {
              ...InputLoginDefault.baseStyle.field,
              borderColor: 'gray.600',
              bg: 'gray.50',
              color: 'gray.800',
            },
          },
          [InputVariants.LoginFilled]: {
            field: {
              _placeholderShown: {
                borderColor: 'gray.200',
                bg: 'gray.50',
              },
              ...InputLoginDefault.baseStyle.field,
              color: 'gray.800',
              bg: 'gray.50',
              borderColor: 'gray.600',
              _focus: {
                borderColor: 'gray.600',
                bg: 'gray.50',
                color: 'gray.800',
              },
            },
          },
          [InputVariants.LoginError]: {
            field: {
              ...InputLoginDefault.baseStyle.field,
              bg: 'gray.50',
              color: 'gray.700',
              borderColor: 'red.400',
            },
          },
          [InputVariants.WithBorder]: {
            field: {
              _placeholderShown: {
                borderColor: 'gray.200',
                bg: 'gray.50',
              },
              ...InputDefault.baseStyle.field,
              color: 'gray.800',
              bg: 'gray.50',
              borderColor: 'gray.600',
              _focus: {
                borderColor: 'gray.600',
              },
            },
          },
          [InputVariants.WithBorderFilled]: {
            field: {
              ...InputDefault.baseStyle.field,
              bg: 'gray.50',
              color: 'gray.800',
              borderColor: 'gray.600',
            },
          },
          [InputVariants.ReadOnly]: {
            field: {
              ...InputLoginDefault.baseStyle.field,
              bg: 'gray.200',
              color: 'gray.800',
            },
          },
        },
      },
    },
  }
  