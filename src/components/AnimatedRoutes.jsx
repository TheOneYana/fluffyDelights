import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom';
import { Error, Register, OurClients,Available, Landing, About, Contact, Gallery, Success, SuccessLogin, SuccessRegister} from "../pages";


function AnimatedRoutes () {
const location = useLocation();
return (

<Routes location = {location} key={location.pathname}>
    <Route path='/' element={<Landing/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='OurClients' element={<OurClients/>}/>
    <Route path='Contact' element={<Contact/>}/>
    <Route path='Gallery' element={<Gallery/>}/>
    <Route path='*' element={<Error/>}/>
    <Route path='Register' element={<Register/>}/>
    <Route path='Available' element={<Available/>}/>
    <Route path='Success' element={<Success/>}/>
    <Route path='SuccessLogin' element={<SuccessLogin/>}/>
    <Route path='SuccessRegister'element={<SuccessRegister/>}/>
</Routes>

)
}

export default AnimatedRoutes;