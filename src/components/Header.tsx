import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Inicio" },
    { path: "/three", label: "3D Demo" },
    { path: "/layouts", label: "Layouts" },
    { path: "/tts", label: "Texto a Voz" },
    { path: "/three_2", label: "Geometría" },
    { path: "/settings", label: "Configuración" },
  ];

  return (
    <header className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold tracking-wide">Mi Proyecto</h1>
        <nav className="space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`hover:text-yellow-400 ${
                location.pathname === item.path ? "text-yellow-400 font-semibold" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
