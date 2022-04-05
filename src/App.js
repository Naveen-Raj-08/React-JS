import "bootstrap/dist/css/bootstrap.min.css";
import "./Sass/style.scss";
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import {Signup} from "./Components/Signup";
import {Login} from "./Components/Login";
import {Home} from "./Components/Home";
import {Stories} from "./Components/Stories";
import {Pagination} from "./Components/Pagination";
import {Todo} from "./Pages/Todo";
import {HomePage} from "./Pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Todo />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/stories" element={<Stories />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/todo" element={<Todo />} />
      </Routes>
    </>
  );
}

const ProtectedRoute = () => {
  let isAuth = localStorage.getItem("isAuth");
  if (isAuth === true) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default App;
