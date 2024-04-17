import bgImg from '../../../assets/Image/Shiny Overlay.svg'
import { FaQuoteLeft, FaQuoteRight  } from "react-icons/fa";

const TestimonialSlideDesign = ({ testimonial }) => {
    const { name, position, message } = testimonial;
    return (
        <div style={{backgroundImage: `url(${bgImg})`, width: '100%', height: '300px', backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div className="p-12 py-6 text-center space-y-3 max-w-[1000px] mx-auto relative text-white bg-black bg-opacity-30">
                <h1 className="text-2xl font-semibold">Name: {name}</h1>
                <h3 className="text-lg">Position: {position}</h3>
                <p className='flex gap-4'><FaQuoteLeft></FaQuoteLeft> {message} <FaQuoteRight ></FaQuoteRight></p>
            </div>
        </div>
    );
};

export default TestimonialSlideDesign;