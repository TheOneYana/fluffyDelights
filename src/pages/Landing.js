import pawicon from "../images/paw-icon.png";
import { Link } from 'react-router-dom';
import paw from "../images/paw2.png";
import Wrapper from '../wrappers/LandingWrap.js';
// import Carousel from 'react-grid-carousel'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {useState, useEffect} from 'react';
import Loading from "../components/Loading";
import {Helmet} from 'react-helmet-async';
import main from '../images/main.webp'
import {c7, c12, c24, c28, c29, c33, c38, cat1, cat2, cat3, cat4, cat6, cat7, cat8, cat9, cat10, cat11, cat19, kitty, basya, kb, k1,many, k2, many2, k3, k4, k5, c3, c100, c4, c, c11, c36, c31} from '../images';
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
const [loading, setLoading] = useState(true);
useEffect(()=>{
  setTimeout(()=>{
    setLoading(false);
  }, 3000)
}, []);
  return (
    <Wrapper>
      <Helmet>
        <title>British Shorthair cattery in Los Angeles, California</title>
        <meta name = 'description' content = 'Welcome to our british shorthair cattery!'/>
        <link rel='canonical' href='/Available'/>
      </Helmet>
    {loading ? (<Loading/>):(
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
                and stunning appearances. Our cattery is located in <span className="bs"> Los Angeles, California</span>
                <span></span>
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
              <div><img src={c} alt='' className="carousel-image"/></div>
              <div><img src={c100} alt='' className="carousel-image"/></div>
              <div><img src={c11} alt='' className="carousel-image"/></div>
              <div><img src={c12} alt='' className="carousel-image"/></div>
              <div><img src={c24} alt='' className="carousel-image"/></div>
              <div><img src={c28} alt='' className="carousel-image"/></div>
              <div><img src={c29} alt='' className="carousel-image"/></div>
              <div><img src={c3} alt='' className="carousel-image"/></div>
              <div><img src={c31} alt='' className="carousel-image"/></div>
              <div><img src={basya} alt='' className="carousel-image"/></div>
              <div><img src={c36} alt='' className="carousel-image"/></div>
              <div><img src={c38} alt='' className="carousel-image"/></div>
              <div><img src={cat1} alt='' className="carousel-image"/></div>
              <div><img src={cat10} alt='' className="carousel-image"/></div>
              <div><img src={cat11} alt='' className="carousel-image"/></div>
              <div><img src={cat19} alt='' className="carousel-image"/></div>
              <div><img src={cat2} alt='' className="carousel-image"/></div>
              <div><img src={cat3} alt='' className="carousel-image"/></div>
              <div><img src={cat4} alt='' className="carousel-image"/></div>
              <div><img src={cat6} alt='' className="carousel-image"/></div>
              <div><img src={cat7} alt='' className="carousel-image"/></div>
              <div><img src={cat8} alt='' className="carousel-image"/></div>
              <div><img src={cat9} alt='' className="carousel-image"/></div>
              <div><img src={k1} alt='' className="carousel-image"/></div>
              <div><img src={k3} alt='' className="carousel-image"/></div>
              <div><img src={kb} alt='' className="carousel-image"/></div>
              <div><img src={k4} alt='' className="carousel-image"/></div>
              <div><img src={kitty} alt='' className="carousel-image"/></div>
              <div><img src={k5} alt='' className="carousel-image"/></div>
              <div><img src={many} alt='' className="carousel-image"/></div>
              <div><img src={c4} alt='' className="carousel-image"/></div>
              <div><img src={c7} alt='' className="carousel-image"/></div>
          </Carousel>
          </div>
        </div>
        </main>
  
)}
  </Wrapper>
  );
};


export default Landing;
