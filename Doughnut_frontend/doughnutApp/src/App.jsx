import React from 'react'
import NavigationBar from './Components/NavigationBar'
import About from './Components/About'
import Quality from './Components/Quality'
import Contact from './Components/Contact'
import Products from './Components/Products'
import HeroSection from './Components/HeroSection'


const App = () => {
  return (
    <div >
      <NavigationBar/>
      <HeroSection/>
      <About/>
      <Products/>
      <Quality/>
      <Contact/>
      
      
    </div>
  )
}

export default App
