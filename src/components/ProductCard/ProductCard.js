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
            <img className="rating" src='https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=idA8mJzb~jCQ9bsSTyd1i5RU5DJsgb1cSf7-u8dw80CfS5rp~GKylaAJRkr6s98Bmc0bzMBc9fNiWn7IyuYBtOkh~BstP9U4RMqrmfCmChrOmk1gdVIKm437lHxdU77MkAA521Qb5PaZN5ZdT4T78ft32RsVdAkaB08YibDmuvtMTOj0VH9Del9qA0RlBNgAo0hIRWl8LZKQnuzyUleXfhYCteFHFGojPMwSyj-kFpHjoZAaWGIbjHh0G~NYS3SopjL7jDm6PTB-JpRBCFMqOuBlN7J2-HxRlEZeikzs5FgTQlFcpH92BNteloR80RVFXNe6PG8AfKCPaa4YLOvkiQ__' alt="rating" />
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
            <button className="modal-button" onClick={confirmAddToCart}>Confirm</button>
            <button className="modal-button" onClick={() => setShowModal(false)}>Cancel</button> {/* Added the Cancel button */}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
