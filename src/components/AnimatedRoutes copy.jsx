import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom';
import { Landing, Error, Register, About, Gallery, OurClients, Contact, Available, Success} from "../pages";
import {AnimatePresence} from "framer-motion/dist/framer-motion"; ;


function AnimatedRoutes () {
const location = useLocation();
return (
<AnimatePresence>
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
</Routes>
</AnimatePresence>
)
}

export default AnimatedRoutes;