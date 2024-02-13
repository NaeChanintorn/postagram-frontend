import React from "react";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../hooks/use-auth";
import registerValidate from "../features/auth/validates/validate-register";

const INPUT_LOGIN = {
  mobileOrEmail: "",
  firstName: "",
  lastName: "",
  userName: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterPage() {
  const [input, setInput] = useState(INPUT_LOGIN);
  const [error, setError] = useState({});

  const { register } = useAuth();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const validateError = registerValidate(input);

      if (validateError) {
        return setError(validateError);
      }

      await register(input);
      toast.success("Register success");
    } catch (error) {
      console.log(error);
      if (error.response?.data.message === "Email or Mobile is used") {
        setError({ mobileOrEmail: "Email or Mobile is used" });
      }

      if (error.response?.data.message === "Username is used") {
        setError({ mobileOrEmail: "Username is used" });
      }

      toast.error("Internal server error");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center border border-gray-300 py-10 px-10 gap-4"
      >
        <Title title="REGISTER" />
        <h5 className="text-gray-500">
          Sign up to see photos and videos from your friends.
        </h5>
        <div className="flex flex-col gap-2">
          <Input
            type="text"
            text="Mobile number or Email"
            placeholder="Mobile number or Email"
            name="mobileOrEmail"
            value={input.mobileOrEmail}
            onChange={handleChangeInput}
            errorMsg={error.mobileOrEmail}
          />
          <Input
            type="text"
            text="First Name"
            placeholder="First Name"
            name="firstName"
            value={input.firstName}
            onChange={handleChangeInput}
            errorMsg={error.firstName}
          />
          <Input
            type="text"
            text="Last Name"
            placeholder="Last Name"
            name="lastName"
            value={input.lastName}
            onChange={handleChangeInput}
            errorMsg={error.lastName}
          />
          <Input
            type="text"
            text="Username"
            placeholder="Username"
            name="userName"
            value={input.userName}
            onChange={handleChangeInput}
            errorMsg={error.userName}
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
          <Input
            type="password"
            text="confirmPassword"
            placeholder="Confirm password"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={handleChangeInput}
          />
        </div>
        <Button text="Sign up" />
        <div>
          <h1 className="font-light">
            Have an account?{" "}
            <Link
              className="text-blue-500 font-normal hover:underline"
              to="/login"
            >
              Log in
            </Link>
          </h1>
        </div>
      </form>
    </div>
  );
}
