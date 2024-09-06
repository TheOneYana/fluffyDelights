import kitten from '../utils/availKittensData';
import CrudWrap from '../wrappers/CrudWrap';
import { useNavigate, useParams } from "react-router-dom";
import {Helmet} from 'react-helmet-async';
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import paw from '../images/paw2.png'
import ReactGA from 'react-ga4';


const Available = () => {
const [loading, setLoading] = useState(true);
useEffect(()=>{
setTimeout(()=>{
  setLoading(false);
}, 2000)
}, []);
  const navigate = useNavigate();
  const ask =()=>{
    navigate({pathname: '/contact'})
}
// const handleClick = (platform) => {
//   ReactGA.event({
//       category: 'Social Links',
//       action: 'Click',
//       label: platform,
//   });
// };
const handleInstagramClick = () => {
  ReactGA.event({
    category: 'Social Links',        // Group all social media links together
    action: 'Click',                 // The action being taken
    label: 'Instagram Link',         // Specify this is for the Instagram link
  });
};

 return (
  <CrudWrap>
    <Helmet>
  
    <title>Available British Shorthair kittens</title>
    <meta name = 'description' content = 'If we have any available british shorthair kittens, they will be displayed here. If none of the kittens are available, feel free to use CONTACT section to ask us about upcoming litters. Currently we have golden chinchilla british shorthair kittens available in ut cattery. British Shorthair kittens Los Angeles'/>
    <link rel='canonical' href='/Available'/>
  </Helmet>
  {loading ? 
  (<Loading/>
  ):(
   <div className='availContainer'>
    <main className='availText'>We currently have 1 boy and 1 girl golden chinchilla british shorthair kittens available, feel free to follow us on 
     <a 
  href = "https://www.instagram.com/roxybarcelona2019?igsh=MmVlMjlkMTBhMg%3D%3D&utm_source=qr" 
  style={{color:"#C71585"}} 
  // onClick={handleClick}
  onClick={handleInstagramClick}
  target="_blank"
  rel="noopener noreferrer"> instagram</a> for more updates or reach out to Alena about kitten reservation at +1 (786) 477-9926. Thank you! </main>
<div className='kittensCrud'>
{kitten.map((cat)=>  <div className='grid-item kittens' key={cat.id}>
{/* <p>{cat.color}</p> */}
<img className='kittenImg'src={cat.img} alt='cat'/>
{/* <button className='crudBtn' onClick={()=> ask()}>Ask question</button> */}
</div>)}

</div>
<img src={paw} className='paw'/>
</div>
   
 )}
  </CrudWrap>)};


export default Available;

{/* <div className='availKittens'>
{kitten.map((cat)=>  <div className='grid-item kittens' key={cat.id}>
<p>{cat.color} {cat.sex}</p>
<img className='kittenImg'src={cat.img} alt='cat'/>
<p>{avail}</p>
<button className='crudBtn' onClick={()=> ask()}>Ask question</button>
</div>)}
<img src={paw} className='availPaw'/>
</div> */}