import React from "react";
import Product from "./Product";

const Services = () => {
  return (
    <div>
      <h1 className=" font-bold text-5xl my-5 text-center">Our Products</h1>

      <div className="grid grid-cols-3">
        <Product></Product>
      </div>
    </div>
  );
};

export default Services;
