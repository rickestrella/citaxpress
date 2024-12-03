import React, { FormEvent } from "react";

type CertificateFormData = {
  name: string;
};

const Certificado = () => {
  const [notification, setNotification] = React.useState<{
    content: string;
    type?: "error" | "success";
  } | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (data: CertificateFormData) => {
    const endpoint = "/api/documents/certificates";
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
    <form
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const formObject = Object.fromEntries(formData);

        // Agregar propiedades adicionales al objeto
        const data: CertificateFormData = {
          ...formObject,
        };

        handleSubmit(data);
      }}
      className="p-4"
    >
      <h2 className="text-lg font-bold mb-4">Generar Certificado</h2>
      <div className="mb-3 grid grid-cols-3 gap-5">
        <div className="flex flex-col">
          <label htmlFor="certificateType" className="text-sm font-medium mb-1">
            Tipo de institución
          </label>
          <select
            name="certificateType"
            id="cartificateType"
            className="border rounded-md focus:outline-sky-300 p-1"
          >
            <option value="public">Pública</option>
            <option value="private">Privada</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="patient" className="text-sm font-medium mb-1">
            Paciente
          </label>
          <input
            name="patient"
            id="patient"
            list="patients"
            className="border rounded-md focus:outline-sky-300 p-1"
            required
          />
          <datalist id="patients">
            <option value="Marco Antonio" />
            <option value="Ivan Casanova" />
          </datalist>
        </div>
      </div>
      <button
        type="submit"
        className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
      >
        Generar
      </button>
    </form>
  );
};

export default Certificado;
