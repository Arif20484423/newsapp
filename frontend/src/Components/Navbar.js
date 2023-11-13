import React from 'react'
import {Link} from 'react-router-dom'
const  Navbar =(props)=>{

    return (
      <div style={{    position:" sticky",
        top: "0px",
        zIndex: 2}}><nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">NewsApp</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/politics'>Politics</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/weather'>Weather</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/nation'>Nation</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/sports'>Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/entertainment'>Entertainment</Link>
            </li>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li> */}
          </ul>
          <form className="d-flex" role="search">
            <input onChange={props.handlesearch} className="form-control me-2" type="search"  placeholder="Search" value={props.search} aria-label="Search"/>

            <Link to={'/'+props.search}><button className="btn btn-outline-success" >Search</button></Link>
          </form>
        </div>
      </div>
    </nav></div>
    )
  
}

export default Navbar