import { useFormik } from "formik";
import { Link } from "react-router-dom";
import Backendless from "../lib/backendless";
import { validationSchema } from "../features/register/schema/registerSchema";
import { toast } from "react-toastify";

export default function Register() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const createUser: any = await Backendless.Data.of(
          "userCompanyProfile"
        ).save(values);
        console.log("createUser", createUser);
        toast.success("Registration successful! Please login.");
      } catch (error: any) {
        console.log("Create User Failed", error);
        toast.error(error.message || "Registration failed");
      }
    },
  });

  return (
    <div className="grow flex items-center justify-center relative overflow-hidden bg-spice-dark py-12">
      <div className="relative z-10 w-full max-w-md p-8">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 transform transition-all hover:scale-[1.01]">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
              Join the Journey
            </h1>
            <p className="text-white/60">
              Create your account to experience authentic flavors.
            </p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80 ml-1">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                name="username"
                className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                  formik.touched.username && formik.errors.username
                    ? "border-red-500 focus:border-red-500"
                    : "border-white/10 focus:border-spice-gold"
                } text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-spice-gold/20 transition-all duration-300`}
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.username && formik.touched.username && (
                <div className="text-red-400 text-xs ml-1 animate-pulse">
                  {formik.errors.username}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80 ml-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-white/10 focus:border-spice-gold"
                } text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-spice-gold/20 transition-all duration-300`}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email && (
                <div className="text-red-400 text-xs ml-1 animate-pulse">
                  {formik.errors.email}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80 ml-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                name="password"
                className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500 focus:border-red-500"
                    : "border-white/10 focus:border-spice-gold"
                } text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-spice-gold/20 transition-all duration-300`}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password && (
                <div className="text-red-400 text-xs ml-1 animate-pulse">
                  {formik.errors.password}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-linear-to-r from-spice-gold to-yellow-400 text-spice-dark font-bold text-lg shadow-lg shadow-spice-gold/20 hover:shadow-spice-gold/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Register
            </button>
          </form>

          <div className="mt-8 text-center text-white/60 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-spice-gold hover:text-white font-medium transition-colors duration-300"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
