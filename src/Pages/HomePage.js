import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export const HomePage = () => {
  const [Load, setLoad] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    setLoad(true);
    setTimeout(() => {
      navigate("/login");
      setLoad(false);
    }, 3000);
  };

  return (
    <div className="container">
      <div className="row m-0 my-5 align-items-center">
        <div className="col-md-3 text-center">
          <Link
            className="text-capitalize text-decoration-none text-black"
            to="/comic"
          >
            Comic API
          </Link>
        </div>
        <div className="col-md-3 text-center">
          <Link
            className="text-capitalize text-decoration-none text-black"
            to="/todo"
          >
            Todo
          </Link>
        </div>
        <div className="col-md-3 text-center">
          <Link
            className="text-capitalize text-decoration-none text-black"
            to="/file-upload"
          >
            Upload and display
          </Link>
        </div>
        <div className="col-md-3 text-center">
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
            {Load === true ? (
              <span className="spinner-border mx-2 spinner-border-sm"></span>
            ) : null}
          </button>
        </div>
      </div>
    </div>
  );
};
