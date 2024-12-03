import React from "react";

const exams = [
  {
    category: "Biometría",
    items: ["Leucocitos", "Neutrófilos", "Hemoglobina"],
  },
  { category: "Química", items: ["Glucosa", "Creatinina", "Urea"] },
  { category: "Electrolitos", items: ["Na", "K", "Cl"] },
];

const Complementarios = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <header className="mb-4">
        <h1 className="text-xl font-bold">Formulario de Exámenes</h1>
        <p className="text-gray-600">Paciente: Juan Pérez | Cédula: 12345678</p>
      </header>

      <div className="space-y-6">
        {exams.map((exam) => (
          <div key={exam.category} className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {exam.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {exam.items.map((item) => (
                <div key={item}>
                  <label className="block text-sm font-medium text-gray-700">
                    {item}
                  </label>
                  <input
                    type="number"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Ingrese valor"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Complementarios;