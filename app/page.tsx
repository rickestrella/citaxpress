import { BiStar } from "react-icons/bi";
import { AiOutlineStock } from "react-icons/ai";
import React from "react";
import AppointmentContent from "./components/dashboard/AppointmentContent";
import { APPOINTMENT_STATUS, FUNCTION_TYPE, STATUS } from "@/lib/constants";
import QuickAction from "./components/dashboard/QuickAction";
import { BsInfoCircleFill } from "react-icons/bs";

const appointments: Appointment[] = [
  {
    id: 1,
    status: APPOINTMENT_STATUS.CONFIRMED,
    date: "2024-03-20",
    patient: {
      firstName: "Juan",
      lastName: "Perez",
      status: STATUS.ONLINE,
      nextAppointment: "2024-03-20",
      lastAppointment: "2024-03-15",
      doctorInCharge: "Dr. Juan",
    },
  },
  {
    id: 2,
    status: APPOINTMENT_STATUS.PENDING,
    date: "2024-12-3",
    patient: {
      firstName: "Maria",
      lastName: "Garcia",
      status: STATUS.OFFLINE,
      nextAppointment: "2024-03-21",
      lastAppointment: "2024-03-16",
      doctorInCharge: "Dr. Maria",
    },
  },
  {
    id: 3,
    status: APPOINTMENT_STATUS.CANCELED,
    date: "2024-12-21",
    patient: {
      firstName: "Mariano",
      lastName: "Zambrano",
      status: STATUS.AWAY,
      nextAppointment: "2024-12-21",
      lastAppointment: "2024-07-19",
      doctorInCharge: "Dr. Alejandro",
    },
  },
];

type Appointment = {
  id: number;
  status: APPOINTMENT_STATUS;
  date: string;
  patient: {
    firstName: string;
    lastName: string;
    status: STATUS;
    nextAppointment: string;
    lastAppointment: string;
    doctorInCharge: string;
  };
};

type Stat = {
  icon: React.ComponentType<{ className: string }>;
  label: string;
  value: string | number;
};

type StatsCardProps = {
  title: string;
  value: string | number;
  stats: Stat[];
};

type AppointmentsSectionProps = {
  title: string;
  type: "current" | "upcoming" | "past";
};

function categorizeAppointments(appointments: Appointment[]): {
  past: Appointment[];
  today: Appointment[];
  upcoming: Appointment[];
} {
  const today = new Date(); // Fecha actual sin horas
  today.setHours(0, 0, 0, 0);

  return appointments.reduce(
    (categories, appointment) => {
      const appointmentDate = new Date(appointment.date);
      appointmentDate.setHours(0, 0, 0, 0);

      const differenceInTime = appointmentDate.getTime() - today.getTime();
      const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

      if (differenceInDays < 0) {
        categories.past.push(appointment); // Cita pasada
      } else if (differenceInDays === 0) {
        categories.today.push(appointment); // Cita de hoy
      } else {
        categories.upcoming.push(appointment); // Cita futura
      }

      return categories;
    },
    { past: [], today: [], upcoming: [] } as {
      past: Appointment[];
      today: Appointment[];
      upcoming: Appointment[];
    }
  );
}



const StatsCard: React.FC<StatsCardProps> = ({ title, value, stats }) => (
  <div className="rounded-2xl bg-gradient-to-r from-[#4a7084] via-sky-700 to-sky-950 text-white p-10 shadow-lg">
    <span>{title}</span>
    <h1 className="font-bold text-6xl">{value}</h1>
    <div className="mt-24 flex flex-col gap-5">
      {stats.map(({ icon: Icon, label, value }, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className="bg-white/50 flex items-center justify-center size-12 rounded-lg">
            <Icon className="size-5" />
          </div>
          <div>
            <span className="text-sm text-slate-200">{label}</span>
            <p className="font-semibold text-lg">{value}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const QuickActionCard: React.FC = () => (
  <div className="rounded-2xl bg-gradient-to-r from-sky-950 to-sky-900 p-10 shadow-lg relative">
    <span className="text-white">Funciones Rápidas</span>
    <div className="flex flex-col gap-2 mt-4">
      {Object.values(FUNCTION_TYPE).map((type, index) => (
        <QuickAction key={index} type={type} text={type} />
      ))}
    </div>
    <div className="bg-yellow-100 rounded-lg shadow p-2 flex flex-row absolute bottom-8 left-0 mx-10 text-xs">
      <BsInfoCircleFill className="size-6 mr-3 -mt-0.5" />
      <p>
        Recuerda: Los accesos rápidos podrían contener{" "}
        <span className="font-semibold text-black">información incompleta</span>{" "}
        como el caso de agregar paciente. Asegúrate de completar la información
        lo antes posible.
      </p>
    </div>
  </div>
);

const AppointmentsSection: React.FC<AppointmentsSectionProps> = ({ title, type }) => (
  <div className="flex flex-col gap-5">
    <h1 className="text-slate-500 font-bold text-xl text-center">{title}</h1>
    <AppointmentContent appointments={appointments} type={type} />
  </div>
);

export default function Home() {
  return (
    <div className="grid grid-rows-2 gap-5 w-full min-h-12 lg:min-h-[75rem] overflow-y-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12">
        <StatsCard
          title="Total pacientes atendidos"
          value="824"
          stats={[
            { icon: BiStar, label: "Novedades", value: "93" },
            { icon: AiOutlineStock, label: "Rendimiento General", value: "4.7" },
          ]}
        />
        <QuickActionCard />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        <div>
          <h5>Pacientes atendidos este mes</h5>
          <h1>96</h1>
        </div>
        <AppointmentsSection title="Próximas citas" type="upcoming" />
        <AppointmentsSection title="Últimos pacientes atendidos" type="past" />
      </div>
    </div>
  );
}
