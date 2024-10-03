'use client'
import { signOut, useSession } from "next-auth/react"
import Button from "./button"
import { useRouter } from "next/navigation"

export default function Header() {
    const { data: session } = useSession()
    const router = useRouter()
    const onClick = () => {
        router.push("/profile")
    }

    return (
        <header className="w-full h-8 flex items-center justify-around border-b-2 ">
            <h1>Bienvenido, {session?.user?.name}</h1>
            <Button bgColor="bg-[#d3d313] hover:bg-[#d3c666]" title="Perfil" onClick={onClick}/>
            <button onClick={() => signOut()} className="w-52 h-6 bg-slate-200 text-blue-700 rounded-md ">Salir</button>
        </header>
    )
}