import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/home";
import AboutUs from "../pages/aboutUs";
import Products from "../pages/products";
import Teams from "../pages/teams";
import BlogList from "../pages/blogList";
import BlogDetail from "../pages/blogDetail";
import BlogCreate from "../pages/blogCreate";
import Register from "../pages/register";
import Login from "../pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/teams",
        element: <Teams />,
      },
      {
        path: "/blog",
        element: <BlogList />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetail />,
      },
      {
        path: "/blog/create",
        element: <BlogCreate />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
    ],
  },
]);
