'use client'
import { AuthService } from "@/services/auth-service";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function LoginPage() {
    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (session?.user?.email) {
            const authService = new AuthService()
            authService.createUserAuth(session.user.email).then((response) => {
                console.log(response)
            })

        }
    }, [session])

    return (
        <div className="h-screen w-screen relative flex flex-col justify-center items-center bg-[#974b15]/20 overflow-hidden">
            <img src={'/login-screen.png'} className="absolute min-h-full w-full object-cover -z-10" />
            <h1 className="text-4xl font-bold drop-shadow-[0px_0px_1px_rgba(0,0,0,1)] shadow-[0px_0px_10px_rgba(0,0,0,1)] px-2 backdrop-blur-sm">¡Bienvenidos!</h1>
            <form className="relative h-1/2 w-2/3 min-w-[400px] max-w-[600px] flex flex-col p-4 px-10 justify-around">
                <input className="w-full h-10 p-2 rounded-md outline-none bg-[#974B15] placeholder:text-slate-300 text-slate-50" type="text" placeholder="Username" />
                <input className="w-full h-10 p-2 rounded-md outline-none bg-[#974B15] placeholder:text-slate-300 text-slate-50" type="password" placeholder="Password" />
                <button className="w-full h-10 p-2 rounded-md bg-[#974B15] hover:saturate-150 font-semibold" type="submit">Iniciar Sesión</button>
                <button onClick={() => signIn()} type="button" className="w-full h-10 p-2 rounded-md bg-[#974B15] hover:saturate-150 font-semibold">Iniciar con Google</button>
            </form>
            <div className="w-2/3 min-w-[400px] max-w-[600px] flex flex-col gap-3 px-10 items-center">
                <p className="text-xl  drop-shadow-[0px_0px_1px_rgba(0,0,0,1)]">¿No tienes una cuenta?</p>
                <Link href={'/register'} className="w-full h-10 p-2 rounded-md bg-[#974B15] hover:saturate-150 font-semibold text-center">Registrarse</Link>
            </div>
        </div>
    )
}