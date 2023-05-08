// import { Landing, Error, Register, About, Gallery, OurClients, Contact } from "./pages";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
    <Main/>
    </BrowserRouter>
  );
}

export default App;
