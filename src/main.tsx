import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ThemeContext, { ThemeProvider } from "./context/themeContext.tsx";
import { TodoProvider } from "./context/todoApp.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider>
    <TodoProvider>
      <App />
    </TodoProvider>
  </ThemeProvider>
);
