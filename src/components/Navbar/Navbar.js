import React from 'react'
import './Navbar.css'
// import { CgProfile } from "react-icons/cg";
// import { BsCart2 } from "react-icons/bs";


function Navbar() {
    return (
        <>
            <div className='contact-bar'>
                <p className='n-text'>Free Shipping on orders above 999/-</p>
                <p className='contact-num'>Call on us: +91 9876865120 </p>
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='nav-second-container'>
                        <img className='logo' src='https://s3-alpha-sig.figma.com/img/7220/1328/eefc66cd70960daab6449206c3540858?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IZj9rZ8pk0DIPcS2gKzcDeslH6xchJ--XbU~C~owkS5n12psMSHEc5JLnmtBqZj7Vn~PDRKvvfd3LMAAqOLeS8rUSTIaBpqfw1IH~RarF6TEPIpWDQcLG4mPhvhaGl52L0aF7TV5uyRtFDsS3r0eqIy6sM8vBwxGiPHU0NUoV9ryEbIuJz4StnWANiDRBUP5-niwgRODOkPjFHOLb-2mnal4LB9Gz104NjhXPLD4qI-l79aNCrAfVhZAMCsyksp6liOQ5gM1cl-KIp2J0o6gs6SOhmmHmrjz25yGvb9mNGsWoUxa25a6sLeVS4mYChjxGFOL0rsZ-GZ663dYfGLLNg_' alt='logo' />    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <h2 className='logo-text'>Chaperone</h2>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0  navbar-class">
                                <li className="nav-item nav-link active names"> Home</li>
                                <li className="nav-item nav-link names"> Plants & Pots</li>
                                <div className="dropdown-center">
                                    <button className=" dropdown-toggle button1 names" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Tools
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item">Gardening tools</li>
                                        <li className="dropdown-item">Pest Control</li>
                                        <li className="dropdown-item">Fertolozers</li>
                                        <li className="dropdown-item">Watering Cans</li>
                                        <li className="dropdown-item">Gardening Accessories</li>


                                    </ul>
                                </div><div className="dropdown-center">
                                    <button className=" dropdown-toggle button1 names" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Our Services                                </button>
                                    <ul class="dropdown-menu">
                                        <li className="dropdown-item">Book a Maali</li>
                                        <li className="dropdown-item">Plant Day Care</li>
                                        <li className="dropdown-item"> Rent Plants</li>
                                    </ul>
                                    <li className="nav-item nav-link names">
                                        Our Story
                                    </li><li className="nav-item nav-link names">
                                        FAQs
                                    </li>

                                </div>
                            </ul>
                        </div>
                        {/* <CgProfile className='icons ic' />
                        <BsCart2  className='icons' /> */}

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
