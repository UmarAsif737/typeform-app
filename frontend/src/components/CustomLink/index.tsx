import { Link, LinkProps } from '@chakra-ui/react'
import NextLink from 'next/link'

type CustomLinkProps = React.FC &
  LinkProps & {
    href: string
    linkDisabled?: boolean
    children: React.ReactNode
  }

const CustomLink: React.FC<CustomLinkProps> = ({ href, linkDisabled, children, ...linkProps }: CustomLinkProps) => {
  return (
    <NextLink href={href} passHref style={{ pointerEvents: linkDisabled ? 'none' : 'auto' }}>
      <Link {...linkProps} pointerEvents={linkDisabled ? 'none' : 'auto'}>
        {children}
      </Link>
    </NextLink>
  )
}

export default CustomLink
