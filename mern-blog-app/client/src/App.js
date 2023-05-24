import {createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import FreeComponent from "./components/FreeComponent";
import AuthComponent from "./components/AuthComponent";

const Layout = () => {
  return(
    <div className="main-layout">
    <Navbar />
    <Outlet />
    <Footer />
    </div>
    )
  
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
    ]
  },
  
])


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
