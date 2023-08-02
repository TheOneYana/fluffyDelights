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
            <img src="https://i.ibb.co/ZcZRkH2/main.webp" alt='british shorthair cat' className="main-img"/></div>
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
              <div><img src="https://i.ibb.co/2SWrh9t/c100.webp" alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/CvPh6S8/baby2.webp" alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/VBmDnhv/c7.webp"alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/6nfCz1B/c11.webp" alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/wYXcnzf/c31.webp" alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/KynrN0j/cat3.webp" alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/RBmK7CQ/c12.webp" alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/WcX3sZ7/Many.webp" alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/d78d61p/c36.webp" alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/JQVNpwL/baby.webp" alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/SnWLS7m/c2.webp"alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/FhPPvT8/cat9.webp" alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/58wMkzr/baby5.webp" alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/XbyDvnw/c29.webp" alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/zhcy0JP/c.webp"alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/ch5Dgz5/cat2.webp" alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/RQrYdXD/c38.webp" alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/JzXy7ph/cat1.webp" alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/qdZS27k/cat7.webp" alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/rv1JjVG/cat10.webp" alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/8Nnhfzf/cat8.webp" alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/zGfhjkH/kitty.webp" alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/TrQkR3v/basya.webp" alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/dKRf5FH/baby4.webp" alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/RYCcm7j/cat19.webp" alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/52cQp3X/Many2.webp" alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/VTXmBh9/cat6.webp"alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/ch5Dgz5/cat2.webp" alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/gJpDtBw/c3.webp" alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/5LRpXD3/cat11.webp" alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/58wMkzr/baby5.webp"alt='' className="carousel-image"/></div>
              <div><img src="https://i.ibb.co/pPKnvQr/c28.webp"alt='' className="carousel-image"/></div>
          </Carousel>
          </div>
        </div>
        </main>
  
)}
  </Wrapper>
  );
};


export default Landing;
