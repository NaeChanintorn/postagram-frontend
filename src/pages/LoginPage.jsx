import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Postagram from "../components/Postagram";
import { useState } from "react";

const INPUT_LOGIN = {
  mobileOrUsernameOrEmail: "",
  password: "",
};

export default function LoginPage() {
  const [input, setInput] = useState(INPUT_LOGIN);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* --------------- Left side ---------------  */}
      <div className="flex flex-col justify-center items-center min-h-screen gap-5">
        <Postagram />
        <div className="text-3xl  text-gray-400">by NAENAECNT</div>
      </div>
      {/* --------------- Login form (Right) --------------- */}
      <div className="flex flex-col justify-center items-center min-h-screen gap-3">
        <form className="min-h-[50vh] min-w-[50vh] flex flex-col justify-center items-center gap-14 border border-gray-300">
          <div className="font-cur text-5xl text-center">LOGIN</div>
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              text="Phone number, username or email"
              placeholder="Phone number, username or email"
              name="mobileOrUsernameOrEmail"
              value={input.mobileOrUsernameOrEmail}
              onChange={handleChangeInput}
            />
            <Input
              type="password"
              text="Password"
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={handleChangeInput}
            />
            <Button />
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
