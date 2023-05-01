import pawicon from "../images/paw-icon.png";
import { Link } from 'react-router-dom';
import main from "../images/main-temp.webp";
import paw from "../images/paw2.png";
import Wrapper from '../wrappers/LandingWrap.js';
// import Carousel from 'react-grid-carousel'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
              <div><img src={"https://i.ibb.co/dj2n6vf/c11.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/d6fwYyS/cat8.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/4TdjpHG/c41.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/8x6873y/c.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/kQvMgVX/c30.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/Sc4DGSr/cat17.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/hdTqZGs/c36.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/C2Lpy07/c35.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/RQjM9PX/cat.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/MCv3K5K/c40.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/TDfptxg/c29.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/TgLgdrk/c9.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/MMGj3B7/c2.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/zhH5HLh/c4.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/hWHBdJv/c18.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/TvThqqQ/cat9.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/HKFsBc1/cat4.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/L6r6Rd1/cat1.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/LYkYZ3t/IMG-8318.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/VV6xtTV/IMG-290-A1-B353324-3.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/NYcYrm5/IMG-0620.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/LtHwGsW/EB0-F599-C-CEBC-4-A8-D-A5-A0-3-BE3-E0568259.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/8jjzPfW/cat16.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/vxZT68k/cat12.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/jLbrgtg/c34.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/b5MfhYT/cat18.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/Ry67cRh/IMG-8274.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/mhPjfS0/IMG-290-A1-B353324-7.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/kygn4gW/cat13.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/F3XJTKC/cat3.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/TKdw4MQ/IMG-290-A1-B353324-5.webp"} alt='' className="carousel-image"/></div>
              <div><img src={"https://i.ibb.co/nLKWW11/c39.webp"} alt='' className="carousel-image"/></div>
          </Carousel>
          </div>
        </div>
        </main>
    </Wrapper>
    
  );
};


export default Landing;
