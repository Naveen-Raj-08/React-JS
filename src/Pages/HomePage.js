import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Todo} from "./Todo";

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
    <>
      <title>Home Page</title>
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
              to="/m2catalog"
            >
              Catalog
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

      {/* <Todo /> */}
    </>
  );
};
