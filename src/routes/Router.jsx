import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import Redirected from "../features/auth/paths/Redirected";
import ProtectedRoute from "../features/auth/paths/ProtectedRoute";
import SetOutlet from "../components/SetOutlet";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <Redirected>
        <LoginPage />,
      </Redirected>
    ),
  },
  {
    path: "/register",
    element: (
      <Redirected>
        <RegisterPage />,
      </Redirected>
    ),
  },
  {
    path: "/",

    element: (
      <ProtectedRoute>
        <SetOutlet />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "profile/:userId",
        element: <ProfilePage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
