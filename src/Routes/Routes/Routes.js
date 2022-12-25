import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../../Layout/AdminLayout";
import Main from "../../Layout/Main";
import AllBuyers from "../../Pages/AdminDashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/AdminDashboard/AllSellers/AllSellers";
import AllUsers from "../../Pages/AdminDashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/AdminDashboard/Dashboard/Dashboard";
import Blogs from "../../Pages/Blogs/Blogs";
import MyOrder from "../../Pages/BuyerDashboard/MyOrder/MyOrder";
import Category from "../../Pages/Categories/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";
import AddProduct from "../../Pages/SellerDashboard/AddProduct/AddProduct";
import MyProducts from "../../Pages/SellerDashboard/MyProducts/MyProducts";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../Buyer/Buyer";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/category/:name',
                element: <PrivateRoute><Category></Category></PrivateRoute>,
                loader: ({ params }) => fetch(`https://recycled-books-server.vercel.app/category/${params.name}`)
            },
            {
                path: "*",
                element: <NotFoundPage></NotFoundPage>
            }
        ]
    },
    {
        path: '/admindashboard',
        element: <AdminRoute><AdminLayout></AdminLayout></AdminRoute>,
        children: [
            // {
            //     path: '/dashboard',
            //     element: <Home></Home>
            // },
            {
                path: '/admindashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/admindashboard/allseller',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            // {
            //     path: '/admindashboard/addproduct',
            //     element: <SellerRoute><AddAProduct></AddAProduct></SellerRoute>

            // }

        ]

    },
    {
        path: '/sellerdashboard',
        element: <SellerRoute><AdminLayout></AdminLayout></SellerRoute>,
        children: [
            {
                path: '/sellerdashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/sellerdashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            }

        ]

    },
    {
        path: '/buyerdashboard',
        element: <BuyerRoute><AdminLayout></AdminLayout></BuyerRoute>,
        children: [
            // {
            //     path: '/dashboard',
            //     element: <Home></Home>
            // },
            {
                path: '/buyerdashboard/myorder',
                element: <BuyerRoute><MyOrder></MyOrder></BuyerRoute>
            }

        ]

    }
])

export default router;