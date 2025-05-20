import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import BlogPostsPage from "./react-router/pages/BlogPostsPage.jsx";
import UserPage from "./react-router/pages/UserPages.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/blog-post",
        element: <BlogPostsPage />,
      },
      {
        path: "/users",
        element: <UserPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
