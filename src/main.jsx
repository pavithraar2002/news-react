import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Root from './components/Root.jsx'
import Trending from './components/Trending.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path: "/",
        element: <App/>,
      },
      {
        path: "/trending",
        element: <Trending/>,
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
