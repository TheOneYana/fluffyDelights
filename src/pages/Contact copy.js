import ContactWrap from '../wrappers/ContactWrap';
import {db} from '../firebaseConfig';
import {addDoc, collection } from 'firebase/firestore';


import { useState} from 'react';

const Contact = () => {
  const [username, setUserName] = useState('');
  const [useremail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const userCollectionRef = collection(db, 'contactdata');
  const [submitted, setSubmitted] = useState(false);
  // const formSubmitted = () => {
  //   setSubmitted(true);
  // }
  const handleSubmit = () => {
    if( username !== '' && useremail !== '' && userMessage !== ''){
    addDoc(userCollectionRef, {
      name: username,
      email: useremail,
      message: userMessage,
      date: new Date(),
    }
   )};
   if( username !== '' && useremail !== '' && userMessage !== ''){
   alert('Thank you, we got your message!');
   } 
   if( username === '' || useremail === '' || userMessage === '') {
    alert("Please, fill out all fields");
   }


  }
  return (
    <ContactWrap>
      <main>
    <div className='container'>
      <p>Contact Form</p>
      <form className='contact-form'>
        <label>Full Name:</label>
        <input name = 'name' value = {username} type='text' placeholder='Enter your full name' onChange={(e)=>{
          setUserName(e.target.value)
        }}></input>

        <label>Email Address:</label>
        <input className='input' name = 'email' type='email' value = {useremail} placeholder='Enter your email address'onChange={(e)=>{
          setUserEmail(e.target.value)
        }}></input>
      
        <label>Ask us a question:</label>
        <textarea className='input' name = 'message' value = {userMessage} type='text' placeholder='Enter your message' onChange={(e)=>{
          setUserMessage(e.target.value)
        }}></textarea>
            <button className='submitBtn' type='submit' onClick={()=>handleSubmit()}>Submit</button>
      </form>
    </div>
    </main>
    </ContactWrap>
  )
}

export default Contact