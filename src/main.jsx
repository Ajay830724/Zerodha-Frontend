import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import HomePage from './landing_page/home/HomePage.jsx'
import Navbar from './landing_page/Navbar.jsx'
import Footer from './landing_page/Footer.jsx'
import SignupPage from './landing_page/signup/SignupPage.jsx'
import AboutPage from './landing_page/about/AboutPage.jsx'
import ProductsPage from './landing_page/products/ProductsPage.jsx'
import PricingPage from './landing_page/pricing/PricingPage.jsx'
import SupportPage from './landing_page/support/SupportPage.jsx'
import PageNotFound from './landing_page/PageNotFound.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/signup' element={<SignupPage/> } />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/products' element={<ProductsPage/>} />
      <Route path='/pricing' element={<PricingPage/>} />
      <Route path='/support' element={<SupportPage/>} />
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
