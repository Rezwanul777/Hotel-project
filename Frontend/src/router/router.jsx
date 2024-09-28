import {
    createBrowserRouter,
    
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import About from "../pages/minipages/About";
import Privacy from "../pages/minipages/Privacy";
import Contact from "../pages/minipages/Contact";
import SingleBlog from "../pages/blogs/SingleBlog";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
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
          path: "/privacy",
          element: <Privacy />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/blog/:id",
          element: <SingleBlog />,
        },
      ],

    },
  ]);

  export default router