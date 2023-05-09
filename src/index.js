import React from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";
import App from "./App";
import {store} from './store';
import {Provider} from 'react-redux';
import {hydrateRoot} from 'react-dom/client';
import {HelmetProvider} from 'react-helmet-async';
const container = document.getElementById("root");
const root = hydrateRoot(container, <App/>);

root.render(
<Provider store={store}>
    <HelmetProvider>
        <App tab="home" />
    </HelmetProvider>
</Provider>);
