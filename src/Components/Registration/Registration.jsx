import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";
import UseFirebase from "../../Hooks/useFirebase";
import "./Registration.css";

const Registration = () => {
  // import user and function here
  const { SignInWithGoogle, user, setIsLoading, updateName } = useAuth();
  const { signUpWithPassword } = UseFirebase();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  // Crete Email and password state for update data
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // Get Email and password and name function
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // handle Google Login Function
  const handleGoogleSignIn = () => {
    SignInWithGoogle()
      .then((result) => {
        history.push(redirect_uri);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  
  // Sign up function here
  const handleSignUp = (e) => {
    signUpWithPassword(email, password).then((userCredential) => {
      updateName(name);
      history.push(redirect_uri);
    });
    e.preventDefault();
  };

  // Return jsx code here
  return (
    <div className='col-md-4 col-md-offset-4 mx-auto' id='login'>
      <section id='inner-wrapper' className='login mx-auto shadow rounded-3'>
        <article>
          <h5 className='card-title text-center mb-5 fw-light fs-5'>
            <p>{user.email}</p>
            Create a new account
          </h5>
          <form>
            <div className='form-group'>
              <div className='input-group'>
                <span className='input-group-addon'>
                  <i className='fa fa-user'> </i>
                </span>
                <input
                onBlur={handleNameChange}
                  type='text'
                  className='form-control'
                  placeholder='Name'
                  required
                />
              </div>
            </div>
            <div className='form-group'>
              <div className='input-group'>
                <span className='input-group-addon'>
                  <i className='fa fa-envelope'> </i>
                </span>
                <input
                  type='email'
                  onBlur={handleEmailChange}
                  className='form-control'
                  placeholder='Email Address'
                  required
                />
              </div>
            </div>
            <div className='form-group'>
              <div className='input-group'>
                <span className='input-group-addon'>
                  <i className='fa fa-key'> </i>
                </span>
                <input
                  onBlur={handlePasswordChange}
                  type='password'
                  className='form-control'
                  placeholder='Password'
                  required
                />
              </div>
            </div>
            <div className='form-group'>
              <div className='input-group'>
                <span className='input-group-addon'>
                  <i className='fa fa-key'> </i>
                </span>
                <input
                  onBlur={handlePasswordChange}
                  type='password'
                  className='form-control'
                  placeholder='Confirm Password'
                  required
                />
              </div>
            </div>
            <div className='d-grid'>
              <button
                onClick={handleSignUp}
                className='btn btn-success btn-login text-uppercase fw-bold'
                type='submit'>
                Sign Up
              </button>
            </div>
          </form>
          <hr className='my-4' />
          <div className='d-grid mb-2'>
            <button
              onClick={handleGoogleSignIn}
              className='btn btn-google btn-login text-uppercase fw-bold'
              type='submit'>
              <i className='fab fa-google me-2'></i> Sign up with Google
            </button>
          </div>
          <div className='d-grid'>
            <button
              className='btn btn-facebook btn-login text-uppercase fw-bold'
              type='submit'>
              <i className='fab fa-facebook-f me-2'></i> Sign up with Facebook
            </button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Registration;
