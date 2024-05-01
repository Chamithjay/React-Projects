import React from 'react'
import NavigationBar from './Components/NavigationBar'
import About from './Components/About'
import Quality from './Components/Quality'
import Contact from './Components/Contact'
import Products from './Components/Products'


const App = () => {
  return (
    <div>
      <NavigationBar/>
      <About/>
      <Products/>
      <Quality/>
      <Contact/>
      
      
    </div>
  )
}

export default App
