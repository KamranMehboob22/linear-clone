
import './App.css'
import Header from './components/header'
import Hero from './components/hero'
import Feature from'./components/feature'
import CTA from './components/cta'
import Footer from './components//footer'
function App() {
 

  return (
    <>
   
      <div className="linear-container">
        <Header/>
        <Hero/>
        <Feature/>
        <CTA/>
        <Footer/>
      </div>
    </>
  )
}

export default App
