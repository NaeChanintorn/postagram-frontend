import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Postagram from "../components/Postagram";
import { useState } from "react";
import Title from "../components/Title";
import useAuth from "../hooks/use-auth";
import validateLogin from "../features/auth/validates/validate-login";
import { toast } from "react-toastify";

const INPUT_LOGIN = {
  mobileOrEmailOrUserName: "",
  password: "",
};

export default function LoginPage() {
  const [input, setInput] = useState(INPUT_LOGIN);
  const [error, setError] = useState({});

  const { login } = useAuth();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateError = validateLogin(input);
      if (validateError) {
        return setError(validateError);
      }

      await login(input);
      toast.success("Login success");
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  return (
    <div className="flex justify-center gap-52">
      {/* --------------- Left side ---------------  */}
      <div className="flex flex-col justify-center items-center min-h-screen gap-5 ">
        <Postagram className="font-cur text-6xl bg-gradient-to-r from-purple-800 via-yellow-500 to-red-400 inline-block text-transparent bg-clip-text" />
        <div className="text-3xl  text-gray-50 hover:text-gray-400 hover:duration-300">
          by NAENAECNT
        </div>
      </div>
      {/* --------------- Login form (Right) --------------- */}
      <div className="flex flex-col justify-center items-center min-h-screen gap-3 ">
        <form
          onSubmit={handleSubmit}
          className="min-h-[50vh] min-w-[50vh] flex flex-col justify-center items-center gap-14 border border-gray-300"
        >
          <Title title="LOG IN" />
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              text="Phone number, username or email"
              placeholder="Phone number, username or email"
              name="mobileOrEmailOrUserName"
              value={input.mobileOrEmailOrUserName}
              onChange={handleChangeInput}
              errorMsg={error.mobileOrEmailOrUserName}
            />
            <Input
              type="password"
              text="Password"
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={handleChangeInput}
              errorMsg={error.password}
            />
            <Button text="Log in" />
          </div>
        </form>
        {/* Go to Register */}
        <div className="min-h-[13vh] min-w-[50vh] flex flex-col justify-center items-center gap-20 border border-gray-300">
          <h1 className="font-light">
            Don't have an account?{" "}
            <Link
              className="text-blue-500 font-normal hover:underline"
              to="/Register"
            >
              Sign up
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
