
import './App.css'
import Header from './components/header'
import Hero from './components/hero'
import Feature from'./components/feature'
import CTA from './components/cta'
import Testimonials from './components/Testimonials'  
import Footer from './components//footer'
function App() {
 

  return (
    <>
   
      <div className="linear-container">
        <Header/>
        <Hero/>
        <Feature/>
        < Testimonials/>
        <CTA/>
        <Footer/>
      </div>
    </>
  )
}

export default App
