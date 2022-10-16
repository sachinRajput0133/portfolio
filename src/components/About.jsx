import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='container-fluid my-6 about_sec bg-light' id='about_id'>
        <div className="row">
        <div className="col-md-10 col-11 mx-auto" >
            <div className="main_title">
              <h1>About Me</h1> 
            </div>
           <div className="row">
            <div className="col-md-5 col-11 left_img">
                <img src="2.jpg" alt="" /></div>
            <div className="col-md-7 col-11 about_text d-flex justofy-content-center align-self-center align-items-start flex-column">
            <p>Hello,</p> 
            <h1>I am a passionate designer</h1>
            <p>I have 3 years of experience.i can help you grow your business by doing something different and new for your business.i have done a lot of business </p>
            
            </div>
           </div>
        </div>

        </div>
    </div>
  )
}

export default About