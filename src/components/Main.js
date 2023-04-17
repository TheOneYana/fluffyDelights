import Header from "./Header";
import Footer from "./Footer";
import { Landing, Error, Register, About, Gallery, OurClients, Contact} from "../pages";
import {Routes, Route, Redirect, withRouter, BrowserRouter} from 'react-router-dom';
const Main = () => {
return (
    <main className="bkg">
    <Header/>
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='OurClients' element={<OurClients/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='Gallery' element={<Gallery/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='Register' element={<Register/>}/>
    </Routes>
<Footer/>
</main>
);
};


export default Main;
