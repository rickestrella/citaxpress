import Navbar from "./Navbar";
import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-cols-[auto_1fr] h-screen bg-gradient-to-b from-[#4a7084] to-[#688187] overflow-hidden">
      <Navbar />
      <div className="relative flex flex-col">
        <Header />
        <main className="bg-white rounded-3xl p-6 mr-3 mb-1 shadow-lg z-10 h-full">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
