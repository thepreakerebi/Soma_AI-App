import React, { useCallback } from 'react';
import { FaGoogle } from 'react-icons/fa'; // Google icon
import IconImage from '../assets/Google.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Bootstrap Icons

const Onboarding1 = () => {
  const onGoogleSignUpClick = useCallback(() => {
    // Handle Sign Up with Google click event
  }, []);

  const onGoogleSignInClick = useCallback(() => {
    // Handle Sign In with Google click event
  }, []);

  return (
    <section className="text-center mt-8">
      <button
        className= "bg-[#1E1548] text-white rounded-full px-16 py-2 flex items-center justify-center mb-4"
        onClick={onGoogleSignUpClick}
      >
        <img src={IconImage} alt="Icon Description" className="icon-class mr-2" />
        Sign up with Google
      </button>

      <p className="text-gray-500 mb-4">Already have an account?</p>

      <button
        className=" text-[#1E1548] rounded-full px-16 py-3 flex items-center justify-center border border-blue-800"
        onClick={onGoogleSignInClick}
      >
        <img src={IconImage} alt="Icon Description" className="icon-class mr-2" />
        Log in with Google
      </button>
    </section>
  );
};

export default Onboarding1;



