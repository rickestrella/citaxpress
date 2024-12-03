"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/lib/constants";
import { HiLogout } from "react-icons/hi";
import { signOut } from "next-auth/react";

const Header: React.FC = () => {
  const path = usePathname();
  return (
    <header className="text-white p-6 flex justify-between items-center">
      {/* Menu */}
      <nav className="space-x-4">
        {ROUTES.map((route) => (
          <Link
            key={route.label}
            href={route.path}
            className={`text-base hover:bg-white/30 hover:text-white transition-all p-1 px-1.5 rounded-md capitalize ${
              path === route.path
                ? "font-bold bg-white text-cyan-900 hover:bg-white/65 hover:text-cyan-700"
                : ""
            }`}
          >
            {route.label}
          </Link>
        ))}
      </nav>
      <button
        className="flex items-center justify-center hover:underline"
        onClick={() => signOut}
      >
        Salir <HiLogout className="size-4 ml-3" />
      </button>
    </header>
  );
};

export default Header;
