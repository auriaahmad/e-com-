import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import SignUp from "../components/signup/SignUp";
import SignIn from "../components/signin/SignIn";
function Routing() {
    return (
        <div>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </div>
    );
}

export default Routing;