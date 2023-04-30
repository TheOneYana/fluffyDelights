import client from '../utils/ourClientsData';
import CrudWrap from '../wrappers/CrudWrap';


const OurClients = () => {
 return (
  <CrudWrap>
  <div className='availKittens'>
  {client.map((c)=>  <div className='grid-item' key={c.id}>
  <p>{c.name}</p>
  <img className='kittenImg'src={c.img} alt='cat'/>
  <p>{c.statement}</p>
  </div>
  )
}
</div>
  </CrudWrap>
    )
}


export default OurClients;