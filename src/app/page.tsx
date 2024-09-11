'use client'
import Header from "@/components/header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session } = useSession()
  const router = useRouter()
  if (!session?.user?.name) {
    router.push('/login')
  }
  return (
    <main className="pt-2 w-screen h-screen border-white flex flex-col">
      <Header />
      <div className="relative w-screen flex-1 bg-yellow-50 flex flex-col overflow-auto snap-x snap-mandatory scroll-smooth overflow-y-hidden">
        <div className="w-max md:w-full flex items-center text-black text-xl font-semibold">
          <h3 className="w-screen text-center md:w-1/4 border snap-center">Exterior Izquierdo</h3>
          <h3 className="w-screen text-center md:w-1/2 border snap-center">Interior</h3>
          <h3 className="w-screen text-center md:w-1/4 border snap-center">Exterior Derecho</h3>
        </div>
        <div className="w-max md:w-full h-full flex items-center text-black">
          <div className="w-screen h-full text-center md:w-1/4 flex flex-col justify-center gap-8 items-center border bg-slate-500 snap-center">
            <div className="w-24 h-24 bg-black rounded-lg"></div>
            <div className="w-24 h-24 bg-black rounded-lg"></div>
            <div className="w-24 h-24 bg-black rounded-lg"></div>
            <div className="w-24 h-24 bg-black rounded-lg"></div>
          </div>
          <div className="w-screen h-full text-center md:w-1/2 flex-wrap gap-8 flex flex-col justify-center items-center border bg-slate-500 snap-center">
            <div className="w-24 h-24 bg-black rounded-lg"></div>
            <div className="w-24 h-24 bg-black rounded-lg"></div>
            <div className="w-24 h-24 bg-black rounded-lg"></div>
            <div className="w-24 h-24 bg-black rounded-lg"></div>
            <div className="w-24 h-24 bg-black rounded-lg"></div>
            <div className="w-24 h-24 bg-black rounded-lg"></div>
            <div className="w-24 h-24 bg-black rounded-lg"></div>
            <div className="w-24 h-24 bg-black rounded-lg"></div>
          </div>
          <div className="w-screen h-full text-center md:w-1/4 flex flex-col justify-center gap-8 items-center border bg-slate-500 snap-center">
            <div className="w-24 h-24 bg-black rounded-lg"></div>
            <div className="w-24 h-24 bg-black rounded-lg"></div>
            <div className="w-24 h-24 bg-black rounded-lg"></div>
            <div className="w-24 h-24 bg-black rounded-lg"></div>
          </div>
        </div>
      </div>
      <footer className="text-center">este es el footer</footer>
    </main>
  );
}
