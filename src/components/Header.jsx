import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <header  className='container-fluid nav_style mx-auto' >
  <div className='row' >
    <div className="col-md-10 col-11 mx-auto">
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid d-flex">
    <a className="navbar-brand" href="#"><img src="https://cryptologos.cc/logos/aave-aave-logo.png" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link ">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ">Contact</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
    </div>
  </div>
    
  
</header>

  )
}

export default Header