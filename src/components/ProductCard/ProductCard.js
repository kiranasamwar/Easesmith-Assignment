import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // for navigating to Thank You page

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => quantity > 1 && setQuantity(quantity - 1);

  const addToCart = () => {
    setShowModal(true); // Show confirmation modal
  };

  const confirmAddToCart = () => {
    setShowModal(false); // Hide modal
    alert(`Added ${quantity} ${product.name} to cart!`);
    // Handle actual add-to-cart logic here
  };

  const viewProduct = () => {
    navigate("/thank-you"); // Navigate to Thank You page or product details page
  };

  return (
    <>
      <div className="product-card-container">
        <div className="product-card">
          <img className="card-image" src={product.image} alt={product.name} />
          <button onClick={viewProduct} className="view-product">View Product</button> {/* Added View Product button */}
        </div>
        <div className="product-details">
          <h3>{product.name}</h3>
          <p className="description">{product.description}</p>
          <div className="rating-container">
            <img className="rating" src={product.rating} alt="rating" />
            <p className="rating-num">4.9</p>
          </div>
          <p className="product-price">{product.price}</p>
          <div className="quantity-control">
            {/* <span>{quantity}</span> */}
          </div>
          <div className="product-actions">
            <button onClick={addToCart} className="add-to-cart-btn add" >
              <button onClick={decrement} className="count">-</button> Add to Cart<button className="count" onClick={increment}>+</button>
            </button>
            <button className="buy-button">Buy</button>
          </div>
        </div>

      </div>




      {/* Modal outside of card, will appear centered on the screen */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Confirm Add to Cart</h2>
            <p>
              Add {quantity} {product.name} to the cart?
            </p>
            <button onClick={confirmAddToCart}>Confirm</button>
            <button onClick={() => setShowModal(false)}>Cancel</button> {/* Added the Cancel button */}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
