import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import AboutUs from "../pages/AboutUs";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PageToRead from "../pages/PageToRead";
import UpcomingBooks from "../pages/UpcomingBooks";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element: <Home></Home>,
          loader: ()=> fetch('/fakeData.json')
        },
        {
          path:"/listed-books",
          element: <ListedBooks></ListedBooks>,
        },
        {
          path:"/pages-to-read",
          element: <PageToRead></PageToRead>,
        },
        {
          path:"/upcoming-books",
          element: <UpcomingBooks></UpcomingBooks>,
        },
        {
          path:"/about-us",
          element: <AboutUs></AboutUs>,
        },
      ],
    },
  ]);

  export default Router;