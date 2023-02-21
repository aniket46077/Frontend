import './style.css';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();
    const [user,setUser] = useState({
      name:"",email:"",phone_no:"",gender:"",password:"",confirm_password:""
    });
    let name, value;
    const handleInputs = (e) =>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }


    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, phone_no, gender, password, confirm_password} = user;

        const res = await fetch("https://imsbackend.onrender.com/studentRegister", {
          method: "POST",
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({
            name, email, phone_no, gender, password, confirm_password
          })
        });

        const data = await res.json();
        if (data.status === 422 || !data){
          window.alert("Invalid Registration");
          console.log("Invalid Registration");
        } else {
          window.alert("Registration Successfull");
          console.log("Successful Registration");

          navigate("/login")
        }
    }

  return (
    <div class="wrapper">
      <div class="title">Signup Form</div>
      <form method="POST">
      <div class="field">
          <input type="text"  name="name" id="name" autoComplete="off"
              value={user.name}
              onChange={handleInputs}
          placeholder="Your Name"/>
          <label>Name</label>
        </div>
        <div class="field">
          <input type="email" name="email" id="email" autoComplete="off"
              value={user.email}
              onChange={handleInputs}
          placeholder="Your email" />
          <label>Email Address</label>
        </div>
        <div class="field">
          <input type="number" name="phone_no" id="phone_no" autoComplete="off"
              value={user.phone_no}
              onChange={handleInputs}
          placeholder="Your Number"/>
          <label>Mobile Number</label>
        </div>
        <div class="field">
          <input type="text" name="gender" id="gender" autoComplete="off"
              value={user.gender}
              onChange={handleInputs}
          placeholder="Your Gender"/>
          <label>Gender</label>
        </div>
        
        <div class="field">
          <input type="password" name="password" id="password" autoComplete="off"
              value={user.password}
              onChange={handleInputs}
          placeholder="Your Password"/>
          <label>Password</label>
        </div>
        <div class="field">
          <input type="password" name="confirm_password" id="confirm_password" autoComplete="off"
              value={user.confirm_password}
              onChange={handleInputs}
          placeholder="Your Confirm Password"/>
          <label>Confirm Password</label>
        </div>
        
        <div class="field">
          <input type="submit" value="Signup" name="signup" id="signup"
              onClick={PostData}
          />
        </div>
        <div class="signup-link">Already a member? <a href="./login">Login</a></div>
      </form>
    </div>
  )
}

export default Signup
