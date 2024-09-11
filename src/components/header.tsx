'use client'
import { signOut, useSession } from "next-auth/react"

export default function Header() {
    const { data: session } = useSession()

    return (
        <header className="w-full h-8 flex items-center justify-around border-b-2 ">
            <h1>Bienvenido, {session?.user?.name}</h1>
            <button onClick={() => signOut()} className="w-52 h-6 bg-slate-200 text-blue-700 rounded-md ">Salir</button>
        </header>
    )
}