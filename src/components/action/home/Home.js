import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../../assets/slider1.jpg'
import slider2 from '../../../assets/slider2.jpg'
import slider3 from '../../../assets/slider3.jpg'
const Home = () => {
    return ( 
        <>
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img
                        className="d-block w-100 "
                        src={slider1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        className="d-block w-100 "
                        src={slider2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        className="d-block w-100 "
                        src={slider3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
        </>
     );
}
 
export default Home;