export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 mt-8 text-center text-sm border-t border-gray-700">
      <p>
        © {new Date().getFullYear()} Pruebas Unitarias - UCC | Desarrollado por{" "}
        <span className="font-semibold text-white">Juan Enriquez</span>
      </p>
    </footer>
  );
}
