import { Schema, model, models } from "mongoose";

enum REF {
  PATIENT = "Paciente",
  DOCTOR = "Doctor",
  ADMIN = "Administrador",
}

enum STATUS {
  PENDING = "Pendiente",
  CONFIRMED = "Confirmada",
  CANCELED = "Cancelada",
}

const appointmentSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    patient: {
      type: Schema.Types.ObjectId,
      ref: REF.PATIENT,
      required: true,
    },
    doctor: {
      type: Schema.Types.ObjectId,
      ref: REF.DOCTOR,
      required: true,
    },
    status: {
      type: String,
      enum: [STATUS],
      default: STATUS.PENDING,
    },
  },
  {
    timestamps: true,
  }
);

const Appointment =
  models.Appointment || model("Appointment", appointmentSchema);
export default Appointment;
