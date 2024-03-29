import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'
import { authOptions } from '@/lib/auth'

// export default withAuth(
//   function middleware(req) {
//     // callbacks.authorizedがtrueの場合のみ進入できる
//     console.log('in middleware: ', req.nextauth.token)
//   },
//   {
//     callbacks: {
//       // 認可に関する処理。ロールが `admin` ならOK
//       authorized: ({ token }) => {
//         console.log('in authorized: ', token)
//         // return token?.role === 'admin'
//         if (token) return true
//       },
//     },
//   }
// )

export { default } from 'next-auth/middleware'
export const config = {
  matcher: ['/((?!register|api|sign-in|sign-up).*)'],
}
