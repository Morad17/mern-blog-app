import {BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import FreeComponent from "./components/FreeComponent";
import AuthComponent from "./components/AuthComponent";
import ProtectedRoutes from "./components/ProtectedRoutes";

// const Layout = () => {
//   return(
//     <div className="main-layout">
//     <Navbar />
//     <Outlet />
//     <Footer />
//     </div>
//     )
  
// }

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />
//       },
//       {
//         path: '/register',
//         element: <Register />
//       },
//       {
//         path: '/login',
//         element: <Login />
//       },
//     ]
//   },
  
// ])


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
           <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/free" element={<FreeComponent />} />
          <Route path="/auth" element={<ProtectedRoutes />} />
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
