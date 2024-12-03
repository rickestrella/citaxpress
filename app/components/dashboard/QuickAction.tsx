"use client";

import { FUNCTION_TYPE } from "@/lib/constants";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { BiUserPlus } from "react-icons/bi";
import LaboratorioEmergencia from "../documents/LaboratorioEmergencia";
import Certificado from "../documents/Certificado";
import NuevoPaciente from "../documents/NuevoPaciente";
import Complementarios from "../documents/Complementarios";
import { MdOutlineContactEmergency } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import { HiDocumentChartBar } from "react-icons/hi2";

interface FormProps {
  text: string;
  type: FUNCTION_TYPE;
}

const typeOfDocument = (type: FUNCTION_TYPE) => {
  switch (type) {
    case FUNCTION_TYPE.NEW_PATIENT:
      return <NuevoPaciente />;
    case FUNCTION_TYPE.CERTIFICATE:
      return <Certificado />;
    case FUNCTION_TYPE.EMERGENCY_LAB:
      return <LaboratorioEmergencia />;
    case FUNCTION_TYPE.COMPLEMENTARY:
      return <Complementarios />;
    default:
      return <div>Tipo de formulario desconocido.</div>;
  }
};

const QuickAction: React.FC<FormProps> = ({ text, type }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={handleOpen}
        className="rounded-lg shadow bg-white/50 hover:bg-white/90 hover:-translate-y-[2px] transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center size-12 rounded-lg">
            {type === FUNCTION_TYPE.CERTIFICATE && (
              <PiCertificate className="text-2xl" />
            )}
            {type === FUNCTION_TYPE.EMERGENCY_LAB && (
              <MdOutlineContactEmergency className="size-5" />
            )}
            {type === FUNCTION_TYPE.NEW_PATIENT && (
              <BiUserPlus className="size-5" />
            )}
            {type === FUNCTION_TYPE.COMPLEMENTARY && (
              <HiDocumentChartBar className="size-5" />
            )}
          </div>
          <span className="text-slate-600 font-xl capitalize">{text}</span>
        </div>
      </button>

      {isOpen &&
        createPortal(
          <div className="h-screen w-screen bg-black/50 fixed top-0 left-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
              >
                &times;
              </button>
              {typeOfDocument(type)}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default QuickAction;
