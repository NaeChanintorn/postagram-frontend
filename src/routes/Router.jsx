import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { RouterProvider } from "react-router-dom";
import SideBar from "../layouts/SideBar";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/", // /login
    // wait for authenticate
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  // {
  //   path: "/",
  //   // wait for authenticate
  //   element: <SideBar />,
  //   children: [
  //     {
  //       path: "",
  //       element: <HomePage />,
  //     },
  //     {
  //       path: "profile/:userId",
  //       element: <ProfilePage />,
  //     },
  //   ],
  // },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
