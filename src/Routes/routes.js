import About from "../Components/Pages/About/About";
import Blog from "../Components/Pages/Blog/Blog";
import Events from "../Components/Pages/Events/Events";
import Login from "../Components/Pages/Login/Login";
import Programs from "../Components/Pages/Programs/Programs";
import ErrorPage from "../Components/Shared/ErrorPage/ErrorPage";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/programs",
                element: <Programs></Programs>
            },
            {
                path: "/events",
                element: <Events></Events>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            
        ]
    }
])