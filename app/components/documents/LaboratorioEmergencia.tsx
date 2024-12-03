import React, { FormEvent } from "react";

const LaboratorioEmergencia: React.FC = () => {
  return (
    <form
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      }}
      className="p-4"
    >
      <div className="grid grid-cols-2 items-center pb-2">
        <h2 className="text-lg font-bold mb-4">Laboratorio de Emergencias</h2>
        <div className="rounded-lg text-sm py-1 px-3 bg-red-100 shadow">
          <p className="text-red-900">
            <span className="font-bold text-red-900">Nota:</span> No se
            considerará URGENTE si se solicitan más de SEIS determinaciones, y
            en esos casos, el pedido pasará a rutina.
          </p>
        </div>
      </div>
      <div className="flex flex-col max-h-[38rem] overflow-y-scroll mb-4 mt-3">
        <div className="grid grid-cols-4 gap-5 mb-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1" htmlFor="lastName1">
              Apellido paterno
            </label>
            <input
              className="border p-1 rounded-md focus:outline-sky-300"
              type="text"
              name="lastName1"
              id="lastName1"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1" htmlFor="lastName2">
              Apellido materno
            </label>
            <input
              className="border p-1 rounded-md focus:outline-sky-300"
              type="text"
              name="lastName2"
              id="lastName2"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1" htmlFor="firstName">
              Nombres
            </label>
            <input
              className="border p-1 rounded-md focus:outline-sky-300"
              type="text"
              name="firstName"
              id="firstName"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-sm font-medium mb-1"
              htmlFor="uniqueClinicalRecord"
            >
              Número de historia clínica
            </label>
            <input
              className="border p-1 rounded-md focus:outline-sky-300"
              type="number"
              name="uniqueClinicalRecord"
              id="uniqueClinicalRecord"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1" htmlFor="age">
              Edad
            </label>
            <input
              className="border p-1 rounded-md focus:outline-sky-300"
              type="tel"
              name="age"
              id="age"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1" htmlFor="procedencia">
              Procedencia
            </label>
            <input
              className="border p-1 rounded-md focus:outline-sky-300"
              type="text"
              name="procedencia"
              id="procedencia"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1" htmlFor="date">
              Fecha
            </label>
            <input
              className="border p-1 rounded-md focus:outline-sky-300"
              type="date"
              name="date"
              id="date"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1" htmlFor="hour">
              hora
            </label>
            <input
              className="border p-1 rounded-md focus:outline-sky-300"
              type="datetime-local"
              name="hour"
              id="hour"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-sm font-medium mb-1"
              htmlFor="consultaExterna"
            >
              Consulta Externa
            </label>
            <input
              className="border p-1 rounded-md focus:outline-sky-300"
              type="text"
              name="consultaExterna"
              id="consultaExterna"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1" htmlFor="emergencia">
              Emergencia
            </label>
            <input
              className="border p-1 rounded-md focus:outline-sky-300"
              type="text"
              name="emergencia"
              id="emergencia"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-sm font-medium mb-1"
              htmlFor="hospitalizacion"
            >
              Hospitalización
            </label>
            <input
              className="border p-1 rounded-md focus:outline-sky-300"
              type="text"
              name="hospitalizacion"
              id="hospitalizacion"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1" htmlFor="salaNo">
              Sala No.
            </label>
            <input
              className="border p-1 rounded-md focus:outline-sky-300"
              type="text"
              name="salaNo"
              id="salaNo"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1" htmlFor="camaNo">
              Cama No.
            </label>
            <input
              className="border p-1 rounded-md focus:outline-sky-300"
              type="text"
              name="camaNo"
              id="camaNo"
            />
          </div>
          <div className="flex flex-col col-span-3">
            <label
              className="text-sm font-medium mb-1"
              htmlFor="presuntiveDiagnose"
            >
              Diagnóstico presuntivo
            </label>
            <input
              className="border p-1 rounded-md focus:outline-sky-300"
              type="text"
              name="presuntiveDiagnose"
              id="presuntiveDiagnose"
            />
          </div>
          <div className="flex flex-col col-span-4">
            <label className="text-sm font-medium mb-1" htmlFor="reason">
              Motivo de la solicitud
            </label>
            <input
              className="border p-1 rounded-md focus:outline-sky-300"
              type="text"
              name="reason"
              id="reason"
            />
          </div>
        </div>

        <hr className="border-slate-500 w-[48rem] mx-auto my-4" />
        <h3 className="mt-3 mb-5 text-slate-700 font-bold">
          Examen que solicita
        </h3>
        <div className="grid grid-cols-4">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="focus:outline-sky-300 ui-checkbox"
              name="hematocrito"
              id="hematocrito"
            />
            <label className="text-sm font-medium mb-1" htmlFor="hematocrito">
              Hematocrito
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="focus:outline-sky-300 ui-checkbox"
              name="leucocitos"
              id="leucocitos"
            />
            <label className="text-sm font-medium mb-1" htmlFor="leucocitos">
              Leucocitos
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="focus:outline-sky-300 ui-checkbox"
              name="formula"
              id="formula"
            />
            <label className="text-sm font-medium mb-1" htmlFor="formula">
              Fórmula Leucocitaria
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="focus:outline-sky-300 ui-checkbox"
              name="plaquetas"
              id="plaquetas"
            />
            <label className="text-sm font-medium mb-1" htmlFor="plaquetas">
              Plaquetas
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="focus:outline-sky-300 ui-checkbox"
              name="hematozoario"
              id="hematozoario"
            />
            <label className="text-sm font-medium mb-1" htmlFor="hematozoario">
              Hematozoario
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="focus:outline-sky-300 ui-checkbox"
              name="grupoSanguineo"
              id="grupoSanguineo"
            />
            <label
              className="text-sm font-medium mb-1"
              htmlFor="grupoSanguineo"
            >
              Grupo S. Rh.
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="focus:outline-sky-300 ui-checkbox"
              name="reticulocitos"
              id="reticulocitos"
            />
            <label className="text-sm font-medium mb-1" htmlFor="reticulocitos">
              Reticulocitos
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="focus:outline-sky-300 ui-checkbox"
              name="glucosa"
              id="glucosa"
            />
            <label className="text-sm font-medium mb-1" htmlFor="glucosa">
              Glucosa
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="focus:outline-sky-300 ui-checkbox"
              name="creatinina"
              id="creatinina"
            />
            <label className="text-sm font-medium mb-1" htmlFor="creatinina">
              Creatinina
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="focus:outline-sky-300 ui-checkbox"
              name="acidourico"
              id="acidourico"
            />
            <label
              className="text-sm font-medium mb-1 capitalize"
              htmlFor="acidourico"
            >
              ácido úrico (Gineco-obst.)
            </label>
          </div>
          <div className="flex items-baseline gap-4">
            <input
              type="checkbox"
              className="focus:outline-sky-300 ui-checkbox"
              name="bilirrubina"
              id="bilirrubina"
            />
            <label
              className="text-sm font-medium mb-1 capitalize"
              htmlFor="bilirrubina"
            >
              Bilirrubina total y durecta (neonatología)
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="focus:outline-sky-300 ui-checkbox"
              name="amilasa"
              id="amilasa"
            />
            <label className="text-sm font-medium mb-1" htmlFor="amilasa">
              Amilasa
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="focus:outline-sky-300 ui-checkbox"
              name="tgo"
              id="tgo"
            />
            <label className="text-sm font-medium mb-1" htmlFor="tgo">
              TGO
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="focus:outline-sky-300 ui-checkbox"
              name="tgp"
              id="tgp"
            />
            <label className="text-sm font-medium mb-1" htmlFor="tgp">
              TGP
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="focus:outline-sky-300 ui-checkbox"
              name="electrolitos"
              id="electrolitos"
            />
            <label className="text-sm font-medium mb-1" htmlFor="electrolitos">
              Electrolitos
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="focus:outline-sky-300 ui-checkbox"
              name="gasometria"
              id="gasometria"
            />
            <label className="text-sm font-medium mb-1" htmlFor="gasometria">
              Gasometría
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="focus:outline-sky-300 ui-checkbox"
              name="pcr"
              id="pcr"
            />
            <label className="text-sm font-medium mb-1" htmlFor="pcr">
              P.C.R
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="focus:outline-sky-300 ui-checkbox"
              name="tprotombina"
              id="tprotombina"
            />
            <label className="text-sm font-medium mb-1" htmlFor="tprotombina">
              T. Protombina
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="focus:outline-sky-300 ui-checkbox"
              name="tromboplastina"
              id="tromboplastina"
            />
            <label
              className="text-sm font-medium mb-1"
              htmlFor="tromboplastina"
            >
              T. Tromboplastina parcial
            </label>
          </div>

          <div className="items-center gap-3 col-span-4 grid grid-cols-4">
            <h3 className="mt-3 font-bold col-span-4">ORINA</h3>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="focus:outline-sky-300 ui-checkbox"
                name="elemental"
                id="elemental"
              />
              <label className="text-sm font-medium mb-1" htmlFor="elemental">
                Elemental y microscópico
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="focus:outline-sky-300 ui-checkbox"
                name="gotafresca"
                id="gotafresca"
              />
              <label className="text-sm font-medium mb-1" htmlFor="gotafresca">
                Gota Fresca (Pediatría)
              </label>
            </div>
          </div>

          <div className="items-center gap-3 col-span-4 grid grid-cols-4">
            <h3 className="mt-3 font-bold col-span-4">HECES (Pediatría)</h3>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="focus:outline-sky-300 ui-checkbox"
                name="polinucleares"
                id="polinucleares"
              />
              <label
                className="text-sm font-medium mb-1"
                htmlFor="polinucleares"
              >
                Inv. Polinucleares
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="focus:outline-sky-300 ui-checkbox"
                name="amebas"
                id="amebas"
              />
              <label className="text-sm font-medium mb-1" htmlFor="amebas">
                Inv. de Amebas
              </label>
            </div>
            <div className="flex items-baseline gap-3">
              <input
                type="checkbox"
                className="focus:outline-sky-300 ui-checkbox"
                name="pnm"
                id="pnm"
              />
              <label className="text-sm font-medium mb-1" htmlFor="pnm">
                PNM Jugo Gástrico (Neonatología)
              </label>
            </div>
          </div>

          <div className="items-center gap-3 col-span-4 grid grid-cols-4">
            <h3 className="mt-3 font-bold col-span-4 uppercase">
              Estudio Líquidos de:
            </h3>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="focus:outline-sky-300 ui-checkbox"
                name="lcr"
                id="lcr"
              />
              <label className="text-sm font-medium mb-1" htmlFor="lcr">
                L.C.R
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="focus:outline-sky-300 ui-checkbox"
                name="ilpleureal"
                id="ilpleureal"
              />
              <label className="text-sm font-medium mb-1" htmlFor="ilpleureal">
                IL. Pleureal
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="focus:outline-sky-300 ui-checkbox"
                name="lsinobial"
                id="lsinobial"
              />
              <label className="text-sm font-medium mb-1" htmlFor="lsinobial">
                L. Sinobial
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="focus:outline-sky-300 ui-checkbox"
                name="labdominal"
                id="labdominal"
              />
              <label className="text-sm font-medium mb-1" htmlFor="labdominal">
                L. Abdominal
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="focus:outline-sky-300 ui-checkbox"
                name="cultivo"
                id="cultivo"
              />
              <label className="text-sm font-medium mb-1" htmlFor="cultivo">
                Cultivo
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="focus:outline-sky-300 ui-checkbox"
                name="hemocultivo"
                id="hemocultivo"
              />
              <label className="text-sm font-medium mb-1" htmlFor="hemocultivo">
                Hemocultivo
              </label>
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-sky-600 focus:outline-indigo-700"
      >
        Guardar
      </button>
    </form>
  );
};

export default LaboratorioEmergencia;
