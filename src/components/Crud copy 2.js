import React from 'react';
import { useSelector } from 'react-redux';
import paw2 from '../images/paw2.png'

const Crud = () => {
const {cats,total} = useSelector((state)=>state.cats)
const deleteItm = () => {
  console.log(`deleted`)
}
  if(total< 1){
    return (
      <section className='cats'>
        <p>No cats left!</p>
        <img src={paw2}/>
      </section>
    )
  }
  return (
    <div className='kittensCrud'>{cats.map((cat)=>(
      <div className='grid-item' key={cat.id}>
      <p>{cat.name}</p>
      <img className='kittenImg'src={cat.img}/>
      <p>{cat.avail}</p>
      <button onClick={()=>deleteItm(cat.id)}>delete</button>
      </div>))}
      </div>)}

export default Crud;