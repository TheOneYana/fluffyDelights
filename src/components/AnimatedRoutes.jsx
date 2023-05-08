import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom';
import { Error, Register, OurClients,Available} from "../pages";
import {AnimatePresence} from "framer-motion/dist/framer-motion"; ;
const LazyAbout = React.lazy(()=> import("../pages/About"));
const LazyLanding = React.lazy(()=> import("../pages/Landing"));
const LazyGallery = React.lazy(()=> import("../pages/Gallery"));
const LazyContact = React.lazy(()=> import("../pages/Contact"));
const LazySuccess = React.lazy(()=> import("../pages/Success"));
const LazySuccessLogin = React.lazy(()=> import("../pages/SuccessLogin"));
const LazySuccessRegister = React.lazy(()=> import("../pages/SuccessRegister"));


function AnimatedRoutes () {
const location = useLocation();
return (
<AnimatePresence>
<Routes location = {location} key={location.pathname}>
    <Route path='/' element={<React.Suspense><LazyLanding/></React.Suspense>}/>
    <Route path='About' element={<React.Suspense><LazyAbout/></React.Suspense>}/>
    <Route path='OurClients' element={<React.Suspense><OurClients/></React.Suspense>}/>
    <Route path='Contact' element={<React.Suspense><LazyContact/></React.Suspense>}/>
    <Route path='Gallery' element={<React.Suspense ><LazyGallery/></React.Suspense>}/>
    <Route path='*' element={<React.Suspense><Error/></React.Suspense>}/>
    <Route path='Register' element={<React.Suspense><Register/></React.Suspense>}/>
    <Route path='Available' element={<React.Suspense><Available/></React.Suspense>}/>
    <Route path='Success' element={<React.Suspense><LazySuccess/></React.Suspense>}/>
    <Route path='SuccessLogin' element={<React.Suspense><LazySuccessLogin/></React.Suspense>}/>
    <Route path='SuccessRegister'element={<React.Suspense><LazySuccessRegister/></React.Suspense>}/>
</Routes>
</AnimatePresence>
)
}

export default AnimatedRoutes;