export const globalStyles = {
  colors: {
    primary: {
      green: '#1aa575',
    },
  },
  styles: {
    global: () => ({
      body: {
        padding: 0,
        margin: 0,
        bg: 'white',
        color: 'gray.500',
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
};
