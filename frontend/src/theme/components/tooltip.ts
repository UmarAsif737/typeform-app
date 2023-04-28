import { cssVar } from '@chakra-ui/theme-tools'

const $arrowBg = cssVar('popper-arrow-bg')

export const TooltipVariants = {
  Multiline: 'multiline',
}

export const tooltipStyles = {
  components: {
    Tooltip: {
      baseStyle: {
        bg: 'gray.800_opacity09',
        [$arrowBg.variable]: '#292A34',
        color: 'white',
        fontSize: '0.75rem',
        lineHeight: '1.0625rem',
        borderRadius: '4px',
        px: '1rem',
        py: '0.625rem',
      },
      variants: {
        [TooltipVariants.Multiline]: {
          px: '0.75rem',
          py: '0.375rem',
        },
      },
    },
  },
}
