import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Profile } from './Profile'



function App() {

  return (
    <div className="Hero">
      <div >
      <Profile 
      profile="A"
       name="ABHI"
       id="789"
       age="30"
       email="abhi@example.com" 
       role="Developer"/>
       </div>

      
    <div >
      <Profile 
      profile="N"
       name="NIKHIL"
       id="369"
       age="40"
       email="nikhil@example.com" 
       role="Developer"/>
      </div>
   </div>
  )
}

export default App
