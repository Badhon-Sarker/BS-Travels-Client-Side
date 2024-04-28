import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Routes/Root/Root.jsx';
import Home from './Routes/Home/Home.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import AllTouristsSpot from './Routes/AllTouristsSpot/AllTouristsSpot.jsx';
import AddTouristsSpot from './PrivateRoutes/AddTouristsSpot/AddTouristsSpot.jsx';
import MyList from './PrivateRoutes/MyList/MyList.jsx';
import Login from './Routes/Login/Login.jsx';
import Register from './Routes/Register/Register.jsx';
import AuthProvider from './Provider/AuthProvider/AuthProvider.jsx';
import  { Toaster } from 'react-hot-toast';
import PrivateRoute from './PrivateRoutes/PrivateRoute/PrivateRoute.jsx';
import UpdatePage from './Routes/UpdatePage/UpdatePage.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
       
      },
      {
        path: '/allTouristsSpot',
        element: <AllTouristsSpot></AllTouristsSpot>,
      
        
      },
      {
        path: '/addTouristsSpot',
        element: <PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>
        
      },
      {
        path: '/myList',
        element: <PrivateRoute><MyList></MyList></PrivateRoute>
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
        path: '/updatePage',
        element: <UpdatePage></UpdatePage>
      }
      
    ]
  },
]);


 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider> <Toaster />
  </React.StrictMode>,
)
