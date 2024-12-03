import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ConditionalLayout from "./components/ConditionalRoutes";

export const metadata: Metadata = {
  title: "CitaXpress",
  description: "Gestiona tus citas de manera inteligente.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
};
// const RootLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <html lang="es">
//       <body>
//         <div className="grid grid-cols-[auto_1fr] h-screen bg-gradient-to-b from-[#4a7084] to-[#688187] overflow-hidden">
//           <Navbar />
//           <div className="relative flex flex-col">
//             <Header />
//             <main className="bg-white rounded-3xl p-6 mr-3 mb-1 shadow-lg z-10 h-full">
//               {children}
//             </main>
//           </div>
//         </div>
//       </body>
//     </html>
//   );
// };

export default RootLayout;
