import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  const isAuth = true;
  //const jwt = true;
  //const admin = true;
  return <div>{isAuth ? <Outlet /> : <Navigate to={"/login"} />}</div>;
};
