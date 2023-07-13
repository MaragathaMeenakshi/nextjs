import { AuthProvider } from '@/components/firebase/authcontext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
