import * as Yup from "yup";

export const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username minimal 3 karakter")
    .required("Username wajib diisi"),
  email: Yup.string()
    .email("Format email tidak valid")
    .required("Email wajib diisi"),
  password: Yup.string()
    .min(6, "Password minimal 6 karakter")
    .required("Password wajib diisi"),
});
