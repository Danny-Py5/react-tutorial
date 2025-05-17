import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import UserPages from "./react-router/pages/UserPages.jsx";
import BlogPostsPage from "./react-router/pages/BlogPostsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/users",
        element: <UserPages />,
      },
      {
        path: "/blog-posts",
        element: <BlogPostsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
