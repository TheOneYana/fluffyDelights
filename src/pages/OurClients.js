import client from '../utils/ourClientsData';
import OurClientsWrap from '../wrappers/OurClientsWrap';
import {useState, useEffect} from 'react';
import Loading from "../components/Loading";
import {Helmet} from 'react-helmet-async';

const OurClients = () => {
const [loading, setLoading] = useState(true);
useEffect(()=>{
setTimeout(()=>{
setLoading(false);
}, 2000)
}, []);
 return (
  <OurClientsWrap>
      <Helmet>
        <title>Clients reviews of our British Shorthair cattery in Los Angeles, California</title>
        <meta name = 'description' content = 'Please take a look at what our clients have to say about our cattery.'/>
        <link rel='canonical' href='/Available'/>
      </Helmet>
    {loading ? (<Loading/>):(
  <div className='container'>
  {client.map((c)=>  <div className='grid-item' key={c.id}>
  <p className='name'>{c.name}</p>
  <img className='clientImg'src={c.img} alt='cat'/>
  <p className='statement'>{c.statement}</p>
  </div>
  )
}
</div>
  )}
  </OurClientsWrap>
    )
}


export default OurClients;