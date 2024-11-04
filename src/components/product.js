import React from "react";
import Product from '../styles/product.css';
import product1 from '../assets/img/product1.png';
import product2 from '../assets/img/product2.png';
import product3 from '../assets/img/product3.png';
import product4 from '../assets/img/product4.png';

const products = [
  {
    id: 1,
    label: 'NEW',
    image: product1,
    name: 'The JavaScript Programming',
    price: '$35.00',
    rating: 4,
  },
  {
    id: 2,
    image: product2,
    name: 'Machine Learning with JavaScript',
    price: '$30.00',
    rating: 5,
  },
  {
    id: 3,
    label: 'SALE',
    image: product3,
    name: '.Net Core Interview Questions & Answers',
    price: '$39.00',
    originalPrice: '$50.00',
    rating: 3,
  },
  {
    id: 4,
    image: product4,
    name: 'Web Programming with HTML,CSS,JS',
    price: '$19.00',
    rating: 4,
  },
];

const ProductList = ({ searchQuery = '' }) => {
  console.log('Search Query:', searchQuery); // Log the search query

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="featured-items">

      <h2>Our featured items</h2>
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              {product.label && <span className="product-label">{product.label}</span>}
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <div className="product-price">
                {product.originalPrice && <span className="original-price">{product.originalPrice}</span>}
                <span className="current-price">{product.price}</span>
              </div>
              <div className="product-rating">
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
              </div>
            </div>
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
    </section>
  );
};

export default ProductList;