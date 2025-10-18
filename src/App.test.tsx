import * as react from "@testing-library/react";
import App from "./App";

test("renderiza el título principal", () => {
  react.render(<App />);
  // Ajuste: verifica el texto actual mostrado en la app
  expect(react.screen.getByText(/Bienvenido a React/i)).toBeInTheDocument();
});
