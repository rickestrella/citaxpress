import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";

export async function GET() {
  await connectDB();
  try {
    const users = await User.find({});
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error obteniendo usuarios" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  await connectDB();
  try {
    const body = await req.json();
    const { name, email, password } = body;
    const newUser = await User.create({ name, email, password });
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error creando usuario" },
      { status: 500 }
    );
  }
}
