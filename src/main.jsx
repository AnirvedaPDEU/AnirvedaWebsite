import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createHashRouter,
  RouterProvider
} from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Committee from "./Pages/Committee"
import Events from "./Pages/Events"
import Gallery from "./Pages/Gallery"
import Em from "./Pages/Em"
import SM from "./Pages/SM"
import Logs from "./Pages/Logs"
import Publicity from "./Pages/Publicity"
import Cnd from "./Pages/Cnd"
import Tech from "./Pages/Tech"
import VideoEditing from './Pages/VideoEditing'
import GD from './Pages/GD'
import Sponsorship from './Pages/Sponsorship'

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/committee",
    element: <Committee />
  },
  {
    path: "/events",
    element: <Events />
  },
  {
    path: "/gallery",
    element: <Gallery />
  },
  {
    path: "/em",
    element: <Em />
  },
  {
    path: "/logs",
    element: <Logs />
  },
  {
    path: "/sm",
    element: <SM />
  },
  {
    path: "/publicity",
    element: <Publicity />
  },
  {
    path: "/cnd",
    element: <Cnd />
  },
  {
    path: "/tech",
    element: <Tech />
  },
  {
    path: "/ve",
    element: <VideoEditing />
  },
  {
    path: "/gd",
    element: <GD />
  },
  {
    path: "/sponsor",
    element: <Sponsorship />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
