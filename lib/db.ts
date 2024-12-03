import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI ?? "";

if (!MONGO_URI) {
  throw new Error("La URI de Mongodb no está definida en el archivo .env.");
}

let isConnected = 0;

export async function connectDB() {
  if (isConnected) {
    console.log("Ya existe una conexión activa a la base de datos.");
    return;
  }
  try {
    const db = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
}

connectDB();
