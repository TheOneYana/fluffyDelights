import pawicon from "../images/paw-icon.png";
import { Logo } from "../components";
import { Link } from 'react-router-dom';
import main from "../images/main-temp.jpg";
import paw from "../images/paw2.png";
import Wrapper from '../wrappers/LandingWrap.js';

const Landing = () => {
  return (
    <Wrapper>
    <main className="bkg">
      <div className="top-logo-container">
        <Logo/>
      </div>
      <nav className="nav"><Link to='/' className="h4">Home</Link><Link to='/About' className="h4">About</Link><Link to='/Gallery' className="h4">Gallery</Link><Link to='/OurClients' className="h4">Our CLients</Link><Link to='/Contact' className="h4">Contact</Link></nav>
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
          <Link to='/Register' className="h4"><button><img className='pawicon' alt='paw' src={pawicon}/>Register / Login<img className='pawicon' alt='paw'src={pawicon}/></button></Link>
        </div>
        <footer>
        <h5>  © 2023 Designed and Developed by Uliana Sarkisova </h5>
        </footer>
    </main>
    </Wrapper>
    
  );
};


export default Landing;
