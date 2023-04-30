import kitten from '../utils/availKittensData';
import CrudWrap from '../wrappers/CrudWrap';
import { useNavigate, useParams } from "react-router-dom";

const Available = () => {
  const navigate = useNavigate();
  const ask =()=>{
    navigate({pathname: '/contact'})
}
 return (
  <CrudWrap>
    <div className='availKittens'>
    {kitten.map((cat)=>  <div className='grid-item' key={cat.id}>
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