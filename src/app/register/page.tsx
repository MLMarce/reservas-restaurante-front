'use client'
import { AuthService } from "@/services/auth-service";
import { registerFormValidation } from "@/utils/form-validations";
import { error } from "console";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        passwordConfirm: ''
    })
    const [errors, setErrors] = useState({})

    const authService = new AuthService()

    const handleInputChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setErrors(registerFormValidation(formData))
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setErrors(registerFormValidation(formData))
        if(!errors){
            try{
                authService.registerUser({name: formData.name, email: formData.email, password: formData.password, phone: Number(formData.phone)})
            } catch(error){
                console.error(error)
            }
        }
        console.log("Registro completado");
    }
    return (
        <div className="h-screen w-screen relative flex flex-col justify-center items-center bg-[#974b15]/20 overflow-hidden">
            <img src={'/login-screen.png'} className="absolute min-h-full w-full object-cover -z-10" />
            <h1 className="text-4xl font-bold drop-shadow-[0px_0px_1px_rgba(0,0,0,1)] shadow-[0px_0px_10px_rgba(0,0,0,1)] px-2 backdrop-blur-sm">Regístrate</h1>
            <form className="relative h-1/2 w-2/3 min-w-[400px] max-w-[600px] flex flex-col p-4 px-10 justify-around" onSubmit={handleSubmit}>
                <input name="name" className="w-full h-10 p-2 rounded-md outline-none bg-[#974B15] placeholder:text-slate-300 text-slate-50" type="text" placeholder="Usuario" value={formData.name} onChange={handleInputChange} />
                <input name="email" className="w-full h-10 p-2 rounded-md outline-none bg-[#974B15] placeholder:text-slate-300 text-slate-50" type="text" placeholder="Correo Electrónico" value={formData.email} onChange={handleInputChange} />
                <input name="phone" className="w-full h-10 p-2 rounded-md outline-none bg-[#974B15] placeholder:text-slate-300 text-slate-50" type="number" placeholder="Teléfono" value={formData.phone} onChange={handleInputChange}/>
                <input name="password" className="w-full h-10 p-2 rounded-md outline-none bg-[#974B15] placeholder:text-slate-300 text-slate-50" type="password" placeholder="Contraseña" value={formData.password} onChange={handleInputChange} />
                <input name="passwordConfirm" className="w-full h-10 p-2 rounded-md outline-none bg-[#974B15] placeholder:text-slate-300 text-slate-50" type="password" placeholder="Confirmar Contraseña" value={formData.passwordConfirm} onChange={handleInputChange} />
                <button disabled={Object.values(formData).some(data => !data) || Object.keys(errors).some(e => e)} className="w-full h-10 p-2 rounded-md bg-[#974B15] hover:saturate-150 font-semibold" type="submit">Registrarse</button>
                
            </form>
            <div className="w-2/3 min-w-[400px] max-w-[600px] flex flex-col gap-3 px-10 items-center">
                <p className="h-9">{Object.values(errors).some(e => e) ? 'error': null}</p>
                <p className="text-xl  drop-shadow-[0px_0px_1px_rgba(0,0,0,1)]">¿Ya tienes una cuenta?</p>
                <Link href={'/login'} className="w-full h-10 p-2 rounded-md bg-[#974B15] hover:saturate-150 font-semibold text-center">Iniciar Sesión</Link>
            </div>
        </div>
    )
}