import { DefaultSession } from 'next-auth'
import 'next-auth'

/**
 * Override the default Next-Auth session type.
 * DON'T rename or move this file!
 */

declare module 'next-auth' {
  interface User {
    role: string
    confirmed: boolean
    email: string
    firstName: string
    id: string,
    accessToken: string,
    companyId: number,
    companyName: string
  }
  interface Session {
    accessToken: string
    user: User & DefaultSession['user']
  }
}
