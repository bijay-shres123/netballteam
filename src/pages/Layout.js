/**
******************************************************************************************
* The following code is used in index.html to output header and footer on the every page
* 
* 
******************************************************************************************
*/

import { Outlet, Link } from "react-router-dom";
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
const Layout = () => {
  return (
    <>
      <NavBar/>
      <Outlet />
      <Footer/>
    </>
  )
};

export default Layout;