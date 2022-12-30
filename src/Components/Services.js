import React, { useEffect, useState } from "react";

import SingleProduct from "./SingleProduct";

const Services = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h1 className=" font-bold text-5xl my-5 text-center">Our Products</h1>

      <div className="grid grid-cols-3 gap-5">
        {products.map((product) => (
          <SingleProduct product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default Services;
