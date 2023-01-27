import Home from "../Components/Home/Home";
import OrganizationSignUp from "../Components/OrganizationSignUp/OrganizationSignUp";
import About from "../Components/Pages/About/About";
import Blog from "../Components/Pages/Blog/Blog";
import ClientDashboard from "../Components/Pages/Dashboard/ClientDashboard";
import Dashboard from "../Components/Pages/Dashboard/Dashboard";
import Events from "../Components/Pages/Events/Events";
import Login from "../Components/Pages/Login/Login";
import Programs from "../Components/Pages/Programs/Programs";
import RequestForm from "../Components/ServiceRequest/RequestForm";
import ErrorPage from "../Components/Shared/ErrorPage/ErrorPage";
import SignUp from "../Components/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/programs",
        element: <Programs></Programs>,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signup-organization",
        element: <OrganizationSignUp></OrganizationSignUp>,
      },
      {
        path: "/request-pickup",
        element: <RequestForm></RequestForm>,
      },
      {
        path: "/dashboard/client",
        element: <ClientDashboard></ClientDashboard>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard> ,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
]);
