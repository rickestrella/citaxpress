"use client";

import Image from "next/image";
import cxlogo from "@/app/assets/cx_logo.png";
import Link from "next/link";
import { navItems } from "@/lib/constants"; // Importa tus constantes
import { useState } from "react";

const Navbar: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav className="flex flex-col justify-between items-center bg-transparent text-white py-6 px-4 w-20 min-h-screen z-50">
      {/* Logo */}
      <div className="mb-8">
        <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
          <Image
            src={cxlogo.src}
            height={256}
            width={256}
            alt="CitaXpress Logo"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Menu Items */}
      <ul className="space-y-6">
        {navItems.map(({ icon: Icon, url, label }) => (
          <li
            key={label}
            onMouseEnter={() => setHoveredItem(label)}
            onMouseLeave={() => setHoveredItem(null)}
            className="relative"
          >
            <Link href={url} className="rounded-lg shadow relative">
              <div className="flex items-center gap-3">
                <div className="bg-white/35 flex items-center justify-center size-8 rounded-lg hover:bg-white/70 hover:text-indigo-500">
                  <Icon className="size-5" />
                </div>
              </div>
              <span
                className={`absolute left-full rounded-md px-2 py-1 ml-2 -mt-[1.85rem] bg-indigo-100 text-indigo-800 text-sm transition-all duration-300 transform ${
                  hoveredItem === label
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-2 pointer-events-none"
                }`}
              >
                {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* User Avatar */}
      <div className="mt-8">
        <Image
          height={25}
          width={25}
          src="/app/assets/cx_logo.png"
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
      </div>
    </nav>
  );
};

export default Navbar;
