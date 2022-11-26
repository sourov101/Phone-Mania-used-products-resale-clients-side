import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import img from './assets/images/404.jpg'
import Products from './Pages/Home/Products';
import PrivateRoute from './Routes/PrivateRoutes';
import { Toaster } from 'react-hot-toast';
import DashBoardLayout from './Layouts/DashBoardLayout';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyBookings from './Pages/Dashboard/MyBookings';
import AllUsers from './Pages/Dashboard/AllUsers';
import AllSellers from './Pages/Dashboard/AllSellers';
import ReportedItems from './Pages/Dashboard/ReportedItems';
import AdminRoute from './Routes/AdminRoutes';
import AddProduct from './Pages/Dashboard/AddProduct';

function App() {
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
          element: <Signup></Signup>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/product/:id',
          element: <PrivateRoute><Products></Products></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
        },


      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
      children: [
        {
          path: '/dashboard',
          element: <MyBookings></MyBookings>
        },
        {
          path: '/dashboard/allusers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: '/dashboard/allsellers',
          element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
        },
        {
          path: '/dashboard/reporteditems',
          element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
        },
        {
          path: '/dashboard/addproduct',
          element: <AddProduct></AddProduct>
        },

      ]


    },

    {
      path: '*',
      element: <div><img className='h-[650px] w-full' src={img} alt="" /></div>
    },

  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
