import { Outlet } from "react-router-dom";
import Navbar from "../pages/common/Navbar/Navbar";
import Footer from "../pages/common/Footer/Footer";

const ClientLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default ClientLayouts;
