import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AdminLayout from "../Layout/AdminLayout";
import AddServices from "../Pages/AddServices/AddServices";

const MyRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout><Outlet></Outlet></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <h1>About</h1>
            },
            {
                path: 'contact',
                element: <h1>Contact us</h1>
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