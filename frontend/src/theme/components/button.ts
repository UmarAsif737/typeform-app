import type { ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 'full',
  },
};

export const ButtonVariants = {
  Primary: 'primary',
  LightTeal: 'lightTeal',
  WhiteBgIconOnly: 'whiteBgIconOnly',
  Outline: 'outline',
  Secondary: 'Secondary',
  White: 'White',
  Dark: 'dark',
  Red: 'red',
  Transparent: 'transparent',
  Success: 'Success',
  StartChat: 'StartChat',
}

export const buttonStyles = {
  components: {
    Button: {
      variants: {
        [ButtonVariants.Primary]: {
          bg: 'primary.green',
          fontWeight: 'normal',
          color: 'white',
          _hover: {
            bg: 'primary.green',
            color: 'white',
            _disabled: {
              color: 'gray.400',
            },
          },
          _disabled: {
            color: 'gray.400',
            bg: 'none',
            borderColor: 'gray.200',
            borderWidth: 1,
          },
        },
        [ButtonVariants.Secondary]: {
          bg: 'white',
          color: 'gray.800',
          border: '1px',
          borderColor: 'primary.green',
          p: 0,
          _hover: {
            bg: 'gray.300',
            color: 'white',
          },
        },
        [ButtonVariants.LightTeal]: {
          bg: 'teal.100',
          color: 'gray.600',
          border: 'none',
          _hover: {
            bg: 'gray.800',
            color: 'white',
          },
        },
        [ButtonVariants.White]: {
          bg: 'white',
          color: 'gray.800',
          _hover: {
            bg: 'gray.800',
            color: 'white',
          },
        },
        [ButtonVariants.WhiteBgIconOnly]: {
          bg: 'white',
          p: 0,
        },
        [ButtonVariants.Dark]: {
          bg: 'gray.700',
          color: 'gray.50',
          border: 'none',
          _hover: {
            bg: 'gray.800',
            color: 'white',
            _disabled: {
              bg: 'gray.200',
            },
          },
          _disabled: {
            bg: 'gray.200',
          },
        },
        [ButtonVariants.Red]: {
          bg: 'red.400',
          color: 'gray.50',
          border: 'none',
          _hover: {
            bg: 'gray.800',
            color: 'white',
          },
        },
        [ButtonVariants.Transparent]: {
          bg: 'transparent',
          border: 'none',
        },
        [ButtonVariants.Outline]: {
          color: 'gray.400',
        },
        [ButtonVariants.Success]: {
          bg: 'success',
          color: 'gray.700',
          border: 'none',
        },
        [ButtonVariants.StartChat]: {
          bg: 'white',
          border: '1px solid transparent',
          borderColor: 'gray.200',
          height: '66px',
          borderRadius: '15px',
          padding: 5,
          _hover: {
            bg: 'gray.800',
            color: 'white',
          },
        },
      },
      sizes: {
        xs: {
          fontSize: '0.6875rem',
          px: 4,
          py: 1,
        },
        sm: {
          lineHeight: '1.5rem',
          fontSize: '0.75rem',
          px: 4,
          py: 1,
        },
        md: {
          fontSize: '0.875rem',
          fontWeight: 400,
          lineHeight: '1.5rem',
          px: 5,
          py: 3,
        },
        lg: {
          fontSize: '1rem',
          lineHeight: '1.75rem',
          px: 6,
          py: 3,
        },
      },
      baseStyle: {
        borderRadius: '4px',
        color: 'gray.700',
        _focus: {
          boxShadow: 'none',
        },
      },
    },
  },
}
