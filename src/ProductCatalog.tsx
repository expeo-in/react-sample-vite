import { useState } from "react";

const ProductCatalog = ({ onAddToCart }: any) => {
  const products = [
    { id: 1, name: "Mobile", description: "Latest Smartphone" },
    { id: 2, name: "TV", description: "Flat TV" },
    { id: 2, name: "Fridge", description: "Double Door Fridge" },
    { id: 1, name: "Mobile", description: "Latest Smartphone" },
    { id: 2, name: "TV", description: "Flat TV" },
    { id: 2, name: "Fridge", description: "Double Door Fridge" },
    { id: 1, name: "Mobile", description: "Latest Smartphone" },
    { id: 2, name: "TV", description: "Flat TV" },
    { id: 2, name: "Fridge", description: "Double Door Fridge" },
  ];

  return (
    <div className="d-flex flex-column flex-md-row flex-wrap">
      {products.map((product) => (
        <div className="card w-25 me-5 mb-3">
          <div className="card-header">{product.name}</div>
          <div className="card-body">
            <p className="card-text">{product.description}</p>
            <a
              href="#"
              className="btn btn-primary"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCatalog;
