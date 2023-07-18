import Link from 'next/link'

export default function Login() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
            <h2 className={`mb-3 text-2xl font-semibold`}>Login</h2>
        </div>
        <div>
            <Link href="/registro">Cadastro</Link>
        </div>
        <div>
            <Link href="/">Home</Link>
        </div>
        </main>
    )
}
