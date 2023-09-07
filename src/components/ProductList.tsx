// src/components/ProductList.tsx

import React, { useState, useEffect } from 'react';
import './ProductList.scss';

interface Product {
  id: number;
  title: string;
  price: number;
  // Add other properties here if needed
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-list">
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
