import React from "react";
import {Link, useNavigate} from "react-router-dom";

export const List = ({data}) => {
  const navigate = useNavigate();

  const addToCart = () => {
    console.log(data.id);
  };

  return (
    <div className="col-md-3">
      <div className="card p-2 mb-4" style={{minHeight: "420px"}}>
        <div
          className="card-image"
          style={{
            minHeight: "270px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={data.image}
            alt={data.title}
            style={{
              width: "70%",
              display: "block",
              margin: "0 auto",
              maxHeight: "240px",
            }}
          />
        </div>
        <span
          style={{
            fontSize: "12px",
            textTransform: "uppercase",
          }}
        >
          {data.category}
        </span>
        <a
          href="/product-details"
          className="product-title"
          style={{fontSize: "16px", minHeight: "48px"}}
          onClick={() => {
            navigate("/product-details", {
              state: data.id,
            });
          }}
        >
          {data.title}
        </a>
        <p className="product-price">₹{data.price}</p>
        <button className="btn btn-primary" onClick={addToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};
