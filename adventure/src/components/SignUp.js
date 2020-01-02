import React, { useState } from 'react';

import axios from 'axios';

export default function SignUp(props) {

    const [user, setUser] = useState({
      username: '',
      password: '',
    })

    const handleChange = e => {
      setUser({
        ...user,
        [e.target.name]:e.target.value,
      });
    }


    const handleSubmit = e => {
      e.preventDefault();
      axios.post('BE url for signup', user)
      .then(res => {
        localStorage.setItem("token", res.data.payload)
        props.history.push("/signin")
        window.location.reload()
    })
    .catch(err => {
        console.log(err)
    });

    }

  return( 
  <div>
    <h1>SIGNUP PAGE</h1>
      <form onSubmit={handleSubmit}>

    <label forhmtl='userame'>Create a Username</label>
    <br />
      <input 
        name='username'
        value={user.username}
        onChange={handleChange}
        id='username'
        />
        <br />
        <label forhtml='password'>Create a Password</label>
        <br/>
        <input 
          name='password'
          value={user.password}
          onChange={handleChange}
          id='password'
          />
      </form>
    </div>
  
  )
};