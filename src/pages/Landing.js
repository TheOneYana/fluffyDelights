
import pawicon from "../images/paw-icon.png"
import logo from "../images/NoseShadow.png";
import main from "../images/main-temp.jpg"
import paw from "../images/paw2.png"
const Landing = () => {
  return (
    <main className="bkg">
      <div className="top-logo-container">
        <img src={logo} alt="FD logo" className="logo" />
      </div>
      <nav className="nav"><h4>Home</h4><h4>About</h4><h4>Gallery</h4><h4>Our CLients</h4><h4>Contact</h4></nav>
        <div className="container page">
          <div className="main-img-container">
            <img src={main} alt='girl with british shorthair cat' className="main-img"/></div>
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
          <button><img className='pawicon' alt='paw' src={pawicon}/>Register / Login<img className='pawicon' alt='paw'src={pawicon}/></button>
        </div>
        <footer>
        <h5>  © 2023 Designed and Developed by Uliana Sarkisova </h5>
        </footer>
    </main>
    
  );
};

export default Landing;
