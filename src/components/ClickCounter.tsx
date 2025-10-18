import { useState } from "react";

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-lg font-semibold mb-2">Contador de Clics</h2>
      <p className="text-xl mb-2">Has hecho clic {count} veces</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Incrementar
      </button>
    </div>
  );
}
