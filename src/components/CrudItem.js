import React from 'react';
import { shooCats} from '../features/pagination/galleryPaginationSlice';
import { useDispatch } from 'react-redux';
import CrudWrap from '../wrappers/CrudWrap';
const CrudItem = ({id, img, name, avail}) => {
  const dispatch = useDispatch();
  return (
    <CrudWrap>
      <div className='grid-item' key={id}>
      <p>{name}</p>
      <img className='kittenImg'src={img} alt='cat'/>
      {/* <p>{avail}</p> */}
      <button className='crudBtn' onClick={()=> dispatch(shooCats(id))}>Send home</button>
      </div>
      </CrudWrap>)}

export default CrudItem

//  onClick={()=>deleteItm(id)}