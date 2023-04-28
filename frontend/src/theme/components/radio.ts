export const RadioVariants = {
    Primary: 'primary',
  }
  
  export const radioStyles = {
    components: {
      Radio: {
        variants: {
          [RadioVariants.Primary]: {
            bg: 'primary.teal',
            color: 'gray.800',
  
            label: {
              fontSize: '0.875rem',
              color: 'gray.700',
            },
            _hover: {
              bg: 'gray.800',
              color: 'white',
            },
          },
        },
        baseStyle: {
          control: {
            borderWidth: 1,
            borderColor: 'gray.700',
            fontSize: '14px',
            _checked: {
              bg: 'primary.teal',
              borderWidth: 2,
              borderColor: 'primary.teal',
              _hover: {
                bg: 'primary.teal',
                borderColor: 'primary.teal',
              },
            },
            _focus: {
              boxShadow: 'none',
            },
            _disabled: {
              borderWidth: 1,
              borderColor: 'gray.200',
              _checked: {
                borderWidth: 2,
                bg: 'gray.200',
                _before: {
                  bg: 'white',
                },
              },
            },
          },
          label: {
            fontSize: '14px',
          },
        },
      },
    },
  }
  