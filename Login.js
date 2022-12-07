
import React, { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(email);
    // }
const handleInputChange = (e) => {

    
  const { id, value } = e.target;
  if (id === "username") {
    setUsername(value);
  }
 
  if (id === "email") {
    setEmail(value);
  }
  if (id === "pass") {
    setPass(value);
  }
//   if (id === "confirmPassword") {
//     setConfirmPassword(value);
//   }
};
const handleSubmit = () => {
  console.log( username, email, pass);
};
    return (
        <div className="auth-form-container">
            
            <form className="form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label htmlFor="username">Username</label>
                <input value={username} onChange = {(e) => handleInputChange(e)}type="username" placeholder="Jane Doe" id="username" name="username" className="form-control" />
                <label htmlFor="email">email</label>
                <input value={email}  onChange = {(e) => handleInputChange(e)} type="email" placeholder="janedoe@gmail.com" id="email" name="email" className="form-control" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange = {(e) => handleInputChange(e)} type="password" placeholder="********" id="password" name="password" className="form-control" />

                
                <button onClick={()=>handleSubmit()} className='btn btn-primary' type="submit">Log In</button>
                
            </form>

        </div>
    )
}