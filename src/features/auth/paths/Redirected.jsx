import useAuth from "../../../hooks/use-auth";
import { Navigate } from "react-router-dom";

export default function Redirected({ children }) {
  const { authenticated } = useAuth();
  return authenticated ? <Navigate to="/" /> : children;
}
