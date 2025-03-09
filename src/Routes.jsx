import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import App from "./App";
import Dashboard from "./assets/Dashboard";

function AppRoutes() {
  const location = useLocation(); 

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;
