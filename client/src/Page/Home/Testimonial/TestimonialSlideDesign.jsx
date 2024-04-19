import bgImg from '../../../assets/Image/Shiny Overlay.svg'
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

const TestimonialSlideDesign = ({ testimonial }) => {
    const { name, position, message, image_url, rating } = testimonial;
    return (
        <div style={{ backgroundImage: `url(${bgImg})`, width: '100%', height: '300px', backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="p-12 py-6 space-y-3 max-w-[1000px] mx-auto relative text-white bg-black bg-opacity-30">
                <div className='flex justify-between text-white'>
                    <div className='flex gap-6'>
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src={image_url} />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold">Name: {name}</h1>
                            <h3 className="text-lg">Position: {position}</h3>
                        </div>
                    </div>
                    <div className='flex gap-1 mr-4 mt-2'>
                        {
                            [...Array(5)].map((star, index) =>{
                                return index < rating ? <FaStar className='text-2xl text-yellow-500'></FaStar> : <FaStar className='text-gray-400 text-2xl'></FaStar>
                            })
                        }
                    </div>
                </div>
                <p className='flex gap-4 text-center'><FaQuoteLeft></FaQuoteLeft> {message} <FaQuoteRight ></FaQuoteRight></p>
            </div>
        </div>
    );
};

export default TestimonialSlideDesign;