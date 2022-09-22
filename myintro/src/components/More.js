import React from 'react'
import './more.css'
// import mobg from'../assets/space3.jpg'
import githubpic from'../assets/github.png'
import instagrampic from'../assets/instagram.png'
import linkedinpic from'../assets/linkedin.png'
import Zoom from 'react-reveal/Zoom';

function More() {
  return (
    <>
   
   <div className='container'>
    
       <div className="column">
        <Zoom><a href="https://github.com/ParnishSharma"><img  src={githubpic} alt="github"></img></a>
   </Zoom> </div> 
    <div className="column">
    <Zoom ><a href="https://www.instagram.com/parnish_sharma/"> <img  src={instagrampic} alt="instagram"></img></a>
    </Zoom> </div>
     <div className="column">
   <Zoom ><a href="https://www.linkedin.com/in/parnish-sharma-63911921b/"> <img  src={linkedinpic} alt="linkedin"></img></a></Zoom>
   </div>  
  </div>
  </>
  )
}

export default More
