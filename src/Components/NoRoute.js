import React from "react";
import {Link} from "react-router-dom";

export const NoRoute = () => {
  return (
    <div className="m-4 text-center">
      <h2>We're sorry page not found</h2>
      <Link className="text-decoration-none text-success" to="/">
        Back to Home
      </Link>
    </div>
  );
};
