import { DefaultSession } from 'next-auth'
import 'next-auth'

/**
 * Override the default Next-Auth session type.
 * DON'T rename or move this file!
 */

declare module 'next-auth' {
  interface User {
    user: {
      role: string
      email: string
      firstName: string
      id: number,
      companyId: number
      companyName: string
    }
    accessToken: string
  }
  
  interface Session {
    accessToken: string
    user: User & DefaultSession['user']
  }
}
