import { Outlet } from "react-router-dom";
import Header from "../shared/Header";


const AuthenticationLayout = () => {
    return (
        <div className="container mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthenticationLayout;