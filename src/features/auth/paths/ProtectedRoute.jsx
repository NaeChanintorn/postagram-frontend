import useAuth from "../../../hooks/use-auth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { authenticated } = useAuth();
  return authenticated ? children : <Navigate to="/login" />;
}
