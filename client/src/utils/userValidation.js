import * as Yup from "yup";

// ✅ Validation schemas
const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const registerSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  contact: Yup.string()
    .matches(/^[0-9]{10}$/, "Contact must be 10 digits")
    .required("Contact number is required"),
});

export { loginSchema, registerSchema };
