import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renderiza el título principal", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Ajuste: coincide con el texto actual del componente App
  expect(screen.getByText(/Página principal/i)).toBeInTheDocument();
});
