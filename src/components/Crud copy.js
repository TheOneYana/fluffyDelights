import { useState, useEffect } from 'react';

const Crud = () => {
  const [kitten, setKitten] = useState([]);
  useEffect(()=> {
    fetch('https://crudcrud.com/api/1f860e9d21224a26a3760c4df69dbfd7/kittens')
    .then(response => response.json())
    .then(data => setKitten(data))
    .catch(err=> console.log(err));
  },[])
const DeleteItm=(id)=>{
      fetch(
        `https://crudcrud.com/api/1f860e9d21224a26a3760c4df69dbfd7/kittens/${id}`, {
          method: 'DELETE'
        })
        .then(response => console.log(response))
        .catch((err) => console.log(err, "err"))
        .then(data => setKitten(data))
    }

  return (
    <div className='kittensCrud'>{kitten.map(({name, available, img,_id})=>(
      <div className='grid-item' key={_id}>
      <p>{name}</p>
      <img className='kittenImg'src={img}/>
      <p>{available}</p>
      <button onClick={()=>DeleteItm(_id)}>delete</button>
      </div>))}
      </div>)}


export default Crud;