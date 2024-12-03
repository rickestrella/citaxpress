"use client";
import React from "react";
import logo from "@/app/assets/cx_logo.png";
import Link from "next/link";
import bg2 from "@/app/assets/bg-2.webp";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const Login = () => {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget)
    const citizenId = formData.get('citizenId')
    const password = formData.get('password')

    const response = await fetch('api.auth/login', {
        method: "POST",
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify({citizenId, password})
    });

    if (response.ok) {
        router.push('/');
    } else {
        throw new Error("Las credenciales ingresadas no coinciden con los registros.");
    }
  }
  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url('${bg2.src}')` }}
    >
      <div className="rounded-xl bg-gray-600 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <Image src={logo.src} width={90} height={90} alt="background" />
            <h1 className="mb-2 text-2xl">CitaXpress</h1>
            {/* <span className="text-gray-300">Te damos la bienvenida</span> */}
          </div>
          <form onSubmit={handleSubmit} autoComplete="off" method="POST">
            <div className="mb-4 text-lg">
              <input
                className={`rounded-3xl border-none bg-white bg-opacity-75 px-6 py-2 text-center text-inherit placeholder-gray-400 shadow-lg outline-none backdrop-blur-md`}
                type="tel"
                name="citizenId"
                placeholder="Cédula, Pasaporte o RUC"
                autoComplete="off"
              />
            </div>

            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-white bg-opacity-75 px-6 py-2 text-center text-inherit placeholder-slate-400 shadow-lg outline-none backdrop-blur-md"
                type="password"
                name="password"
                autoComplete="off"
                placeholder="Contraseña"
              />
            </div>
            <div className="mt-8 flex flex-col justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-3xl bg-sky-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-sky-600"
              >
                Iniciar Sesión
              </button>
              <p className="text-sm text-center text-white mt-5">
                ¿Aún no tienes una cuenta?
              </p>
              <Link
                href="/register"
                className="text-base text-center text-indigo-600 hover:underline hover:text-indigo-500"
              >
                Regístrate aquí
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
