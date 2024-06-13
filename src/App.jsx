import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
// import Login from "./pages/Login"; 
// import Register from "./pages/Register"; 

function App() {
  // const isAuthenticated = false; // Replace with actual authentication logic

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "product/:id",
          element: <Product />
        },
          // {
          //   path: "login",
          //   element: isAuthenticated ? <Navigate to="/" /> : <Login />
          // },
          // {
          //   path: "register",
          //   element: isAuthenticated ? <Navigate to="/" /> : <Register />
          // }
      ]
    }
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
