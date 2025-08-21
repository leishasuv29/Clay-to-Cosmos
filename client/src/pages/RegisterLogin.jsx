import { useState } from "react";
import { useFormik } from "formik";
import PageTransitionWrapper from "../components/PageTransitionWrapper";
import { loginSchema, registerSchema } from "../utils/userValidation";

function RegisterLogin() {
  const [isUser, setIsUser] = useState(true);

  // ✅ Formik instance (switch schema based on isUser)
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      contact: "",
    },
    validationSchema: isUser ? loginSchema : registerSchema,
    onSubmit: (values, { resetForm }) => {
      if (isUser) {
        console.log("Login Data:", values);
      } else {
        console.log("Register Data:", values);
      }
      resetForm();
    },
  });

  return (
    <PageTransitionWrapper>
      <div className="bg-[#fce4ec] min-h-screen py-12 px-4 flex flex-col items-center justify-evenly">
        <h1 className="text-3xl sm:text-5xl font-extrabold underline underline-offset-8 decoration-2 decoration-[#7a4c36] text-center font-cormorant text-[#3d5234] mb-10 tracking-wide">
          {isUser ? "Login" : "Register"}
        </h1>

        {/* Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8 pt-10 w-full max-w-md">
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {!isUser && (
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7a4c36] 
                  font-quicksand text-base placeholder:font-lora placeholder-gray-500"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
                )}
              </div>
            )}

            <div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7a4c36] 
                font-quicksand text-base placeholder:font-lora placeholder-gray-500"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7a4c36] 
                font-quicksand text-base placeholder:font-lora placeholder-gray-500"
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
              )}
            </div>

            {!isUser && (
              <div>
                <input
                  type="text"
                  placeholder="Contact Number"
                  name="contact"
                  value={formik.values.contact}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7a4c36] 
                  font-quicksand text-base placeholder:font-lora placeholder-gray-500"
                />
                {formik.touched.contact && formik.errors.contact && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.contact}</p>
                )}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#7a4c36] text-white py-3 rounded-lg font-semibold hover:bg-[#5e3828] transition font-quicksand text-lg"
            >
              {isUser ? "Login" : "Register"}
            </button>
          </form>

          {/* Toggle link */}
          <p className="text-center mt-6 text-gray-700 font-lora text-base">
            {isUser ? "New here?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsUser(!isUser)}
              className="text-[#5f8d4e] font-semibold hover:underline hover:cursor-pointer"
            >
              {isUser ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </PageTransitionWrapper>
  );
}

export default RegisterLogin;
