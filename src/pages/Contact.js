import ContactWrap from '../wrappers/ContactWrap';
import {db} from '../firebaseConfig';
import {addDoc, collection } from 'firebase/firestore';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from "react-router-dom";
import {useState, useEffect} from 'react';
import Loading from "../components/Loading";
import {Helmet} from 'react-helmet-async';

const Contact = () => {
const [loading, setLoading] = useState(true);
useEffect(()=>{
setTimeout(()=>{
setLoading(false);
}, 2000)
}, []);
const navigate = useNavigate();
const userCollectionRef = collection(db, 'contactdata');
const formik = useFormik({
  initialValues:{
    userName: '',
    userEmail: '',
    userMessage: '',
  }, 
  validationSchema: Yup.object({
    userName: Yup.string().max(20, 'Name must be 20 characters or less').required('Name is required'),
    userEmail: Yup.string().email("Invalid email address").required('Email is required'),
    userMessage: Yup.string().max(1000, 'Message must be 1000 characters or less').required('Message is required')
  }),
  onSubmit: (values)=> {
    console.log(values)
    addDoc(userCollectionRef, {
      userName: values.userName,
      userEmail: values.userEmail,
      userMessage: values.userMessage,
      date: new Date(),
      
  })
  navigate({pathname: '/success', query: values});
}});

  //  if( userName !== '' && userEmail !== '' && userMessage !== ''){
  //  alert('Thank you, we got your message!');
  //  } 
  //  if( userName === '' || userEmail === '' || userMessage === '') {
  //   alert("Please, fill out all fields");
  //  }
  return (
    <ContactWrap>
         <Helmet>
        <title>Contact FLuffy Delights - British Shorthair cattery in Los Angeles, California</title>
        <meta name = 'description' content = 'Contact us about british shorthair kittens'/>
        <link rel='canonical' href='/Contact'/>
      </Helmet>
        {loading ? (<Loading/>):(
      <main>
    <div className='container'>
      <p>Contact Form</p>
      <form className='contact-form' onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>{formik.touched.userName && formik.errors.userName ? formik.errors.userName : "Full Name:"}</label>
        <input
         className= {formik.touched.userName && formik.errors.userName ? 'input_error' : 'input'}
         name = 'userName'
         type='text' 
         placeholder='Enter your full name'
         value = {formik.values.userName} 
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         />

        <label>Email Address:</label>
        <input  
        className={formik.touched.userEmail && formik.errors.userEmail ? 'input_error' : 'input'}
        name = 'userEmail' 
        type='email' 
        placeholder='Enter your email address' 
        value = {formik.values.userEmail} 
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
        )}
    </ContactWrap>
  )
}

export default Contact