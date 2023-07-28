import Header from '../components/Header'
import Footer from '../components/Footer'
import '@/styles/globals.css'
import { AuthProvider } from '../context/AuthContext'

export default function App({ Component, pageProps }) {
  return ( 
    <AuthProvider>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  )
}
