import top from "../images/Top.png";
import gold from "../images/Gold.png";

const Landing = () => {
  return (
    <main className="bkg">
      <div className="top-logo">
        <img src={top} alt="FD logo" className="logo" />
      </div>
      <nav>
        <div className="container page">
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
            </span>
            <img src={gold} className="" />
          </div>
          {/* <img src={logo} className="main-img" /> */}
        </div>
      </nav>
    </main>
  );
};

export default Landing;
