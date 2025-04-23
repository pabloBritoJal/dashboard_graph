import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from "./privateRoutes";
import DashboardContainer from "../features/dashboard/pages/DashboardContainer";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rutas públicas */}
      {/* <Route path="/" element={<Login />} /> */}
      {/* <Route path="/register/:Id" element={<Register/>} /> */}
      <Route path="/" element={<DashboardContainer />} />
      <Route path="*" element={<Navigate to="/" replace />} />

      {/* Rutas protegidas */}
      <Route element={<PrivateRoutes />}>
        <Route></Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
