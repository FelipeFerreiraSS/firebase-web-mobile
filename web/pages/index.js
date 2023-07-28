import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Login from '../components/Login'
import { useAuth } from '../context/AuthContext'
import UserDashboard from '../components/UserDashboard'

const inter = Inter({ subsets: ['latin'] })

  //<Image
  //  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
  //  src="/next.svg"
  //  alt="Next.js Logo"
  //  width={180}
  //  height={37}
  //  priority
  ///>

  //<a
  //  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  //  target="_blank"
  //  rel="noopener noreferrer"
  //>

export default function Home() {
  const { currentUser } = useAuth()

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>

      <div className="w-full max-w-5xl items-center font-mono text-sm lg:flex">
        {!currentUser && <Login />}
        {currentUser && <UserDashboard/>}
      </div>
      
    </main>
  )
}
