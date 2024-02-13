import useAuth from "../../../hooks/use-auth";
import { Navigate } from "react-router-dom";

export default function Redirected({ children }) {
  const { authUser } = useAuth();
  return authUser ? <Navigate to="/" /> : children;
}
