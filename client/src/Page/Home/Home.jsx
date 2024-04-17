import Banner from "./Banner/Banner";
import Client from "./Client/Client";
import Offer from "./Offer/Offer";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>TechNex Solutions | Home</title>
            </Helmet>
            <div className="relative"><Banner></Banner></div>
            <Services></Services>
            <Testimonial></Testimonial>
            <Client></Client>
            <Offer></Offer>
        </div>
    );
};

export default Home;