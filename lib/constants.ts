import { IoDocumentsOutline } from "react-icons/io5";
import { BiUser, BiHome } from "react-icons/bi";

export enum STATUS {
  ONLINE = "En línea",
  AWAY = "Ausente",
  LUNCH = "Almorzando",
  OFFLINE = "Desconectado",
}

export enum APPOINTMENT_STATUS {
  PENDING = "Pendiente",
  CONFIRMED = "Confirmada",
  CANCELED = "Cancelada",
}

export enum FUNCTION_TYPE {
  NEW_PATIENT = "nuevo paciente",
  CERTIFICATE = "certificado",
  EMERGENCY_LAB = "laboratorio de emergencias",
  COMPLEMENTARY = "Complementarios",
}

export const navItems = [
  {
    label: "Inicio",
    icon: BiHome,
    url: "/",
  },
  {
    label: "Pacientes",
    icon: BiUser,
    url: "/patients",
  },
  {
    label: "Documentos",
    icon: IoDocumentsOutline,
    url: "/documents",
  },
];

export const ROUTES = [
  {
    path: "/",
    label: "Dashboard",
  },
  {
    path: "/documents",
    label: "Documentos",
  },
  {
    path: "/patients",
    label: "Pacientes",
  },
]