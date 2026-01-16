import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import Backendless from "../lib/backendless";
import { useAuthStore } from "../store/authStore";
import { validationSchema } from "../features/login/loginSchema/loginSchema";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (values: any, { setSubmitting }: any) => {
    try {
      const whereClause = `email = '${values.email}'`;
      const queryBuilder =
        Backendless.DataQueryBuilder.create().setWhereClause(whereClause);
      const result = await Backendless.Data.of("userCompanyProfile").find(
        queryBuilder
      );

      if (result.length === 0) {
        throw new Error("User not found.");
      }

      const user = result[0] as any;

      if (user.password !== values.password) {
        throw new Error("Invalid password.");
      }

      const username = user.username || user.email || "User";
      const role = user.role || 2; // Default to 'User' role if not specified
      setAuth(username, role);

      toast.success(`Welcome back, ${username}!`);
      navigate("/");
    } catch (error: any) {
      console.error("Login Error:", error);
      toast.error(
        error.message || "Login failed. Please check your credentials."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="grow flex items-center justify-center relative overflow-hidden bg-spice-dark py-12">
      {/* Background Elements for depth */}
      <div className="card w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl relative z-10">
        <div className="card-body p-8">
          <h2 className="text-3xl font-bold text-center mb-2 text-spice-cream">
            Login
          </h2>
          <p className="text-center text-gray-400 mb-6">
            Welcome back to Japko Pangan
          </p>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-spice-cream/80">
                      Email
                    </span>
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full bg-white/5 border-white/10 text-spice-cream focus:border-spice-gold focus:outline-none placeholder-gray-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-spice-red text-sm mt-1 ml-1"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-spice-cream/80">
                      Password
                    </span>
                  </label>
                  <div className="relative">
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter your password"
                      className="input input-bordered w-full bg-white/5 border-white/10 text-spice-cream focus:border-spice-gold focus:outline-none placeholder-gray-500 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white cursor-pointer"
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-spice-red text-sm mt-1 ml-1"
                  />
                </div>

                <div className="flex justify-end">
                  <a
                    href="#"
                    className="text-sm text-spice-gold hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn bg-spice-gold hover:bg-yellow-500 text-spice-dark border-none font-bold text-lg mt-4 w-full"
                >
                  {isSubmitting ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Sign In"
                  )}
                </button>

                <div className="text-center mt-4">
                  <span className="text-gray-400">Don't have an account? </span>
                  <Link
                    to="/register"
                    className="text-spice-gold hover:underline font-semibold"
                  >
                    Sign up
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
