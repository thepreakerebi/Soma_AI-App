import { useCallback } from "react";
import PropTypes from "prop-types";
import "./LoginOptions.css";

export const Onboarding1 = ({ className = "" }) => {
  const onGoogleButtonsClick = useCallback(() => {
    // Handle click event
  }, []);

  const onGoogleButtonsClick1 = useCallback(() => {
    // Handle click event
  }, []);

  return (
    <section className={`login-options ${className}`}>
      <button className="google-buttons" onClick={onGoogleButtonsClick}>
        <i className="bi bi-google google-icon"></i>
        <div className="sign-up-with">Sign up with Google</div>
      </button>
      <div className="already-have-an">Already have an account, then</div>
      <button className="google-buttons1" onClick={onGoogleButtonsClick1}>
        <i className="bi bi-google google-icon1"></i>
        <div className="log-in-with">Sign in with Google</div>
      </button>
    </section>
  );
};

Onboarding1.propTypes = {
  className: PropTypes.string,
};



