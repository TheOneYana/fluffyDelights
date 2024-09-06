import React from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";
import App from "./App";
import {store} from './store';
import {Provider} from 'react-redux';


import {HelmetProvider} from 'react-helmet-async';
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
<Provider store={store}>
    <HelmetProvider>
        <App tab="home" />
    </HelmetProvider>
</Provider>);


//SSR index.js setup
// import {hydrateRoot} from 'react-dom/client';
// const root = hydrateRoot(container,
// <Provider store={store}>
//     <HelmetProvider>
//         <App tab="home" />
//     </HelmetProvider>
// </Provider>);