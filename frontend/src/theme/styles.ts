import { Dict } from '@chakra-ui/utils'

export const globalStyles = {
  colors: {
    primary: {
      green: '#1aa575',
      teal: '#B7E2EB',
    },
    gray: {
      50: '#F8F9FA',
      100: '#F5F5F5',
      200: '#CFCFCF',
      300: '#ABB1BF',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#13141F',
      '800_opacity09': 'rgba(19,20,31,0.9)',
      '50_opacity03': 'rgba(255, 255, 255, 0.3)',
      '50_opacity05': 'rgba(255, 255, 255, 0.5)',
      150: '#E7E7E7',
    },
    teal: {
      primary: '#8DE7EC',
      100: '#E0F3FC',
      600: '#52C3D2',
      800: '#3797AC',
    },
    red: {
      400: '#FF7179',
      800: '#F22556',
      900: '#F02424',
    },
    green: {
      400: '#E7EC8E',
      800: '#8DECA2',
    },
    yellow: {
      400: '#FFE0A3',
      800: '#FAC764',
    },
  },
  /**
   * @see https://chakra-ui.com/docs/styled-system/features/semantic-tokens
   * @see https://styled-system.com/theme-specification/#key-reference for valid keys
   */
  semanticTokens: {
    colors: {
      error: 'red.400',
      success: '#8DECA2',
      warning: '#FAC764',
      notification: '#BADFF0',
      active: 'primary.green',
      inactive: 'gray.400',
      inValidation: 'yellow.400',
      activeProject: 'green.800',
      deactivated: 'red.800',
      denied: 'red.400',
      skeletonGray: 'CFCFCF',
    },
  },
  styles: {
    global: (props: Dict<any>) => ({
      body: {
        padding: 0,
        margin: 0,
        fontFamily: 'Source Sans Pro, sans-serif',
        fontSize: '16px',
      },
      html: {
        fontFamily: 'Source Sans Pro, sans-serif',
        fontSize: '16px',
        scrollBehavior: 'smooth',
      },
    }),
  },
}
