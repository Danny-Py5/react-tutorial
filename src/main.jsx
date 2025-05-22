import App from "./App.jsx";
import Home from "./header/Home.jsx";
import About from "./header/About.jsx";
import Contact from "./header/Contact.jsx";
import Service from "./header/Service.jsx";
import Blog from "./header/Blog.jsx";
import Register from "./header/Register.jsx";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);

// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import App from "./App.jsx";

// import BlogPostsPage from "./react-router/pages/BlogPostsPage.jsx";
// import UserPage from "./react-router/pages/UserPages.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/blog-post",
//         element: <BlogPostsPage />,
//       },
//       {
//         path: "/users",
//         element: <UserPage />,
//       },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );
