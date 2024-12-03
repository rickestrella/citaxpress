import { Schema, model, models } from "mongoose";

enum Roles {
  PATIENT = "Paciente",
  DOCTOR = "Doctor",
  ADMIN = "Administrador",
}

enum Field {
  CARDIOLOGY = "Cardiología",
  DERMATOLOGY = "Dermatología",
  NEUROLOGY = "Neurología",
  PEDIATRIC = "Pediatría",
  GENERAL = "Medicina General",
  ONCOLOGY = "Oncología",
  PSYCHIATRY = "Psiquiatría",
  ORTHOPEDIST = "Ortopedista",
  GYNECOLOGY = "Ginecología",
  OPHTHALMOLOGIST = "Oftalmología",
  ENDOCRINOLOGY = "Endocrinología",
  OTHER = "Otro",
}

enum Status {
  ONLINE = "Conectado",
  AWAY = "Ausente",
  OFFLINE = "Desconectado",
  BUSY = "Ocupado",
  LUNCH = "Almorzando",
}

const hoursSchema = new Schema({
  day: {
    type: String,
    enum: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    required: true,
  },
  hours: [
    {
      start: {
        type: String,
        required: true,
        validate: {
          validator: function (v: string) {
            return /^([01]?\d|2[0-3]):[0-5]\d$/.test(v); // Validación de formato HH:MM
          },
          message: (props: { value: string }) =>
            `${props.value} no es una hora válida. Debe estar en formato HH:MM.`,
        },
      },
      end: {
        type: String,
        required: true,
        validate: {
          validator: function (v: string) {
            return /^([01]?\d|2[0-3]):[0-5]\d$/.test(v); // Validación de formato HH:MM
          },
          message: (props: { value: string }) =>
            `${props.value} no es una hora válida. Debe estar en formato HH:MM.`,
        },
      },
    },
  ],
});

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "El nombre es obligatorio."],
    },
    lastName: {
      type: String,
      required: [true, "El apellido es obligatorio."],
    },
    citizenId: {
      type: String,
      required: [true, "La cédula de ciudadanía es obligatoria."],
      unique: true,
    },
    dob: {
      type: Date,
    },
    email: {
      type: String,
      unique: true,
    },
    address: {
      type: String
    },
    password: {
      type: String,
      required: [true, "La contraseña es obligatoria."],
    },
    role: {
      type: String,
      enum: Roles,
      default: "patient",
    },
    phone: {
      type: String,
    },
    bloodType: {
      type: String,
    },
    allergies: {
      type: [String],
    },
    chronicDiseases: {
      type: [String],
    },
    status: {
      type: String,
      enum: Status,
      default: Status.OFFLINE,
    },

    field: {
      type: String,
      enum: Field,
      default: Field.GENERAL,
    },
    availableHours: {
      type: [hoursSchema],
    },
  },
  {
    timestamps: true,
  }
);

export const User = models.User || model("User", userSchema);
