import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Blogs from "../pages/Blogs";
import Bookmarks from "../pages/Bookmarks";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element: <Home></Home>,
        },
        {
          path:"/blogs",
          element: <Blogs></Blogs>,
        },
        {
          path:"/bookmark",
          element: <Bookmarks></Bookmarks>,
        },
      ],
    },
  ]);

  export default Router;