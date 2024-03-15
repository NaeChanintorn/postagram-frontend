import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import Redirected from "../features/auth/paths/Redirected";
import ProtectedRoute from "../features/auth/paths/ProtectedRoute";
import SetOutlet from "../components/SetOutlet";
import ProfileContextProvider from "../features/profile/contexts/ProfileContext";
import PostContextProvider from "../features/post/contexts/PostContext";

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
        {/* <PostContextProvider> */}
        <SetOutlet />
        {/* </PostContextProvider> */}
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: (
          // <PostContextProvider>
          <HomePage />
          // </PostContextProvider>
        ),
      },
      {
        path: "profile/:userId",
        element: (
          // <PostContextProvider>
          <ProfileContextProvider>
            <ProfilePage />
          </ProfileContextProvider>
          // </PostContextProvider>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
