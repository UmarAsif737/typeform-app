export const TextVariants = {
    P16Standart: 'P16Standart',
    P16Semibold: 'P16Semibold',
    P14Standart: 'P14Standart',
    P14Semibold: 'P14Semibold',
    P14Bold: 'P14Bold',
    P12Standart: 'P12Standart',
    P12Semibold: 'P12Semibold',
    P12CAPS: 'P12CAPS',
    LabelStandart: 'LabelStandart',
    LabelSemibold: 'LabelSemibold',
    LabelBold: 'LabelBold',
    SharedPageCard: 'sharedPageCard',
    SharedPageCardHint: 'sharedPageCardHint',
    Tooltip: 'tooltip',
    Link: 'link',
    Error: 'error',
  }
  
  export const textStyles = {
    components: {
      Text: {
        variants: {
          [TextVariants.SharedPageCard]: {
            lineHeight: '1.5rem',
            fontSize: '1rem',
            color: 'gray.800',
          },
          [TextVariants.SharedPageCardHint]: {
            lineHeight: '1.5rem',
            fontSize: '1rem',
            color: 'gray.300',
          },
          [TextVariants.P16Standart]: {
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '1.125rem',
          },
          [TextVariants.P16Semibold]: {
            fontWeight: 600,
            fontSize: '1rem',
            lineHeight: '1.75rem',
          },
          [TextVariants.P14Standart]: {
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: '1.5rem',
          },
          [TextVariants.P14Semibold]: {
            fontWeight: 600,
            fontSize: '0.875rem',
            lineHeight: '1.5rem',
          },
          [TextVariants.P14Bold]: {
            fontWeight: 700,
            fontSize: '0.875rem',
            lineHeight: '1.5rem',
          },
          [TextVariants.P12Standart]: {
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: '1.5rem',
          },
          [TextVariants.P12Semibold]: {
            fontWeight: 600,
            fontSize: '0.75rem',
            lineHeight: '1.5rem',
          },
          [TextVariants.P12CAPS]: {
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: '1.5rem',
            textTransform: 'uppercase',
          },
          [TextVariants.LabelStandart]: {
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '1rem',
          },
          [TextVariants.LabelSemibold]: {
            fontWeight: 600,
            fontSize: '11px',
            lineHeight: '1rem',
          },
          [TextVariants.LabelBold]: {
            fontWeight: 700,
            fontSize: '11px',
            lineHeight: '1rem',
          },
          [TextVariants.Tooltip]: {
            color: 'white',
            fontSize: '0.75rem',
            lineHeight: '1.0625rem',
          },
          [TextVariants.Link]: {
            fontSize: '0.75rem',
            lineHeight: '1.5rem',
            textDecoration: 'underline',
          },
          [TextVariants.Error]: {
            color: 'red.400',
            fontSize: '11px',
          },
        },
        baseStyle: {
          color: 'gray.700',
          fontSize: '1rem',
          lineHeight: '1.75rem',
        },
      },
    },
  }
  