import React, { useMemo } from "react";
import { CiUser } from "react-icons/ci";
import { APPOINTMENT_STATUS, STATUS } from "@/lib/constants";
import { differenceInCalendarDays, isToday, isPast } from "date-fns";

interface PatientProps {
  firstName: string;
  lastName: string;
  status: STATUS;
  nextAppointment?: string;
  lastAppointment?: string;
}

interface AppointmentProps {
  id: number;
  status: APPOINTMENT_STATUS;
  date: string;
  patient: PatientProps;
}

interface AppointmentContentProps {
  appointments: AppointmentProps[];
}

const checkStatus = (status?: STATUS): string => {
  switch (status) {
    case STATUS.ONLINE:
      return "bg-green-500";
    case STATUS.OFFLINE:
      return "bg-gray-500";
    case STATUS.AWAY:
      return "bg-orange-500";
    case STATUS.LUNCH:
      return "bg-purple-500";
    default:
      return "bg-gray-500";
  }
};

const AppointmentContent: React.FC<AppointmentContentProps> = ({
  appointments,
}) => {
  // Categorización de citas
  const { past, today, upcoming } = useMemo(() => {
    return appointments.reduce(
      (categories, appointment) => {
        const appointmentDate = new Date(appointment.date);
        if (isToday(appointmentDate)) {
          categories.today.push(appointment);
        } else if (isPast(appointmentDate)) {
          categories.past.push(appointment);
        } else {
          categories.upcoming.push(appointment);
        }
        return categories;
      },
      { past: [], today: [], upcoming: [] } as {
        past: AppointmentProps[];
        today: AppointmentProps[];
        upcoming: AppointmentProps[];
      }
    );
  }, [appointments]);

  // Componente reutilizable para mostrar categorías
  const AppointmentList = ({
    title,
    data,
    type,
  }: {
    title: string;
    data: AppointmentProps[];
    type: "past" | "today" | "upcoming";
  }) => (
    <div className="my-4">
      <h2 className="text-lg font-semibold text-slate-600 mb-2">{title}</h2>
      {data.length > 0 ? (
        data.map((appointment) => (
          <div key={appointment.id} className="my-2">
            <div className="flex items-center justify-between rounded p-2 hover:bg-gray-100 hover:cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-400 flex items-center justify-center">
                  <CiUser className="text-2xl" />
                </div>
                <div>
                  <p className="font-bold">
                    {appointment.patient.firstName}{" "}
                    {appointment.patient.lastName}
                  </p>
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${checkStatus(
                        appointment.patient.status
                      )}`}
                    ></span>
                    <span className="text-slate-500 text-sm">
                      {appointment.patient.status}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-slate-500 text-sm">
                {type === "past"
                  ? appointment.patient.lastAppointment
                  : appointment.patient.nextAppointment}
              </p>
            </div>
            <hr className="border-slate-200 mt-2" />
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-sm">No hay citas en esta categoría.</p>
      )}
    </div>
  );

  return (
    <div className="p-4">
      <AppointmentList title="Citas de Hoy" data={today} type="today" />
      <AppointmentList
        title="Próximas Citas"
        data={upcoming}
        type="upcoming"
      />
      <AppointmentList title="Citas Pasadas" data={past} type="past" />
    </div>
  );
};

export default AppointmentContent;
