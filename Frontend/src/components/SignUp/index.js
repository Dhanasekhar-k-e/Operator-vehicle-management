import React, { useState } from 'react';
import axios from 'axios';
import welcome from '../../assets/img/welcome.png' 

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const register = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4001/users/register', {
      firstName,
      lastName,
      email,
      password
    }).then(() => {
      alert("success");
      window.location.href = '/signin';
    }).catch( e => {
      alert("Error", e);
      document.getElementById('register-status').innerHTML = "<span class='warning' style='color: red;'>Something went wrong.</span>";
    })
  }
  return (
    <div>
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-md-7 vertical-center">
            <img className="welcome-img" src={welcome} alt="Welcome"/>
          </div>
          <div id="register-status"></div>
          <div className="col-md-5 vertical-center">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control" value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type={showPassword ? 'text' : 'password'} className="form-control" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                <span className="input-group-text eye-icon" onClick={() => {setShowPassword(!showPassword)}}>
                  <i className={showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'} aria-hidden="false"></i>
                </span>
              </div>

              <button onClick={register} className="submit-btn">Register Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;