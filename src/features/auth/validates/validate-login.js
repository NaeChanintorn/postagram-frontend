import Joi from "joi";
import validate from "../../../utilities/validate";

const loginSchema = Joi.object({
  mobileOrEmailOrUserName: Joi.string().required().messages({
    "string.empty": "Email or Mobile or Username is required",
    "any.required": "Email or Mobile or Username is required",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Password is required",
    "any.required": "Password is required",
  }),
  email: Joi.forbidden().when("mobileOrEmailOrUserName", {
    is: Joi.string().email({ tlds: false }),
    then: Joi.string().default(Joi.ref("mobileOrEmailOrUserName")),
  }),
  mobile: Joi.forbidden().when("mobileOrEmailOrUserName", {
    is: Joi.string().pattern(/^[0-9]{10}$/),
    then: Joi.string().default(Joi.ref("mobileOrEmailOrUserName")),
  }),
  userName: Joi.forbidden().when("mobileOrEmailOrUserName", {
    is: Joi.string()
      .lowercase()
      .trim()
      .pattern(/^[a-zA-Z0-9]{3,30}$/),
    then: Joi.string().default(Joi.ref("mobileOrEmailOrUserName")),
  }),
});

const validateLogin = (input) => validate(loginSchema)(input);

export default validateLogin;
