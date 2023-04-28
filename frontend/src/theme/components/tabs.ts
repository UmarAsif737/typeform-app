export const TabsVariants = {
    Default: 'Default',
  }
  
  export const tabsStyles = {
    components: {
      Tabs: {
        variants: {
          [TabsVariants.Default]: {
            tablist: {
              position: 'absolute',
              width: '100%',
              left: 0,
              borderBottom: '1px solid gray',
              borderColor: 'gray.200',
              paddingLeft: '2rem',
            },
            tab: {
              borderBottom: '3px solid transparent',
              padding: '10px 5px',
              marginRight: '4rem',
              position: 'relative',
              fontWeight: 600,
              fontSize: '1rem',
              lineHeight: '1.75rem',
              color: 'gray.700',
              _selected: {
                color: 'gray.800',
                ':after': {
                  content: '""',
                  width: '100%',
                  height: '3px',
                  backgroundColor: 'primary.teal',
                  position: 'absolute',
                  borderRadius: '10px',
                  bottom: '-5px',
                },
              },
            },
            tabpanel: {
              padding: 0,
              paddingTop: '3rem',
            },
          },
        },
      },
    },
  }
  