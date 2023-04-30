import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import LandingPage from '../pages/LandingPage'
import News from '../pages/News'
import Destination from '../pages/Distination'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
// import SlidesImage from "../pages/SlidesImage";
import PageLayout from "../layout/PageLayout";
import PlaceCard from "../pages/PlaceCard";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
        {
          path: "/",
          element: <LandingPage></LandingPage>,
          loader: () =>
            fetch("https://travel-guru-server-sarowar-hossain.vercel.app/data"),
        },
        {
            path: 'placeCard/:id',
            element: <PlaceCard></PlaceCard>,
            loader: ({params})=>fetch(`https://travel-guru-server-sarowar-hossain.vercel.app/data/${params.id}`)
        }
      ],
    },
    {
      path: "news",
      element: <PageLayout></PageLayout>,
      children: [
        {
          path: "news",
          element: <News></News>,
        },
        {
          path: "/news/destination",
          element: <Destination></Destination>,
        },
        {
          path: "/news/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/news/contact",
          element: <Contact></Contact>,
        },
      ],
    },
  ]);