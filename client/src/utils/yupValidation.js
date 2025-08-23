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

const customOrderSchema = Yup.object({
  description: Yup.string().required("Description is required."),
  size: Yup.string().required("Size is required (e.g. 12 inch)."),
  material: Yup.string().required("Material is required."),
  file: Yup.mixed()
    .required("Please attach an image or sketch.")
    .test("fileSize", "Max file size 5MB", (f) =>
      f ? f.size <= 5 * 1024 * 1024 : false
    )
    .test("fileType", "Only image files allowed", (f) =>
      f ? f.type.startsWith("image/") : false
    ),
  delivery: Yup.date()
    .min(
      new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
      "Delivery must be at least 60 days from today"
    )
    .required("Delivery date is required"),
});

export { loginSchema, registerSchema, customOrderSchema };
