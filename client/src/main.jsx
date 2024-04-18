import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import About from './pages/About/About.jsx';
import Home from './pages/Home/Home.jsx';
import AddPhoto from './pages/AddPhoto/AddPhoto.jsx';
import PhotoDetails from './components/PhotoDetails.jsx';
import EditPhoto from './pages/EditPhoto/EditPhoto.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create",
        element: <AddPhoto />,
      },
      {
        path: "/photo/:id",
        element: <PhotoDetails />,
      },
      {
        path: "/edit/:id",
        element: <EditPhoto />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
