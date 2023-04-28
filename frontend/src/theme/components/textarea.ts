export const TextareaVariants = {
    Enabled: 'Primary',
    Filled: 'Filled',
    Active: 'Active',
    Error: 'Error',
    ReadOnly: 'ReadOnly',
  }
  
  const TextareaDefault = {
    baseStyle: {
      lineHeight: '1.5rem',
      fontSize: '0.875rem',
      borderWidth: '1px',
      borderRadius: 4,
      p: 3,
      bg: 'red',
    },
  }
  
  export const textareaStyles = {
    components: {
      Textarea: {
        variants: {
          [TextareaVariants.Enabled]: {
            _placeholderShown: {
              borderColor: 'gray.200',
            },
            ...TextareaDefault.baseStyle,
            color: 'gray.800',
            bg: 'gray.50',
            borderColor: 'gray.600',
            _focus: {
              borderColor: 'gray.600',
            },
          },
          [TextareaVariants.Active]: {
            ...TextareaDefault.baseStyle,
            borderColor: 'gray.600',
            bg: 'green',
            color: 'gray.800',
          },
          [TextareaVariants.Filled]: {
            ...TextareaDefault.baseStyle,
            color: 'gray.800',
            bg: 'gray.50',
            borderColor: 'gray.600',
          },
          [TextareaVariants.Error]: {
            ...TextareaDefault.baseStyle,
            bg: 'gray.50',
            color: 'gray.700',
            borderColor: 'red.400',
          },
          [TextareaVariants.ReadOnly]: {
            ...TextareaDefault.baseStyle,
            color: 'gray.800',
            bg: 'gray.200',
          },
        },
      },
    },
  }
  