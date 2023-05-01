import client from '../utils/ourClientsData';
import OurClientsWrap from '../wrappers/OurClientsWrap';


const OurClients = () => {
 return (
  <OurClientsWrap>
  <div className='container'>
  {client.map((c)=>  <div className='grid-item' key={c.id}>
  <p className='name'>{c.name}</p>
  <img className='clientImg'src={c.img} alt='cat'/>
  <p className='statement'>{c.statement}</p>
  </div>
  )
}
</div>
  </OurClientsWrap>
    )
}


export default OurClients;