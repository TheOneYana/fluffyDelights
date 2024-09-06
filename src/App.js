// import { Landing, Error, Register, About, Gallery, OurClients, Contact } from "./pages";
import React, { useEffect } from 'react'; 
import { BrowserRouter} from 'react-router-dom';
import Main from './components/Main';
import { initGA, logPageView } from './analytics';

function App() {
  useEffect(() => {
    initGA();
    logPageView(); // Track page view when the app is loaded
  }, []);

  return (
    <BrowserRouter>
    <Main/>
    </BrowserRouter>
  );
}

export default App;
