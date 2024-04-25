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



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allTouristsSpot',
        element: <AllTouristsSpot></AllTouristsSpot>
      },
      {
        path: '/addTouristsSpot',
        element: <AddTouristsSpot></AddTouristsSpot>
        
      },
      {
        path: '/myList',
        element: <MyList></MyList>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);


 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
