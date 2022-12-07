import React from 'react';
import { useState,useEffect } from 'react';

export default function Register() {
 
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const handleInputChange = (e) => {

    
  // const { id, value } = e.target;
  // if (id === "name") {
  //   setName(value);
  // }
 
  // if (id === "email") {
  //   setEmail(value);
  // }
  // if (id === "password") {
  //   setPassword(value);
  // }
  // if (id === "confirmPassword") {
  //   setConfirmPassword(value);
  // }
// };
  // States for checking the errors

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (name === '' || email === '' || password === '') {
  //     setError(true);
  //   } else {
  //     setSubmitted(true);
  //     setError(false);
  //   }
  // };
  const handleSubmit = () => {
  console.log(name,  email, password);
};
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <p>Okay {name} , you are successfully Signed-up!</p>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <p>Please enter all the fields</p>
      </div>
    );
  };
  useEffect(() => {
    fetch("/logins", {
          method:"POST",
          headers: {
            "Content-Type":"application/json",
          },
          body: JSON.stringify(FormData)
        })
      })
  
  
  return (
    <div>
      <div>
        <h1>Sign-up</h1>
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
          <div className='form'>
              
        <div className="form-body">
        <div className="username">
        <label className="form__label" for="username">username:</label>
        <input onChange={handleName}  className="form-control" placeholder='Jane Doe'
         value={name} type="name" />
       </div>

         <div className="email">
           <label className="form__label" for="email">Email:</label>
            <input onChange={handleEmail} className="form-control" placeholder='janedoe@gmail.com'
             value={email} type="email" />
         </div>


        <div className="password">
            <label className="form__label" for="password">password:</label>
                 <input onChange={handlePassword} className="form-control" placeholder='****'
                   value={password} type="password" />
        </div>

   </div>
                  
        <button onClick={handleSubmit} className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}
