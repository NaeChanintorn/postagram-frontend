import { Slide, ToastContainer } from "react-toastify";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <Router />
      <ToastContainer
        position="bottom-right"
        autoClose={2 * 1000}
        theme="colored"
        transition={Slide}
      />
    </>
  );
}

export default App;
