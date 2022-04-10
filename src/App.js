import "bootstrap/dist/css/bootstrap.min.css";
import "./Sass/style.scss";
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import {Signup} from "./Components/Signup";
import {Login} from "./Components/Login";
import {Stories} from "./Components/Stories";
import {HomePage} from "./Pages/HomePage";
import {Todo} from "./Pages/Todo";
import React, {useEffect, useState} from "react";
import {Home} from "./Components/Home";
import {NoRoute} from "./Components/NoRoute";
import {Catalog} from "./Pages/Catalog";
import {Details} from "./Components/Details";

function App() {
  return (
    <div className="container my-3">
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="*" element={<NoRoute />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/comic" element={<ProtectedRoute />}>
          <Route path="/comic" element={<Home />} />
        </Route>
        <Route path="/m2catalog" element={<ProtectedRoute />}>
          <Route path="/m2catalog" element={<Catalog />} />
        </Route>
        <Route path="/product-details" element={<Details />} />
        <Route path="/comic/stories" element={<ProtectedRoute />}>
          <Route path="/comic/stories" element={<Stories />} />
        </Route>
      </Routes>
    </div>
  );
}

const useAuth = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth");
    setUser(isAuth);
  }, [user]);

  console.log(user);
  if (user === null) {
    return false;
  } else {
    return true;
  }
};

const ProtectedRoute = () => {
  const auth = useAuth();

  return auth === false ? <Navigate to="/login" /> : <Outlet />;
};
export default App;
