import React from 'react'
import './Info.css'
const Info = () => {
  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-md-10 col-11 mx-auto">
                <div className="row">
                    <div className="col-md-6 col-12 mx-auto">
                        <p className='header_text' >Hi Dear,<br />
                        The Standard Chunk Of <span className='span_header_text' >Lorem Ispm</span><br />
                        used since the <span className='span_header_text'>1500s</span>
                        </p>
                        <p className='header_text2' >Cicero are also reproducre <br /><span className='span_header_text' >=SITENAME</span></p>
                        <div className='d-flex justify-content-around  align-item-center'>

                        <div className="button ">
                     
                            <button className='hire_me'> <i class="fas fa-check"></i> Hire Me</button>
                            
                        </div>
                        <div className="button">
                        
                            <button className='about_me'><i class="fas fa-user"></i> About Me</button>
                            
                        </div>
                        </div>
                        <div className='text-center header_mail' >
                          <p className='font-weight-bold  header_email_para' >Email</p>
                          <p>test@gmail.com</p>
                        </div>
                         </div>
                         {/* right */}
                       <div className="col-md-6 col-12  right_container">
                        <div className='float-right img_right' >
                           

                            <img  style={{maxHeight:'400px',minHeight:"100px",
                            height:"321px",objectFit:"contain"}} className='img_1' src="1.jpg" alt="" />
                          

                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Info