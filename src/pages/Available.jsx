import kitten from '../utils/availKittensData';
import CrudWrap from '../wrappers/CrudWrap';
import { useNavigate, useParams } from "react-router-dom";
import {Helmet} from 'react-helmet-async';

const Available = () => {
  const navigate = useNavigate();
  const ask =()=>{
    navigate({pathname: '/contact'})
}
 return (
  <CrudWrap>
    <Helmet>
    <title>Available British Shorthair kittens</title>
    <meta name = 'description' content = 'If we have any available british shorthair kittens, they will be displayed here. If none of the kittens are available, feel free to use CONTACT section to ask us about upcoming litters. Currently we have lilac boy and lilac girl available in ut cattery.'/>
    <link rel='canonical' href='/Available'/>
  </Helmet>
    <div className='availKittens'>
    {kitten.map((cat)=>  <div className='grid-item kittens' key={cat.id}>
  <p>{cat.color} {cat.sex}</p>
  <img className='kittenImg'src={cat.img} alt='cat'/>
  {/* <p>{avail}</p> */}
  <button className='crudBtn' onClick={()=> ask()}>Ask question</button>
  </div>
  )
}
</div>
  </CrudWrap>
    )
}


export default Available;