import { Landing, Error, Register, About, Gallery, OurClients, Contact } from "./pages";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Landing/>}/>
  <Route path='About' element={<About/>}/>
  <Route path='OurClients' element={<OurClients/>}/>
  <Route path='Contact' element={<Contact/>}/>
  <Route path='Gallery' element={<Gallery/>}/>
  <Route path='*' element={<Error/>}/>
  <Route path='Register' element={<Register/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
