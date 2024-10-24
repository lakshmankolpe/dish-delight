
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./views/Home/Home"
import About from "./views/About/About"
import VegCard from './views/Categories/categoryVeg/CategoriesVeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "./components/Navbar/Navbar"
import Recipe from "./views/Recipe/RecipeVeg/Recipe"
import RecipeNonveg from './views/Recipe/RecipeNonveg/RecipeNonveg';
import Footer from './components/Footer/Footer';
import Login from "./views/Login/Login"
import HomeCategories from './components/HomeCategories/HomeCategories';
import "./index.css"
import CategoryNonveg from "./views/Categories/categoryNonveg/CategorNonveg"
import CategoriesVeg from './views/Categories/categoryVeg/CategoriesVeg';
import CategoryBreakfast from "./views/Categories/categoryBreakfast/CategoryBreakfast"
import MaharashtrianSpecial from './views/MaharashtrianSpecial/MaharashtrianSpecial';
import SpecialDish from "./components/SpecialDish/Veg"
import Dishcard from "./components/SpecialDish/Dishcard"
import RecipeBreakfast from './views/Recipe/RecipeBreakfast/RecipeBreakfast';
import Blog from './views/Blog/Blog';


const root = ReactDOM.createRoot(document.getElementById('root'));



const router = createBrowserRouter([

    {
        path: "Navbar",
        element: <Navbar />,
    },
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/VegCard/:id",
        element: <VegCard />,
    },

    {
        path: "/veg/:id",
        element: <Recipe />
    },

    {
        path: "/non-veg/:id",
        element: <RecipeNonveg />
    },
   
    {
        path: "/breakfast/:id",
        element: <RecipeBreakfast />
    },

    {
        path: "/footer",
        element: <Footer/>
    },

    {
        path: "/login",
        element: <Login/>
    },

   {
    path: "/homecategories",
    element: <HomeCategories />
   },
   {
    path:"/veg",
    element: <CategoriesVeg />
   },
   {
    path : "/non-veg",
    element:<CategoryNonveg/>
   },
   {
    path : "/breakfast",
    element:<CategoryBreakfast/>
   },

   {
    path: "/maharashtraspecial/:id",
    element: <MaharashtrianSpecial/>
   },
   {
    path: "/specialdish",
    element: <SpecialDish/>
   },
   {
    path: "/Dishcard/:id",
    element :<Dishcard />
   },
   {
    path: "/blog",
    element : <Blog/>
}



])
root.render(<RouterProvider router={router} />)