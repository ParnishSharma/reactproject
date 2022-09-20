import React from 'react'
// import Design from '../Design'
import vdobg from '../assets/Bgvdo.mp4'
import mypic from '../assets/MYPIC.jpg'
import './home.css'
import Jello from 'react-reveal/Jello';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';



function Home() {
  return (
    <>
      <div className="overlay">
        
        <video src={vdobg} autoPlay loop muted /><Fade><h1 className='heading'>WELCOME</h1></Fade>
        <h2 className='intro'><Pulse>Greetings, my name is Parnish Sharma, and I'm
         from Himachal Pradesh. I'm currently pursuing my Bachelor of Technology at the SRM Institute of Science and Technology in Kattankulathur, Chennai, in the CSE-Core Department.I can speak in English ,Hindi, Pahadi and Punjabi languages. My interests are in front end engineering,
         and I enjoy developing gorgeous, effective products with wonderful user interfaces.  </Pulse></h2>
    </div>
      
      <div className='homeimg'><Jello>
        <img src={mypic}></img>
<div></div>
      </Jello></div>

    </>
  )
}

export default Home
