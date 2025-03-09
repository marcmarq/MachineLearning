import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppRoutes from "./Routes"; 

console.log(" main.jsx is running...");

const rootElement = document.getElementById("root");
console.log("Root element:", rootElement);

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes /> 
    </BrowserRouter>
  </StrictMode>
);

console.log("React app is now rendering...");
