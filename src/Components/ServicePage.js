import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SingleProduct from "./SingleProduct";

const ServicePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="my-5 text-center">
        <button className="btn btn-primary text-center">
          <Link to={"/addproduct"}>Add a product</Link>
        </button>
      </div>
      <div>
        <h1 className=" font-bold text-5xl my-5 text-center">Our Products</h1>

        <div className="grid grid-cols-3 gap-5">
          {products.map((product) => (
            <SingleProduct product={product}></SingleProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
