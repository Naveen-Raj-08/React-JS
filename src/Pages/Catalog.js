import React, {useEffect, useState} from "react";
import axios from "axios";
import {List} from "../Components/List";
import {Link} from "react-router-dom";
import {Category} from "../Components/Category";

export const Catalog = () => {
  const [StoreData, setStoreData] = useState(null);
  const [ProductCategory, setProductCategory] = useState(null);

  useEffect(() => {
    const fetchStore = async () => {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          setStoreData(res.data);
        })
        .catch((err) => console.error(err));
    };
    fetchStore();
  }, []);
  return (
    <div>
      <title>Products</title>
      {StoreData === null ? (
        <span className="spinner-border"></span>
      ) : (
        <div className="row">
          {StoreData.map((item, index) => {
            return <List key={index} data={item} />;
          })}
        </div>
      )}
    </div>
  );
};
