import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { BsFillThreadsFill } from "react-icons/bs";
import { BiLogoYoutube } from "react-icons/bi";
import { TiSocialLinkedinCircular } from "react-icons/ti";


export default function Footer() {
    return (
        <div className='f-main-container'>
            <div className='f-container'>
                <div className='subscription-container'>
                    <h5 className='f-h5-heaing'>SUBSCRIBE TO OUR NEWSLETTER</h5>
                    <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necesbus enim</p>
                    <input type='text' placeholder='Enter your email address' />
                    <button className='f-button'>Subscribe</button>
                </div>
                <div className='f-aboutus-container'>
                    <h5 className='f-h5-heaing'>About us</h5>
                    <span>Our Story</span>
                    <span>Blogs</span>
                    <span>Careers</span>
                    <span>Contact Us</span>
                    <span>Help & Support</span>
                </div>
                <div className='f-services-container'>
                    <h5 className='f-h5-heaing'>our services</h5>
                    <span>Book Maali</span>
                    <span>Plant Day Care</span>
                    <span>Rent Plants</span>
                    <span>Plants & Pots</span>
                    <span>Gardening Tools</span>
                </div>
                <div className='f-useful-container'>
                    <h5 className='f-h5-heaing'>useful links</h5>
                    <span> My Account</span>
                    <span>Orders & Returns</span>
                    <span>Track Order</span>
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                    <span>Return, Refund & Replacement Policy</span>
                </div>
                <div className='f-getintouch-container'>
                    <h5 className='f-h5-heaing'>GET IN TOUCH</h5>
                    <span>Our Story</span>
                    <span>Blogs</span>
                    <span>Careers</span>
                    <span>Contact Us</span>
                    <span>Help & Support</span>
                </div>
            </div>
            <div className='chaperone-container'>
                <h5 className='f-h5-heaing'>CHAPERONE</h5>
                <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
                <h5 className='f-h5-heaing'>Follow us on</h5>
                <div className='icons-container'>
                    <a href="https://www.instagram.com/chaperoneplants/?utm_source=ig_web_button_share_sheet&igshid=ZDNlZDc0MzIxNw%3D%3D" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className='insta-icon' />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <MdFacebook className='facebook-icon' />
                    </a>
                    <a href="https://www.threads.net/login" target="_blank" rel="noopener noreferrer">
                        <BsFillThreadsFill className='thread-icon' />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <BiLogoYoutube className='youtube-icon' />
                    </a>
                    <a href="https://www.linkedin.com/company/chaperone-plants/" target="_blank" rel="noopener noreferrer">
                        <TiSocialLinkedinCircular className='linkedin-icon' />
                    </a>
                </div>
                <hr className='hr-tag' />
                <p className='rights'>© 2023, chaperone.com All rights reserved.</p>
            </div>
        </div>
    )
}
