import React, { useState } from 'react';
import './SignInSignUpPopup.css';


function SignInSignUpPopup({ onClose }) {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => setIsSignUp(!isSignUp);

  return (
    <div className="popup">
      <div className="popup-inner">
        
        {isSignUp ? (
          
          <form>
            <input type="email" placeholder="Email ID" className="rounded-input" />
            <input type="password" placeholder="Password" className="rounded-input" />
            <input type="password" placeholder="Re-enter Password" className="rounded-input" />
            <button type="submit">Sign Up</button>
          </form>
        ) : (
          
          <form>
            <input type="email" placeholder="Email ID" className="rounded-input" />
            <input type="password" placeholder="Password" className="rounded-input" />
            <button type="submit">Sign In</button>
          </form>
        )}
        <button onClick={toggleForm}>{isSignUp ? "Back to Sign In" : "Or Sign Up"}</button>
        <button onClick={onClose}> Maybe Later</button>
      </div>
    </div>
  );
}

export default SignInSignUpPopup; 
