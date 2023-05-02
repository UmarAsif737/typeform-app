// import { signOut, useSession } from 'next-auth/react'
// import { useRouter } from 'next/router'
// import { useEffect } from 'react'

// export default function useRedirectLoggedUser() {
//   const { data: session } = useSession()
//   const router = useRouter()

//   useEffect(() => {
//     const isSignIn = router.route === '/sign-in'
//     if (!session) {
//       if (isSignIn) {
//         return
//       }
//       router.replace('/sign-in')
//       return
//     }

//     if (session?.error) {
//       signOut({ callbackUrl: '/sign-in' })
//     }

//     if (isSignIn) {
//       const role = session.user.role
//       window.location.replace('/home')
//     }
//   }, [router, session])
// }
