import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';

const AuthDetails = () => {
const [authUser,setAuthUser] = useState(null);

useEffect(()=> {
    const listen = onAuthStateChanged(auth, (user)=> {
        if (user) {
            setAuthUser(user)
        } else {
            setAuthUser(null)
        }

    });
    return ()=> {
        listen()
    }
}, []);
const userSignOut = () => {
signOut(auth).then(()=> {
    console.log('signed out');
}).catch(error => console.log(error))
}
  return (
    <div>{authUser ? <><p className='notamember'>{`Signed In as ${authUser.email} `}<button className='submitBtn signOut' onClick = {userSignOut}>Sign out</button></p></>: <p>Signed Out</p>}</div>
  )
}

export default AuthDetails;