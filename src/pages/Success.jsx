import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import catPaw from '../images/paw2.png';

export default function Success() {
  const [pieces, setPieces] = useState(700);


  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 3000);
  };
  const navigate = useNavigate();

  useEffect(() => {
    stopConfetti();
  }, []);
  return (
    <main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="main_contact_container"
    >
      <div className="contact_container">
        <h2 className="contact_h2">
        ✨ Thanks for the email! ✨
        </h2>
        <h3 className="contact_h3">We will get back to you as soon as MEOWssible!</h3>
        <img className ='contact_paw' src={catPaw}/>
      
      </div>
      <Confetti gravity={0.1} width={window.innerWidth}
    height={window.innerHeight} numberOfPieces={pieces} />
    </main>
  );
}

{/* <p className="">
We have sent you an email over at {router.query.useremail}. We will get
back to you as soon as we can!
</p> */}