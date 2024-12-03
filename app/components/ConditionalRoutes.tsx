"use client";

import { usePathname } from "next/navigation";
import Login from "../components/Login";
import Register from "./Register";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const ConditionalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  // Rutas específicas que no usarán el ConditionalLayout
  if (pathname === "/login") {
    return (
      <div className="flex h-screen items-center justify-center">
        <Login />
      </div>
    );
  }

  if (pathname === "/register") {
    return (
      <div className="flex h-screen items-center justify-center">
        <Register />
      </div>
    );
  }

  // ConditionalLayout general para las demás rutas
  return (
    <div className="grid grid-cols-[auto_1fr] h-screen bg-gradient-to-b from-[#4a7084] to-[#688187] overflow-hidden">
      <Navbar />
      <div className="relative flex flex-col">
        <Header />
        <main className="bg-white rounded-3xl p-6 mr-3 shadow-lg z-10 pb-12 mb-2 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default ConditionalLayout;
