import moment from 'moment'
import _ from 'lodash'
import { JWT } from 'next-auth/jwt'
import CredentialsProvider from 'next-auth/providers/credentials'

import NextAuth, { Session, User } from 'next-auth'
import settings from 'config/settings'

type SessionPropType = {
  token: JWT
  session: Session
}

const headers = { 'content-type': 'application/json;charset=UTF-8' }

async function refreshAccessToken(tokenObject: any) {
  const token = tokenObject as any;

  try {


  
    const response = await fetch(`${settings.baseURL}/auth/refresh`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ token: token.accessToken, user: token.user }),
    })

    
    const tokenResponse = await response.json()
    return {
      user: tokenResponse.user,
      accessToken: tokenResponse.accessToken,
    }

  } catch (error) {
    console.log(error)
    return {
      ...tokenObject,
      error: 'RefreshAccessTokenError',
    }
  }
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: 'text' },
        password: { type: 'password' },
        session: { type: 'text' },
      },
      async authorize(credentials): Promise<User | null> {

        const response = await fetch(`http://localhost:3001/auth/sign-in`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });
        const user  = await response.json();

        if (user) {
          return user
        } else {
        // If you return null then an error will be displayed advising the user to check their details.
          throw new Error('something went wrong while signing in')
        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],

  
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    
    async session({ session, token, user }) {
      session.user = token as any;
      return session
    }
  },

  pages: {
    signIn: '/sign-in',
    signOut: '/sign-out',
  },
  secret: settings.auth.secret,
})
