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
import PostPage from "../pages/Postpage";

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
        element: (
          <PostContextProvider>
            <ProfileContextProvider>
              <HomePage />
            </ProfileContextProvider>
          </PostContextProvider>
        ),
      },
      {
        path: "profile/:userId",
        element: (
          <PostContextProvider>
            <ProfileContextProvider>
              <ProfilePage />
            </ProfileContextProvider>
          </PostContextProvider>
        ),
      },
      {
        path: "/post/:userId/:postId",
        element: (
          <ProfileContextProvider>
            <PostPage />
          </ProfileContextProvider>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
