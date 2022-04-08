import axios from "axios";
import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

export const Details = () => {
  const [Product, setProduct] = useState(null);
  const [Load, setLoad] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchProduct = async () => {
      await axios
        .get(`https://fakestoreapi.com/products/${location.state}`)
        .then((res) => {
          setProduct(res.data);
          setLoad(false);
        })
        .catch((err) => console.error(err));
    };

    fetchProduct();
  }, []);

  return (
    <div className="py-3">
      <title>Product details</title>
      {Load === true ? (
        <span className="spinner-border"></span>
      ) : (
        <div className="product-wrapper row">
          <div className="col-md-4">
            <div className="product-image">
              <img
                src={Product.image}
                alt={Product.title}
                style={{width: "100%"}}
              />
            </div>
          </div>
          <div className="col-md-8">
            <h5 className="title">{Product.title}</h5>
            <h5 className="product-price">₹{Product.price}</h5>
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};
