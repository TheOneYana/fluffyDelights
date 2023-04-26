import ContactWrap from '../wrappers/ContactWrap';
import {db} from '../firebaseConfig';
import {addDoc, collection } from 'firebase/firestore';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from "react-router-dom";


const Contact = () => {
const navigate = useNavigate();
const userCollectionRef = collection(db, 'contactdata');
const formik = useFormik({
  initialValues:{
    username: '',
    useremail: '',
    userMessage: '',
  }, 
  validationSchema: Yup.object({
    username: Yup.string().max(20, 'Name must be 20 characters or less').required('Name is required'),
    useremail: Yup.string().email("Invalid email address").required('Email is required'),
    userMessage: Yup.string().max(1000, 'Name must be 1000 characters or less').required('Message is required')
  }),
  onSubmit: (values)=> {
    console.log(values)
    addDoc(userCollectionRef, {
      username: values.username,
      useremail: values.useremail,
      userMessage: values.userMessage,
      date: new Date(),
      
  })
  navigate({pathname: '/success', query: values});
}});

  //  if( username !== '' && useremail !== '' && userMessage !== ''){
  //  alert('Thank you, we got your message!');
  //  } 
  //  if( username === '' || useremail === '' || userMessage === '') {
  //   alert("Please, fill out all fields");
  //  }
  return (
    <ContactWrap>
      <main>
    <div className='container'>
      <p>Contact Form</p>
      <form className='contact-form' onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>{formik.touched.username && formik.errors.username ? formik.errors.username : "Full Name:"}</label>
        <input
         className= {formik.touched.username && formik.errors.username ? 'input_error' : 'input'}
         name = 'username'
         type='text' 
         placeholder='Enter your full name'
         value = {formik.values.username} 
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         />

        <label>Email Address:</label>
        <input  
        className={formik.touched.useremail && formik.errors.useremail ? 'input_error' : 'input'}
        name = 'useremail' 
        type='email' 
        placeholder='Enter your email address' 
        value = {formik.values.useremail} 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
      
        <label>{formik.errors.userMessage ? formik.errors.userMessage : "Ask us a question:"}</label>
        <input 
         className={formik.errors.userMessage ? 'input_error' : 'input'}
         name = 'userMessage' 
         type='text' 
         placeholder='Enter your message' 
         value = {formik.values.userMessage} 
         onChange={formik.handleChange}
         />
            <button className='submitBtn' type='submit' >Submit</button>
      </form>
    </div>
    </main>
    </ContactWrap>
  )
}

export default Contact