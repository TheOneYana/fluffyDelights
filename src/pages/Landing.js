import pawicon from "../images/paw-icon.png";
import { Link } from 'react-router-dom';
import main from "../images/main-temp.jpg";
import paw from "../images/paw2.png";
import Wrapper from '../wrappers/LandingWrap.js';
// import Carousel from 'react-grid-carousel'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {mommy, daddy, potato, potato1, potato2, potato3, fluff, three, four, five, six, eight, cat,cat1,cat2,cat3,cat4,cat5,cat6,cat7,cat8,cat9,cat10,cat11,cat12,cat13,cat14,cat15,cat16,cat17,cat18,cat19} from '../images/potatoes';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 14
  },
  desktop: {
    breakpoint: { max: 2999, min: 2000 },
    items: 7
  },
  desktop2: {
    breakpoint: { max: 1999, min: 1824 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1823, min: 1490 },
    items: 5
  },
  tablet3:{
    breakpoint: { max: 1489, min: 1000 },
    items: 4
  },
  tablet4:{
    breakpoint: { max: 999, min: 800 },
    items: 3
  },
  tablet2: {
    breakpoint: { max: 799, min: 600 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 599, min: 500 },
    items: 2
  },
  mobile2: {
    breakpoint: { max: 499, min: 0 },
    items: 2
  }
};
const Landing = () => {
  return (
    <Wrapper>
    <main className="bkg">
    <div className="container page">
          <div className="main-img-container">
            <img src={main} alt='british shorthair cat' className="main-img"/></div>
          <div className="info">
            <span>
              <p>
                Welcome to our cattery website! We are dedicated to providing
                exceptional feline companions to loving homes. Our mission is to
                breed healthy, well-socialized cats with excellent temperaments
                and stunning appearances.
              </p>
              <p>
                We specialize in <span className="bs"> British Shorthair</span>
                <span> </span>
                breed with a variety of colors, including solids: lilac,
                chocolate, and tabby: gray, black, chocolate, cream.
              </p>
              <p>
                As experienced breeders, we adhere to the highest standards of
                animal welfare and take great pride in the quality of our
                kittens. Our cats are raised in a clean, nurturing environment
                and receive the best possible care, ensuring that they are ready
                to become cherished members of your family.
              </p>
              <img src={paw} alt='cat paw' className="paw"/>
            </span>
          </div>
        </div>
        <div className="register">
          <h3 className="registerorlogin">Would you like to Register or Login?</h3>
          <Link to='/Register' className="button"><button><img className='pawicon' alt='paw' src={pawicon}/>Register / Login<img className='pawicon' alt='paw'src={pawicon}/></button></Link>
        </div>
        <div className="carousel-container">
          <div className="carousel">
          <Carousel responsive={responsive} ssr={true} autoPlay={true} autoPlaySpeed={2000} keyBoardControl={true} arrows={false} infinite={true}>
              <div><img src={mommy} alt='' className="carousel-image"/></div>
              <div><img src={daddy} alt='' className="carousel-image"/></div>
              <div><img src={fluff} alt='' className="carousel-image"/></div>
              <div><img src={potato} alt='' className="carousel-image"/></div>
              <div><img src={potato1} alt='' className="carousel-image"/></div>
              <div><img src={potato2} alt='' className="carousel-image"/></div>
              <div><img src={potato3} alt='' className="carousel-image"/></div>
              <div><img src={three} alt='' className="carousel-image"/></div>
              <div><img src={four} alt='' className="carousel-image"/></div>
              <div><img src={five} alt='' className="carousel-image"/></div>
              <div><img src={six} alt='' className="carousel-image"/></div>
              <div><img src={eight} alt='' className="carousel-image"/></div>
              <div><img src={cat} alt='' className="carousel-image"/></div>
              <div><img src={cat1} alt='' className="carousel-image"/></div>
              <div><img src={cat2} alt='' className="carousel-image"/></div>
              <div><img src={cat3} alt='' className="carousel-image"/></div>
              <div><img src={cat4} alt='' className="carousel-image"/></div>
              <div><img src={cat5} alt='' className="carousel-image"/></div>
              <div><img src={cat6} alt='' className="carousel-image"/></div>
              <div><img src={cat7} alt='' className="carousel-image"/></div>
              <div><img src={cat8} alt='' className="carousel-image"/></div>
              <div><img src={cat9} alt='' className="carousel-image"/></div>
              <div><img src={cat10} alt='' className="carousel-image"/></div>
              <div><img src={cat11} alt='' className="carousel-image"/></div>
              <div><img src={cat12} alt='' className="carousel-image"/></div>
              <div><img src={cat13} alt='' className="carousel-image"/></div>
              <div><img src={cat14} alt='' className="carousel-image"/></div>
              <div><img src={cat15} alt='' className="carousel-image"/></div>
              <div><img src={cat16} alt='' className="carousel-image"/></div>
              <div><img src={cat17} alt='' className="carousel-image"/></div>
              <div><img src={cat18} alt='' className="carousel-image"/></div>
              <div><img src={cat19} alt='' className="carousel-image"/></div>
          </Carousel>
          </div>
        </div>
        </main>
    </Wrapper>
    
  );
};


export default Landing;
