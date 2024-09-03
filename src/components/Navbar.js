import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AboutUs from './AboutUs';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [dm, setdm] = useState(false);
  const togglefunc=()=>{
    setdm(!dm)
    if(!dm){
      document.body.style.color="white";
      document.body.style.backgroundColor="black";
      props.showAlert("Dark mode has been enabled","success");
    }
    else{
      document.body.style.color="black";
      document.body.style.backgroundColor="white";
      props.showAlert("Dark mode has been disabled","danger");
    }
  }
  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${dm ? 'navbar-dark bg-dark text-white' : 'navbar-light bg-light text-black'}`}>
        <div className="container-fluid">
          <Link className="nav-link active" aria-current="page" to="/" onClick={() => window.location.reload()}>{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutus}</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex align-items-center" role="search">
              <div className="form-check form-switch d-flex align-items-center">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={togglefunc}/>
                <label className="form-check-label ms-2" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
              </div>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary me-2" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutus: PropTypes.string
};

Navbar.defaultProps = {
  aboutus: 'About Us'
};
