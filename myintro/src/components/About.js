import React from 'react'
import './about.css'
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';

function About() {
  return (<>
   <div className='about'>
   <Flip > <h2 className='abouthead'>Schooling</h2></Flip>

    <Zoom ><h3 className='parabout'>I received my 10th-level education from Maharishi Vidya Mandir Public School,
     and I attended St. D.R. Public School for my 12th-level education. I scored 81% in my class 10th board exams
       and 86.8% in my class 12th board exams.</h3>
</Zoom>
   </div>
    <div className='about'>
    <Flip ><h2 className='abouthead'>College</h2></Flip>

    <Zoom ><h3 className='parabout' >I'm currently pursuing a bachelor of technology in Computer Science and Engineering in 
    the third semester of my college's second year. In addition to this, I am working as an Associate in SRMIST's prestigious club  Next Tech Lab.
     I got 9.61 CGPA during my first year of college.</h3></Zoom>

   </div>
   <div className='about'>
   <Flip><h2 className='abouthead'>SKILLS</h2></Flip >

   <Zoom ><h3 className='parabout'>I have acquired some additional skills in addition to my university studies. I am working on several
     computer languages like C, C++, Javascript, and HTML. In order to improve my FRONT END SKILLS, I am currently working on the Javascript library REACT.JS. 
    I too have received my ReactJS certification.I have built couples of Application using react which includes fetching API,s, Usage of HOOKS</h3></Zoom >

   </div>

   </>
    
  )
}

export default About
