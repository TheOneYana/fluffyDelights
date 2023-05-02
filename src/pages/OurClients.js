import client from '../utils/ourClientsData';
import OurClientsWrap from '../wrappers/OurClientsWrap';
import {useState, useEffect} from 'react';
import Loading from "../components/Loading";

const OurClients = () => {
const [loading, setLoading] = useState(true);
useEffect(()=>{
setTimeout(()=>{
setLoading(false);
}, 2000)
}, []);
 return (
  <OurClientsWrap>
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