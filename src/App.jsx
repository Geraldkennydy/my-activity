import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ken from './assets/kennydy.jpeg'
import Profile from './components/Profile'
import background from './assets/background.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{
          height: "670px",
          position: "relative",
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
         }}>
        
    <div className='it'>
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
        <img src={ken} className='ken' />
        </a>

      </div>
      <h1>Gerald Kennydy Llona</h1>
      <p className='read-the-docs'>Web Developer</p>
      </div>
      </div>

      <div className='llona'>
      <p className='kini'>Contact Information</p>
     <Profile Email='kencleoford@gmail.com' Phone='09996088701' Address='Burgos,Daraga,Albay'/>
      </div>

      <div className='ss'>
      <p className='ll'>Skills</p>
      <p>• Programming</p>
      <p>• DevOps</p>
      <p>• CSS</p>
      <p>• HTML</p>
      <p>• Node.js</p>
      </div>
      
      <div className='mm'>
      <p className='nn'>Work Experience</p>
      <p>Web Developer at NVIDIA Corporation</p>
      <p>Sept 2019-Present</p>
      <p>Builds and maintains websites and web applications</p>
      <p>Cybersecurity Analyst at International Business Machines Corporation</p>
      <p>Jan 2016 - Mar 2019</p>
      <p>Protects systems from cyber threats </p>
      </div>

      </div>
    </>
  )
}

export default App
