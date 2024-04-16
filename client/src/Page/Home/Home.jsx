import Banner from "./Banner/Banner";
import Client from "./Client/Client";
import Offer from "./Offer/Offer";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <div className="relative"><Banner></Banner></div>
            <Services></Services>
            <Testimonial></Testimonial>
            <Client></Client>
            <Offer></Offer>
        </div>
    );
};

export default Home;