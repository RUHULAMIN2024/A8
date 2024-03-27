import { createBrowserRouter } from "react-router-dom";
import ReadList from "../components/ReadList";
import Wishlist from "../components/Wishlist";
import Layout from "../layout/Layout";
import AboutUs from "../pages/AboutUs";
import Details from "../pages/Details";
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
          path:"/:id",
          element:<Details></Details>,
          loader: ()=> fetch('/fakeData.json'),
        },
        {
          path:"/listed-books",
          element: <ListedBooks></ListedBooks>,
          children:[
            {
              path:'',
              element: <ReadList></ReadList>,
            },
            {
              path:'wishlist',
              element: <Wishlist></Wishlist>,
            }
          ]
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