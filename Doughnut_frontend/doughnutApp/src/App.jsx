import React from 'react'
import NavigationBar from './Components/NavigationBar'
import About from './Components/About'
import Quality from './Components/Quality'
import footer from './Components/footer'

const App = () => {
  return (
    <div>
      <NavigationBar/>
      <About/>
      <Quality/>
      <footer/>
    </div>
  )
}

export default App
