import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './SwiperSlides.css';

function SwiperSlides() {
    return (
        <div className="portfolio">
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="image-container">
                        <img 
                            src='https://media.istockphoto.com/id/471356627/photo/japanese-maple.jpg?s=612x612&w=0&k=20&c=gOB1McW5Td8YISnu8TomgEvkNrbQEcVYEaUiVJAv_hY=' 
                            alt="Nxtrenz Project"  
                        />
                        <p>Description for image 1</p>
                    </div>
                </SwiperSlide>
                
                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="image-container">
                        <img 
                            src='https://media.istockphoto.com/id/471356627/photo/japanese-maple.jpg?s=612x612&w=0&k=20&c=gOB1McW5Td8YISnu8TomgEvkNrbQEcVYEaUiVJAv_hY=' 
                            alt="Nxtrenz Project" 
                        />
                        <p>Description for image 2</p>
                    </div>
                </SwiperSlide>
                
                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="image-container">
                        <img 
                            src='https://media.istockphoto.com/id/471356627/photo/japanese-maple.jpg?s=612x612&w=0&k=20&c=gOB1McW5Td8YISnu8TomgEvkNrbQEcVYEaUiVJAv_hY=' 
                            alt="Nxtrenz Project" 
                        />
                        <p>Description for image 3</p>
                    </div>
                </SwiperSlide>
                
                {/* Slide 4 */}
                <SwiperSlide>
                    <div className="image-container">
                        <img 
                            src='https://media.istockphoto.com/id/471356627/photo/japanese-maple.jpg?s=612x612&w=0&k=20&c=gOB1McW5Td8YISnu8TomgEvkNrbQEcVYEaUiVJAv_hY=' 
                            alt="Nxtrenz Project" 
                        />
                        <p>Description for image 4</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SwiperSlides;
