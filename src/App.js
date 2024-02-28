import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignInSignUpPopup from './SignInSignUpPopup';
import Products from './Products';
import Contact from './Contact';
import Profile from './Profile';
import './App.css';
import './SignInSignUpPopup.css';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const mainContentRef = useRef(null);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    if (mainContentRef.current) {
      mainContentRef.current.classList.toggle('blur-background');
    }
  };

  const productsRef = useRef(null);
  const profileRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="company-name">HARISHNI INDUSTRIES</div>
          <div className="search-container">
            <i className='fas fa-search search-icon'></i>
            <input type="text" placeholder="Search..." className='search-input' />
            <button onClick={togglePopup} className="sign-in-up-btn">Sign In/Sign Up</button>
          </div>
        </header>

        <nav className="menu-bar">
          <ul><li onClick={() => scrollToSection(productsRef)}>Products</li>
            <li onClick={() => scrollToSection(profileRef)}>Profile</li>
            <li onClick={() => scrollToSection(contactRef)}>Contact</li>
          </ul>
        </nav>

        {showPopup && <SignInSignUpPopup onClose={togglePopup} />}
        <div ref={mainContentRef} className={showPopup ? 'blur-background' : ''}></div>

        <main>
        <div ref={productsRef}><Products /></div>
        <div ref={profileRef}><Profile /></div>
        <div ref={contactRef}><Contact /></div>
      </main>
      
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
