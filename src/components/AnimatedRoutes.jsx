import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom';
import { Error, Register, OurClients,Available} from "../pages";
import {AnimatePresence} from "framer-motion/dist/framer-motion"; ;
const LazyAbout = React.lazy(()=> import("../pages/About"));
const LazyLanding = React.lazy(()=> import("../pages/Landing"));
const LazyGallery = React.lazy(()=> import("../pages/Gallery"));
const LazyContact = React.lazy(()=> import("../pages/Contact"));
const LazySuccess = React.lazy(()=> import("../pages/Success"));



function AnimatedRoutes () {
const location = useLocation();
return (
<AnimatePresence>
<Routes location = {location} key={location.pathname}>
    <Route path='/' element={<React.Suspense fallback={<div className='lazyloading'><img className="paw_tracks" src={"https://i.ibb.co/LQvTtqc/paw-tracks-copy.gif"}/></div>}><LazyLanding/></React.Suspense>}/>
    <Route path='About' element={<React.Suspense fallback={<div className='lazyloading'><img className="paw_tracks" src={"https://i.ibb.co/LQvTtqc/paw-tracks-copy.gif"}/></div>}><LazyAbout/></React.Suspense>}/>
    <Route path='OurClients' element={<React.Suspense fallback={<div className='lazyloading'><img className="paw_tracks" src={"https://i.ibb.co/LQvTtqc/paw-tracks-copy.gif"}/></div>}><OurClients/></React.Suspense>}/>
    <Route path='Contact' element={<React.Suspense fallback={<div className='lazyloading'><img className="paw_tracks" src={"https://i.ibb.co/LQvTtqc/paw-tracks-copy.gif"}/></div>}><LazyContact/></React.Suspense>}/>
    <Route path='Gallery' element={<React.Suspense fallback={<div className='lazyloading'><img className="paw_tracks" src={"https://i.ibb.co/LQvTtqc/paw-tracks-copy.gif"}/></div>}><LazyGallery/></React.Suspense>}/>
    <Route path='*' element={<React.Suspense fallback={<div className='lazyloading'><img className="paw_tracks" src={"https://i.ibb.co/LQvTtqc/paw-tracks-copy.gif"}/></div>}><Error/></React.Suspense>}/>
    <Route path='Register' element={<React.Suspense fallback={<div className='lazyloading'><img className="paw_tracks" src={"https://i.ibb.co/LQvTtqc/paw-tracks-copy.gif"}/></div>}><Register/></React.Suspense>}/>
    <Route path='Available' element={<React.Suspense fallback={<div className='lazyloading'><img className="paw_tracks" src={"https://i.ibb.co/LQvTtqc/paw-tracks-copy.gif"}/></div>}><Available/></React.Suspense>}/>
    <Route path='Success' element={<React.Suspense fallback={<div className='lazyloading'><img className="paw_tracks" src={"https://i.ibb.co/LQvTtqc/paw-tracks-copy.gif"}/></div>}><LazySuccess/></React.Suspense>}/>
</Routes>
</AnimatePresence>
)
}

export default AnimatedRoutes;