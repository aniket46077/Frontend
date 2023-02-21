import './style.css';

import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch("https://imsbackend.onrender.com/companyLogin", {
            method:"POST",
            //credentials:"include",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        });

        const data = res.json();
        console.log(res['cookie']);
        if(res.status === 422 || !data) {
            window.alert("Invalid Credential");
        } else {
            window.alert("Login Successfull");
            navigate("/")
        }
    }


  return (
    <div class="wrapper">
      <div class="title">Login Form</div>
      <form method="POST">
        <div class="field">
          <input type="email" name="email" id="email" autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          />
          <label>Email Address</label>
        </div>
        <div class="field">
          <input type="password" name="password" id="password" autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your Password"
          />
          <label>Password</label>
        </div>
        <div class="content">
          <div class="checkbox">
            <input type="checkbox" id="remember-me"/>
            <label for="remember-me">Remember me</label>
          </div>
          <div class="pass-link"><a href="#">Forgot password?</a></div>
        </div>
        <div class="field">
          <input type="submit" name="login" id="login"
            value="Log In"
            onClick={loginUser}
          />
        </div>
        <div class="signup-link">Not a member? <a href="./signup">Signup now</a></div>
      </form>
    </div>
  )
}

export default Login

