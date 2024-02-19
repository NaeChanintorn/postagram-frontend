// import React from "react";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./features/auth/contexts/AuthContext.jsx";
import ProfileContextProvider from "./features/profile/contexts/ProfileContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AuthContextProvider>
    <ProfileContextProvider>
      <App />
    </ProfileContextProvider>
  </AuthContextProvider>
  // </React.StrictMode>
);
