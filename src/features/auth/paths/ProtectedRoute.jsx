import useAuth from "../../../hooks/use-auth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { authUser } = useAuth();
  return authUser ? children : <Navigate to="/login" />;
}
