
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import TestimonialSlideDesign from './TestimonialSlideDesign';

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetch('./public/testimonial.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <div className="my-28">
            <h1 className="text-center text-6xl font-semibold mb-8"><span className="text-red-700">Testimonial</span></h1>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    testimonials.map(testimonial =>
                        <SwiperSlide key={testimonial.id}>
                            <TestimonialSlideDesign
                                testimonial={testimonial}></TestimonialSlideDesign>
                        </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Testimonial;