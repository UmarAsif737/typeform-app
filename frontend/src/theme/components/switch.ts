export const SwitchVariants = {
    Disabled: 'disabled',
  }
  
  export const switchStyles = {
    components: {
      Switch: {
        baseStyle: {
          track: {
            bg: 'gray.300',
            _checked: {
              bg: 'primary.teal',
            },
            _focus: {
              boxShadow: 'none',
            },
          },
        },
        variants: {
          [SwitchVariants.Disabled]: {
            track: {
              _checked: {
                bg: 'gray.300',
              },
            },
          },
        },
      },
    },
  }
  