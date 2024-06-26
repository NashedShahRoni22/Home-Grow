import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main";
import ComingSoon from "./pages/ComingSoon";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import JuteProducts from "./pages/JuteProducts";
import ManagementProfile from "./pages/ManagementProfile";
import NotFound from "./pages/NotFound";
import Opportunities from "./pages/Opportunities";
import OurDepartments from "./pages/OurDepartments";
import OurEFA from "./pages/OurEFA";
import OurMission from "./pages/OurMission";
import OurPP from "./pages/OurPP";
import PhotoGallery from "./pages/PhotoGallery";
import Product from "./pages/Product";
import SeedsProducts from "./pages/SeedsProducts";
import VagetablesProd from "./components/VagetablesProd";
import Moringa from "./components/vagetables/Moringa";
import FoodProducts from "./pages/FoodProducts";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/contact",
          element:<Contact></Contact>,
        },
        {
          path: "/mission",
          element:<OurMission></OurMission>,
        },
        {
          path: "/opportunites",
          element:<Opportunities></Opportunities>,
        },
        {
          path: "/profile",
          element:<ManagementProfile></ManagementProfile>,
        },
        {
          path: "/ourpp",
          element:<OurPP></OurPP>,
        },
        {
          path: "/ourefa",
          element:<OurEFA></OurEFA>,
        },
        {
          path: "/ourdept",
          element:<OurDepartments></OurDepartments>,
        },
        {
          path: "/photogalary",
          element:<PhotoGallery></PhotoGallery>,
        },
        {
          path: "/product",
          element:<Product></Product>,
        },
        {
          path: "/seedsProduct",
          element:<SeedsProducts></SeedsProducts>,
        },
        {
          path: "/foodsProduct",
          element:<FoodProducts></FoodProducts>,
        },
        {
          path: "/jutesProduct",
          element:<JuteProducts></JuteProducts>,
        },
        {
          path: "/vagetablesProduct",
          element:<VagetablesProd></VagetablesProd>,
        },
        {
          path: "/moringa",
          element:<Moringa></Moringa>,
        },
      ],
    },
    {
      path: "/comigSoon",
      element:<ComingSoon/>,
    },
    {
      path:'*',
      element: <NotFound></NotFound>
    }
  ]);
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
