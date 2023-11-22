import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AdminLayout from "../Layout/AdminLayout";
import AddServices from "../Pages/AddServices/AddServices";
import PrivateRoute from "./PrivateRoute";
import Bookings from "../Pages/Bookings/Bookings";
import ServiceDetail from "../Pages/Services/ServiceDetail";
import ServicePage from "../Pages/Services/ServicePage";
import ContactUs from "../components/ContactUs";
import ErrorPage from "../components/ErrorPage";

const MyRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout><Outlet></Outlet></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'bookings',
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>,
            },
            {
                path: 'contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: 'service',
                element: <ServicePage></ServicePage>
            },
            {
                path: 'service-detail/:id',
                element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/api/v1/service-detail/${params.id}`)
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/admin',
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                path: 'addservices',
                element: <AddServices></AddServices>
            }
        ]
    }
])

export default MyRoute;