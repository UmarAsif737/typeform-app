import _ from 'lodash'
import moment from 'moment'

import { JWT } from 'next-auth/jwt'
import CredentialsProvider from 'next-auth/providers/credentials'

import NextAuth, { Session } from 'next-auth'
import settings from 'config/settings'

type SessionPropType = {
  token: JWT
  session: Session
}

const headers = { 'content-type': 'application/json;charset=UTF-8' }

async function refreshAccessToken(tokenObject: JWT) {

  const token = tokenObject as any;
  try {
    const response = await fetch(`${settings.baseURL}/auth/refresh`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ token: token.user.token, user: token.user.user }),
    })

    const tokenResponse = await response.json()

    return {
      ...tokenObject,
      accessToken: tokenResponse.accessToken,
      expiresAt: tokenResponse.expiresAt,
    }
  } catch (error) {
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
      async authorize(credentials) {
        const session = JSON.parse(credentials?.session ?? '{}')
        // This is a hack for updating user in session
        // There is an additional 3 param `session`
        // If it's empty, then it's usual signIn
        // If not, then you need to update the session and therefore the session is simply returned.
        if (_.isEmpty(session)) {
          const response = await fetch(`${settings.baseURL}/auth/sign-in`, {
            method: 'POST',
            headers,
            body: JSON.stringify({ email: credentials?.email, password: credentials?.password }),
          })

          const res = await response.json()

          if (!response.ok) {
            throw new Error(res.message)
          }

          return res
        }

        return session
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: any) {

      if (user) {
        token.accessToken = token
      }

      const accessTokenExpirationDate = moment(token.expiresAt as string).subtract(10, 'minutes')
      const now = moment()

      const expirationInMilliseconds = accessTokenExpirationDate.diff(now, 'milliseconds')

      if (expirationInMilliseconds > 0) {
        return token
      }

      return await refreshAccessToken(token)
    },

    async session({ session, token }: SessionPropType) {
      const tokenObject = token as any
      session.user = tokenObject.user.user;
      session.accessToken = tokenObject.user.token

      return session;
    },

  },

  pages: {
    signIn: '/sign-in',
    signOut: '/sign-out',
  },
  secret: settings.auth.secret,
})
