import Carousel from "../components/Carousel";
import ReasonsToWorkWithUs from "../components/ReasonsToWorkWithUs";
import Gallery from "./Gallery";
import SendEmail from "../components/SendEmail";


function Home() {


    return (
        <div>
            <Carousel/>
            <ReasonsToWorkWithUs/>
            <Gallery/>
            <SendEmail/>

        </div>

    );
}

export default Home;