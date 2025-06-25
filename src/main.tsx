import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import {Router} from "./router/router.tsx";
import AOS from "aos";
import 'aos/dist/aos.css';

AOS.init({ duration: 1000, once: true });

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
    </React.StrictMode>,
)
