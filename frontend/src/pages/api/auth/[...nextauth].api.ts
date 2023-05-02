import moment from 'moment'

import { JWT } from 'next-auth/jwt'
import CredentialsProvider from 'next-auth/providers/credentials'

import NextAuth, { Session, User } from 'next-auth'
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
      body: JSON.stringify({ token: token.accessToken, user: token.user }),
    })

    const tokenResponse = await response.json()
    return tokenResponse

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
      async authorize(credentials): Promise<User | null> {

        const response = await fetch(`${settings.baseURL}/auth/sign-in`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const res = await response.json();

        if (res) {
          return {
            user: {
              role: res.user.role,
              email: res.user.email,
              firstName: res.user.firstName,
              id: res.user.id,
              companyId: res.user.companyId,
              companyName: res.user.companyName,
            },
            accessToken: res.token,
          } as User

        } else {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: any) {
      // if (user) {
      //   token.accessToken = user.accessToken
      // }
      return await refreshAccessToken(token)
    },

    async session({ session, token }: SessionPropType) {
      const tokenObject = token as any

      // session.user = tokenObject.user.user;
      // session.accessToken = tokenObject.user.token

      // return session;

      // session.user = token as any;
      return session;
    },

  },

  pages: {
    signIn: '/sign-in',
    signOut: '/sign-out',
  },
  secret: settings.auth.secret,
})
