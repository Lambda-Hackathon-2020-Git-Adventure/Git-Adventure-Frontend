import React, {useState} from 'react';

import {axiosWithAuth} from './authentication/axiosWithAuth';

 const SignIn = props => {

      const [user, setUser]= useState({
        username: '',
        password: '',
            });

        const handleChange = e => {
          setUser({
            ...user, 
            [e.target.name]: e.target.value,
          });
        }

        const handleSubmit = e => {
          e.preventDefault();
          axiosWithAuth().post('endpoint needed for BE', user)
          .then(res => {
            localStorage.setItem("token", res.data.payload)
            props.history.push("/dashboard")
            window.location.reload()
        })
        .catch(err => {
            console.log(err)
        });
    }


  return(
  <div>
    <h1>SIGN IN PAGE</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor='username'> UserName </label>
      <br /> 
        <input 
          name='username'
          value={user.username}
          onChange={handleChange}
          id='email'
        />
        <br />
          <label htmlFor='password'> Password</label>
          <br />
            <input 
              name='password'
              value={user.password}
              onChange={handleChange}
              id='password'
            />
      </form>
      <br />
        <button type="submit"> SignIn </button>
    </div>
    );
}



export default SignIn;