import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";


const Main = () => {
    const location = useLocation()
    return (
        <div>
            {location == "login" ||location=="register" ||<NavBar></NavBar>}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;