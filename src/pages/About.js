import React from 'react'
import AboutWrap from '../wrappers/AboutWrap';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import Loading from "../components/Loading";

const About = () => {
const [loading, setLoading] = useState(true);
useEffect(()=>{
setTimeout(()=>{
  setLoading(false);
}, 2000)
}, []);
  return (
    <AboutWrap>
       {loading ? (<Loading/>):(
    <main>
    <div className='about_container'>
    <section className='founders'>
      <div className='text'>
    <h3>About us:</h3>
    <p>We appreciate your interest in our cattery! We are Yana and Alena, the founders of Fluffy Delights which was established in 2019. Our passion for cats and their well-being has inspired us to create a place where we can breed healthy and beautiful British Shorthair kittens.</p> 

    <p>Our goal is to provide our clients with the best possible experience when adopting a kitten from our cattery. We take great pride in the care and attention we give to each kitten we raise, ensuring that they are socialized, healthy, and ready to become a cherished member of your family.</p>
    
   <p>Our British Shorthair cats are known for their sweet personalities, plush coats, and striking looks. We also take great care to ensure that our cats are ready to adapt to their new homes.</p>
    
    <p>Our cattery have produced over 30 kittens so far, and we couldn't be happier with the feedback we've received from our clients. We are grateful to have such wonderful people who share our love and passion for cats. We believe that every kitten we raise is special and unique, and we take great pride in helping our clients find their perfect match.</p>
    
    <p>Thank you for considering our cattery for your next furry family member.  We understand that purchasing a new kitten can be a big decision, which is why we always happy to answer any questions you might have. We look forward to hearing from you and helping you find your perfect kitten!<span> <Link className="linkto" to="/Contact"> Contact us</Link></span></p>
    </div>
    <div className='img'><img id="img1" src="https://i.ibb.co/BP1tDWL/about1-1.webp"/></div>
    </section>
    <section className='adoption_process'>
    <div className='img second_img'><img id="img2" src="https://i.ibb.co/1Krb5Rr/about2-1.webp"/></div>
    <div className='text'>
    <h3>Adoption process:</h3>
    <p>As a small cattery, we only have two litters per year. To check if any kittens are currently available for adoption, please visit the <span> <Link className="linkto" to="/Available"> Available Kittens</Link></span> section of our website. In the event that no kittens are currently available, please do not hesitate to contact us for information on upcoming litters.</p>
    <p>If you find an available kitten that you would like to adopt, please contact us to schedule a visit. Kittens are typically ready to go to their new homes when they reach twelve weeks of age. At eight weeks old, we take them to their first veterinary appointment for a check-up and to receive their necessary shots.</p>
    </div>
    </section>
    <section className='signing_contract'>
    <div className='text'>
    <h3>Signing a contract:</h3>
    <p>After adopting your kitten, we kindly request that you schedule a spay/neuter appointment with your veterinarian when the kitten turns five months old. Spaying or neutering is crucial to avoid many health issues, including cancer, and we ask all of our clients to sign a contract stating that they undertake to spay/neuter their kitten when it turns five months old.</p>
    <p>We are committed to ensuring that each of our kittens finds a loving and caring home. If you have any questions about the adoption process or any of our kittens, please do not hesitate to contact us. We look forward to hearing from you and helping you find new furry friend.</p>
    </div>
    <div className='img'><img id="img3" src="https://i.ibb.co/8gjgsp0/about3-1.webp"/></div>
    </section>
    </div>
    </main>
    )}
    </AboutWrap>
  )
}

export default About;