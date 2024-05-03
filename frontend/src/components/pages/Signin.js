import React from 'react';
import {Link} from 'react-router-dom';

function Login() {
  return (
    <div>

<>
  {/* Page content */}
  <section className="position-relative h-100 pt-5 pb-4">
    {/* Sign in form */}
    <div className="container d-flex flex-wrap justify-content-center justify-content-xl-start h-100 pt-5">
      <div
        className="w-100 align-self-end pt-1 pt-md-4 pb-4"
        style={{ maxWidth: 526 }}
      >
        <h1 className="text-center text-xl-start">Welcome Back</h1>
        <p className="text-center text-xl-start pb-3 mb-3">
          Don’t have an account yet?{" "}
            <Link to="/register" class="link active mx-4" style={{color: '#fff'}}> 
                Register here. 
            </Link>

        </p>
        <form className="needs-validation mb-2" noValidate="">
          <div className="position-relative mb-4">
            <label htmlFor="email" className="form-label fs-base">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control form-control-lg"
              required=""
            />
            <div className="invalid-feedback position-absolute start-0 top-100">
              Please enter a valid email address!
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label fs-base">
              Password
            </label>
            <div className="password-toggle">
              <input
                type="password"
                id="password"
                className="form-control form-control-lg"
                required=""
              />
              <label
                className="password-toggle-btn"
                aria-label="Show/hide password"
              >
                <input className="password-toggle-check" type="checkbox" />
                <span className="password-toggle-indicator" />
              </label>
              <div className="invalid-feedback position-absolute start-0 top-100">
                Please enter your password!
              </div>
            </div>
          </div>
          
          <button
            type="submit"
            className="btn btn-primary shadow-primary btn-lg w-100"
          >
            Sign in
          </button>
        </form>

        <a href="#" className="btn btn-link btn-lg w-100">
          Forgot your password?
        </a>
        <hr className="my-4 " />
      </div>
      
    </div>
    {/* Background */}
    <div
      className="position-absolute top-0 end-0 w-50 h-100 bg-position-center bg-repeat-0 bg-size-cover d-none d-xl-block"
      style={{ backgroundImage: "url(assets/img/account/signin-bg.jpg)" }}
    />
  </section>
</>

     

    </div>
  )
}

export default Login