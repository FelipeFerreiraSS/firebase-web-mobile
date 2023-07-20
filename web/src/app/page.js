import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      <div className="z-10 w-full max-w-5xl items-center font-mono text-sm lg:flex">
        
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <Link className="text-blue-500" href="/login">Login</Link>
        </p>
        
      </div>

      <div className="relative place-items-center before:absolute before:h-[30px] before:w-[40px]  ">

        <div className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Teste
          </h2>
          <p className={`m-0 max-w-[100ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </div>

      </div>

    </main>
  )
}
