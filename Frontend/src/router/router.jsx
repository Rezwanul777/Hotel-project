import {
    createBrowserRouter,
    
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import About from "../pages/minipages/About";
import Privacy from "../pages/minipages/Privacy";
import Contact from "../pages/minipages/Contact";
import SingleBlog from "../pages/blogs/SingleBlog";
import Login from './../pages/users/login/Login';
import Register from './../pages/users/register/Register';
import AdminLayOut from "../pages/admin/AdminLayOut";
import Dashboard from "../pages/dashboard/Dashboard";
import AddNewPost from "../pages/admin/post/AddNewPost";
import ManageitemPost from "../pages/admin/post/ManageitemPost";
import ManageUsers from "../pages/admin/users/ManageUsers";
import PrivateRouter from "./PrivateRouter";
import UpdatePost from "../pages/admin/post/UpdatePost";
import ErrorPage from "../pages/error/ErrorPage";




const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement:<ErrorPage/>,
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
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/register",
          element: <Register/>,
        },
        {
          path: "dashboard",
          element: <PrivateRouter><AdminLayOut/></PrivateRouter>,
          children: [
            {
              path: "",
            element:<Dashboard />,
            },
            {
              path: "add-new-post",
            element:<AddNewPost />,
            },
            {
              path: "manage-items",
            element:<ManageitemPost />,
            },
            {
              path: "users",
            element:<ManageUsers/>,
            },
            {
              path:"update-items/:id",
              element:<UpdatePost/>
            }
          ],
        },
      ],

    },
  ]);

  export default router