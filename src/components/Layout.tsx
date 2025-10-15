import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      {/* Encabezado principal */}
      <Header />

      {/* Contenido dinámico */}
      <main className="flex-grow p-6">
        <Outlet />
      </main>

      {/* Pie de página global */}
      <Footer />
    </div>
  );
}
