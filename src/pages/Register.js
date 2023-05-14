import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import ContactWrap from "../wrappers/ContactWrap";
import Loading from "../components/Loading";
import { useState, useEffect} from "react";
import { auth } from "../firebaseConfig";
import AuthDetails from "../components/AuthDetails";
import { useNavigate, useParams } from "react-router-dom";
import {Helmet} from 'react-helmet-async';

const Register = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [member, setMember] = useState(true);
const [loading, setLoading] = useState(true);
const [focused, setFocused] = useState(false);
const navigate = useNavigate();
useEffect(()=>{
setTimeout(()=>{
setLoading(false);
}, 2000)
}, []);
const toggleMember = (e) => {
  e.preventDefault();
  if(member){
    setMember(false);
    console.log(member);
  }else{
    setMember(true);
    console.log(member);
  }
}
const onSubmit = (e) => {
  e.preventDefault()
  if(member){
    signIn()
  }else{
    signUp()
  }
  console.log(`name ${name}, email${email}, password ${password} member ${member}`)
}

const signIn = () => {
  signInWithEmailAndPassword(auth, email, password).then((userCredential)=> {
    navigate({pathname: '/successlogin'});
  }).catch((error)=> {
    console.log(error)
  })
  console.log('signed in!')
}

const signUp = () => {
  createUserWithEmailAndPassword(auth, email, password).then((userCredential)=> {
    console.log(userCredential)
    navigate({pathname: '/successregister'});
  }).catch((error)=> {
    console.log(error)
  })
};

const handleFocus = (e) => {
  setFocused(true)
}

  return (
    <ContactWrap>
    {loading ? (<Loading/>):(
      <main>
      <div className='container'>
    
      <p> {!member? "Register" : "Login"}</p>
      <form className='contact-form' onSubmit={onSubmit}>
        <label htmlFor="name">Email:</label>
        <input className='input' type='email' placeholder='Enter your email' required={true} value = {email} onChange={(e)=>setEmail(e.target.value)} onBlur={handleFocus} focused={focused.toString()}></input>
        <span className='inputError'>Please, enter valid email</span>
        <label htmlFor="password">Password:</label>
        <input className='input' autoComplete="new-password"  type='password' placeholder="Enter your password" required={true} pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$" value={password} onChange={(e)=>setPassword(e.target.value)} onBlur={handleFocus} focused={focused.toString()}></input>
        <span className='inputError'>The password must be 8-20 characters long, contain at least one letter, one number, and one special character</span>
        <button  className='submitBtn'  type="submit">Submit</button>
        <p className="notamember">{member ? 'Not a member?' : "Already a member?"}<button  className='submitBtn '  onClick={toggleMember}>{member ? "Register" : "Sign In"}</button></p>
  
      </form>
      <AuthDetails/>
      </div>
      </main>
    )}
      </ContactWrap>

  )
}

export default Register;

// {!member &&(
//   <input className='input' type='name' placeholder="Enter Your name" value={name} onChange={(e)=>setName(e.target.value)}/>
// )}