import React, { useState } from 'react';
import welcome from '../../assets/img/welcome.png' 
import axios from 'axios'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4001/users/authenticate', {
      email,
      password
    }).then(() => {
      alert("success");
      window.location.href = '/home';
    }).catch( e => {
      alert("Error", e);
      document.getElementById('login-status').innerHTML = "<span class='warning' style='color: red;'>Email or Password is invalid.</span>";
    })
  }
  return (
    <div>
      <div class="container">
        <div class="row mt-5 mb-5">
          <div class="col-md-7 vertical-center">
            <img class="welcome-img" src={welcome} alt="Welcome"/>
          </div>
          
          <div class="col-md-5 vertical-center">
            <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control" value={email} onChange={(e) => {setEmail(e.target.value)}}  />
            </div>

            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" value={password} onChange={(e) => {setPassword(e.target.value)}} />

            </div>
            <div id="login-status"></div>
              <button onClick={login} class="submit-btn" >Login Now </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;