import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <div className='base-conatiner'>
    <div className="header">Register</div>
    <div className="content">
      </div>
      <div className="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="text" name="password" placeholder="password" />
        </div>
      </div>
      <button type="button" className="btn">
        Register
      </button>
    </div>
  
  
  )
}

export default Register
