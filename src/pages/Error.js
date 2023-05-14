import kitty from '../images/Gold.png'
import {useState, useEffect} from 'react';
import Loading from "../components/Loading";
import {Helmet} from 'react-helmet-async';

const Error = () => {
const [loading, setLoading] = useState(true);
useEffect(()=>{
setTimeout(()=>{
setLoading(false);
}, 2000)
}, []);

  return (
    <main>
      {loading ? (<Loading/>):(
    <div className="error_container">
      <img className="error_img" src={kitty} alt='kawaii-cat'/>
      <h3 className="error_text">Sorry, this page does't exist.</h3>
    </div>
    )}
    </main>
  )
}

export default Error;