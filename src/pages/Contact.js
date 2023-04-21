import ContactWrap from '../wrappers/ContactWrap';
import {db} from '../firebaseConfig';
import {addDoc, collection } from 'firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {submitMessage} from '../features/contact/contactSlice';

const Contact = () => {
  const dispatch=useDispatch();
  const {email, name, message} = useSelector((store) => store.contact);
  return (
    <ContactWrap>
      <main>
    <div className='container'>
      <p>Contact Form</p>
      <form className='contact-form'>
 
        <label>Full Name:</label>
        <input type='text' placeholder='Enter your full name'>{name}</input>

        <label>Email Address:</label>
        <input className='input' type='email' placeholder='Enter your email address'>{email}</input>
      
        <label>Ask us a question:</label>
        <textarea className='input' type='text' placeholder='Enter your message'>{message}</textarea>
      </form>
      <button className='submitBtn' type='button' onClick={()=> dispatch(submitMessage())}>Submit</button>
    </div>
    </main>
    </ContactWrap>
  )
}

export default Contact