import { createBrowserRouter, redirect } from "react-router";
import BaseLayout from "../pages/BaseLayout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import BookPage from "../pages/BookPage";
import BookItem from "../components/BookItem";
import LoginPage from "../pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: BaseLayout, // element: <BaseLayout />
    loader: () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "books",
        element: <BookPage />,
        children: [
          {
            path: ":bookId",
            element: <BookItem />,
          },
        ],
      },
    ],
  },
  {
    path: "login",
    Component: LoginPage,
    loader: () => {
      const token = localStorage.getItem("access_token");
      if (token) {
        return redirect("/");
      }
      return null;
    },
  },
]);
