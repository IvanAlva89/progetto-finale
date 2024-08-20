import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SessionProvider } from './providers/SessionProvider.jsx'
import { CartProvider } from './providers/CartProvider.jsx'
import { CartDrawerProvider } from './providers/CartDrawerProvider.jsx'
import { ToastContainer } from 'react-toastify';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <CartDrawerProvider>
        <SessionProvider>
            <CartProvider>
                <BrowserRouter>
                    <App />
                    <ToastContainer />
                </BrowserRouter>
            </CartProvider>
        </SessionProvider>
    </CartDrawerProvider>
)
