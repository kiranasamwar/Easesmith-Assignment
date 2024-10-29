import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ThankYouPage.css';
import { IoClose } from "react-icons/io5";
import t1 from "../../assets/t1.png";


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
                <img src={t1}
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
