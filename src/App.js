// import { Landing, Error, Register, About, Gallery, OurClients, Contact } from "./pages";
import React, { useEffect } from 'react'; 
import { BrowserRouter} from 'react-router-dom';
import Main from './components/Main';
// import ReactGA from 'react-ga4';


function App() {
// useEffect(() => {
//   ReactGA.initialize('G-V2ELZY2KFC');
//   // Send pageview with a custom path
//   ReactGA.send({ hitType: "pageview", page: "/landingpage", title: "Landing Page" });
// }, [])
  return (
    <BrowserRouter>
    <Main/>
    </BrowserRouter>
  );
}

export default App;
