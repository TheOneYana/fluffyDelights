import {AnimatePresence, motion as m} from "framer-motion/dist/framer-motion"; 
import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import catPaw from '../images/paw2.png'

export default function Success() {
  const [pieces, setPieces] = useState(200);

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
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=""
    >
      <div className="contact_container">
        <h1 className="contact_h1">
          Thanks for the email! ✨
          We will get back to you as soon as possible!
        </h1>
        <img className ='contact_paw' src={catPaw}/>
      
      </div>
      <Confetti gravity={0.2} numberOfPieces={pieces} />
    </m.main>
  );
}

{/* <p className="">
We have sent you an email over at {router.query.useremail}. We will get
back to you as soon as we can!
</p> */}