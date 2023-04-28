import { getToken } from 'next-auth/jwt'
// eslint-disable-next-line
import { NextRequest, NextResponse } from 'next/server'
import settings from 'config/settings'

export async function middleware(req: NextRequest): Promise<NextResponse> {
    const session = await getToken({ req, secret: settings.auth.secret })
    const signOutURL = req.nextUrl.clone()
    signOutURL.pathname = '/sign-out'
    
    if (!session) {
        if (req.nextUrl.pathname.startsWith('/sign-in')) {
            return NextResponse.next()
        }
        return NextResponse.redirect(signOutURL)
    }

  return NextResponse.next()
}

export const config = {
  matcher: [],
}
