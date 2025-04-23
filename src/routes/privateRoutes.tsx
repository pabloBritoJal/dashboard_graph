import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const user = JSON.parse(localStorage.getItem("User") || "{}");

  return user?.Auth?.accessToken ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoutes;