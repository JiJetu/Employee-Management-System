
const TestimonialSlideDesign = ({testimonial}) => {
    const {name, position, message} = testimonial;
    return (
        <div className="p-12 pb-4 pt-4 text-center space-y-3 max-w-[1000px] mx-auto relative">
            <h1 className="text-2xl font-semibold">Name: {name}</h1>
            <h3 className="text-lg">Position: {position}</h3>
            <p>{message}</p>
        </div>
    );
};

export default TestimonialSlideDesign;