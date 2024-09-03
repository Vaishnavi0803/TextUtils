import React, { useState } from 'react';
import './App.css';
import Textform from './components/Textform';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import AboutUs from './components/AboutUs';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);  // Clear alert after 2 seconds
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutus="About" showAlert={showAlert} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<Textform />} ></Route>
          <Route exact path="/about" element={<AboutUs />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

