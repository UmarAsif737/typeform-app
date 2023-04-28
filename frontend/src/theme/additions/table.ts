const SimpleTableTypography = {
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
    fontWeight: '400',
    fontFamily: 'Source Sans Pro, sans-serif',
  }
  const SimpleTableHeader = {
    baseStyle: {
      ...SimpleTableTypography,
      color: 'gray.700',
      py: '1.125rem',
      borderBottom: '2px solid',
      borderBottomColor: 'gray.200',
      textTransform: 'initial',
      _first: {
        pl: '3rem',
      },
      _last: {
        pr: '3rem',
      },
    },
  }
  const SimpleTableBody = {
    baseStyle: {
      ...SimpleTableTypography,
      color: 'gray.600',
      pt: '1.5rem',
      pb: '1.875rem',
      borderTop: '1px solid',
      borderTopColor: 'gray.200',
      _first: {
        pl: '3rem',
      },
      _last: {
        pr: '3rem',
      },
    },
  }
  
  export const SimpleTableComponent = {
    components: {
      SimpleTableHeader,
      SimpleTableBody,
    },
  }
  