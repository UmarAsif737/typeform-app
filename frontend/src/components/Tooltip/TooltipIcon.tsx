import { Box, IconProps, Text, TextProps, Tooltip, TooltipProps } from '@chakra-ui/react'
import { FC, ReactElement, ReactNode, forwardRef } from 'react'

import { InfoIcon } from 'components/Icons'
import { TextVariants } from 'theme'

interface ToolTipIconProps extends Partial<TooltipProps> {
  label: string | ReactElement
  containerProps?: TextProps
  iconProps?: IconProps
  CustomIcon?: any
}

const ToolTipDefaultChildren = forwardRef<HTMLDivElement>(({ ...props }, ref) => (
  <Text ref={ref} as="span" mr="2px" color="gray.500">
    <InfoIcon boxSize={4} _hover={{ color: 'gray.800' }} {...props} />
  </Text>
))
ToolTipDefaultChildren.displayName = 'ToolTipDefaultChildren'

const TooltipChildren = forwardRef<HTMLDivElement, { children: ReactNode }>(({ children, ...props }, ref) => (
  <Box ref={ref} {...props} width="fit-content">
    {children}
  </Box>
))
TooltipChildren.displayName = 'TooltipChildren'

const ToolTipIcon: FC<ToolTipIconProps> = ({
  children,
  containerProps,
  iconProps,
  CustomIcon,
  ...props
}: ToolTipIconProps) => {
  return (
    <Text as="span" {...containerProps}>
      <Tooltip hasArrow placement="top-start" {...props}>
        {children ? (
          <TooltipChildren>{children}</TooltipChildren>
        ) : (
          <Text as="span" mr="2px" color="gray.500">
            <>{CustomIcon ? <CustomIcon /> : <InfoIcon boxSize={4} _hover={{ color: 'gray.800' }} {...iconProps} />}</>
          </Text>
        )}
      </Tooltip>
    </Text>
  )
}

interface MultilineToolTipIconProps extends Partial<TooltipProps> {
  text?: string
  containerProps?: TextProps
  iconProps?: IconProps
}

const MultilineToolTipIcon: FC<MultilineToolTipIconProps> = ({
  text,
  containerProps,
  iconProps,
  children,
  ...props
}: MultilineToolTipIconProps) => {
  const customLabel = (
    <>
      {text?.split('\\n').map((t: string, i: number) => (
        <Text key={i} variant={TextVariants.Tooltip}>
          {t}
        </Text>
      ))}
    </>
  )

  return (
    <Text as="span" {...containerProps}>
      <Tooltip hasArrow label={customLabel} {...props}>
        {children ? children : <ToolTipDefaultChildren {...iconProps} />}
      </Tooltip>
    </Text>
  )
}

export default ToolTipIcon
export { MultilineToolTipIcon }
