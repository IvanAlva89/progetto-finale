import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SessionProvider } from './providers/SessionProvider.jsx'
import { CartProvider } from './providers/CartProvider.jsx'
import { CartDrawerProvider } from './providers/CartDrawerProvider.jsx'
import Footer from './components/shared/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <CartDrawerProvider>
        <SessionProvider>
            <CartProvider>
                <BrowserRouter>
                    <App />
                    <Footer />
                </BrowserRouter>
            </CartProvider>
        </SessionProvider>
    </CartDrawerProvider>
)
