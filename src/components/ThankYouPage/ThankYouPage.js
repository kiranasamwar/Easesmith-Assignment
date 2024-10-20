import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ThankYouPage.css';
import { IoClose } from "react-icons/io5";

function ThankYouPage() {
    const location = useLocation();
    const navigate = useNavigate();

    // Log the location.state to check the data being passed
    console.log('Location state:', location.state);

    // Fallback to 'our product' if no state or productName is passed
    const productName = location.state?.productName || 'our product';

    const goToHomePage = () => {
        navigate('/');
    };

    return (
        <div className='t-main-container'>
            <div className='t-card-container'>
                <button className='close-icon-button'>
                    <IoClose className='close-icon' />
                </button>
                <h1 className='t-heading'>Your Cart</h1>
                <hr className='hr-line' />
                <h1 className='t-heading2'>Congratulations, Order Placed!</h1>
                <img src='https://s3-alpha-sig.figma.com/img/da30/c60d/14d6293522911d4a2548b9b1cf65a33a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZgKKIrx1v2QUz4fX2mBvb3nPC3aOp2RcHYU7~TgXtlP4G4lDYmL0xuOY7DKJKdhum-USfGEqnBwhWQZ1nqspzsS8tmvwwkqXSHQoA7p3jz5L1sVJfMMbHBBLleqQpbQbNwTLtaEuEnYK5~sLf~p-nuYM8RLyt5KvfMwFOgM~UylWTzJOSmInN47VMWplVhiGENFa3Bl8MtN6A6cosEVsCZF~oosEu4IYdGCxnl69-nex04r6gR3ZoReAVb4ND0084qLGAwKXwNRfJPlT8MlEC1s2CZJArhC6Tw3CKWGQ2wz0Fr9y6xQlBLFXrKTrbMaXcgJps09Yvxi9EZ4zPgKRqg'
                    className='t-image' alt='plant-image' />
                <p className='t-text'>
                    Thank you for your interest in {productName}!<br />
                    We will soon get in touch with you!</p>
                <button className='t-card-button' onClick={goToHomePage}>CONTINUE SHOPPING</button>
                <img className='image1' alt='' />
            </div>
        </div>
    );
}

export default ThankYouPage;
