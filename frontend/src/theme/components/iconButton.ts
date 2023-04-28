export const IconButtonVariants = {
    Star: 'star',
    XXS: 'xxs',
  }
  
  export const iconButtonStyles = {
    components: {
      Button: {
        variants: {
          [IconButtonVariants.Star]: {
            bg: 'white',
            borderWidth: 1,
            borderColor: 'gray.200',
          },
          [IconButtonVariants.XXS]: {
            w: 4,
            minW: 4,
            h: 4,
            _hover: {
              color: 'gray.800',
            },
          },
        },
      },
    },
  }
  