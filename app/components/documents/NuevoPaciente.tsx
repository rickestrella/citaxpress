"use client";
import React, { FormEvent, useState } from "react";
import hashPassword from "@/lib/hashPassword";
import { createPortal } from "react-dom";
import Notification from "../Notification";
import { validarDocumento } from "@/lib/documentValidator";

type PatientFormData = {
  citizenId: string;
  lastName: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  role: string;
};

const NuevoPaciente = () => {
  const [notification, setNotification] = useState<{
    content: string;
    type?: "error" | "success";
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;

    try {
      validarDocumento(value); // Llama a tu función de validación
      setError(null); // Limpia el mensaje de error si la validación es exitosa
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message); // Muestra el mensaje del error
      }
    }
  };

  const handleSubmit = async (data: PatientFormData) => {
    const endpoint = "/api/user";
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      setNotification({
        content: "Paciente creado exitosamente.",
        type: "success",
      });
    } catch (error) {
      setNotification({
        content: `Error: ${
          error instanceof Error ? error.message : "Desconocido"
        }`,
        type: "error",
      });
    }
  };

  return (
    <>
      <form
        onSubmit={(event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();

          const formData = new FormData(event.currentTarget);
          const formObject = Object.fromEntries(formData) as Omit<
            PatientFormData,
            "password" | "role"
          >;

          // Agregar propiedades adicionales al objeto
          const data: PatientFormData = {
            ...formObject,
            password: hashPassword(formObject.citizenId),
            role: "patient",
          };

          handleSubmit(data);
        }}
        className="p-4"
      >
        <h2 className="text-lg font-bold mb-4">Nuevo Paciente</h2>
        <div className="grid grid-cols-4 gap-5">
          <div className="flex flex-col">
            <label
              htmlFor="citizenId"
              className="text-sm font-medium mb-1"
            >
              Documento de identificación
            </label>
            <input
              name="citizenId"
              id="citizenId"
              type="tel"
              onInput={(e) => {
                const input = e.currentTarget;
                // Permitir solo números
                input.value = input.value.replace(/\D/g, "");
                setError(null);
              }}
              maxLength={15}
              className={`w-full p-1 border rounded-md focus:outline-sky-300 ${
                error ? "border-red-500" : ""
              }`}
              onBlur={handleBlur}
              required
              placeholder="Cedula, pasaporte o RUC"
            />
            {error && (
              <span className="text-red-500 text-sm mt-1">{error}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="text-sm font-medium mb-1"
            >
              Apellidos
            </label>
            <input
              name="lastName"
              id="lastName"
              type="text"
              className="p-1 border rounded-md focus:outline-sky-300"
              required
              placeholder="Pérez López"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nombres
            </label>
            <input
              name="name"
              id="name"
              type="text"
              className="p-1 border rounded-md focus:outline-sky-300"
              required
              placeholder="Juan Andrés"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address" className="block text-sm font-medium mb-1">
              Dirección
            </label>
            <input
              name="address"
              id="address"
              type="text"
              className="p-1 border rounded-md focus:outline-sky-300"
              placeholder="Dirección"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Teléfono
            </label>
            <input
              name="phone"
              id="phone"
              type="tel"
              className="p-1 border rounded-md focus:outline-sky-300"
              placeholder="0987654321"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              e-mail
            </label>
            <input
              name="email"
              id="email"
              type="email"
              className="p-1 border rounded-md focus:outline-sky-300"
              placeholder="alguien@citaxpress.com"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-sky-600 text-white py-2 px-4 rounded-md hover:bg-sky-500 mt-12 focus:outline-sky-300"
        >
          Guardar
        </button>
      </form>
      {notification &&
        createPortal(
          <Notification
            content={notification.content}
            type={notification.type}
          />,
          document.body
        )}
    </>
  );
};

export default NuevoPaciente;
