import { useDispatch, useSelector  } from 'react-redux';
import paw2 from '../images/paw2.png';
import CrudItem from './CrudItem';
import {fetchCats} from '../features/crud/crudSlice';
import CrudWrap from '../wrappers/CrudWrap';
const Crud = () => {
const dispatch = useDispatch();
const {catItems,total} = useSelector((store)=>store.cats)

const deleteItm = () => {
  console.log(`deleted`)
}
  if(total< 1){
    return (
      <CrudWrap>
      <section className='cats'>
        <p>Let's call the cats!</p>
       <button className='crudBtn' onClick={()=> dispatch(fetchCats())}>Psspsspss</button>
       <img src={paw2}/>
      </section>
      </CrudWrap>
    )
  }
  return (
    <CrudWrap>
    <section>
      <div className='kittensCrud'>
        {catItems.map((cat)=> {
          return <CrudItem key={cat.id} {...cat}/>
        })}
      </div>
    </section>
    </CrudWrap>
   )}

export default Crud;