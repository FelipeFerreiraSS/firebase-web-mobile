import Link from "next/link";

export default function Registro() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <h2 className={`mb-3 text-2xl font-semibold`}>Registro</h2>
        </div>
        <div>
            <Link href="/login">Login</Link>
        </div>
        <div>
            <Link href="/">Home</Link>
        </div>
      </main>
    )
  }
  