import { Slide, ToastContainer } from "react-toastify";
import Router from "./routes/Router";
import useAuth from "./hooks/use-auth";

function App() {
  return (
    <>
      <Router />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colored"
        transition={Slide}
      />
    </>
  );
}

export default App;
